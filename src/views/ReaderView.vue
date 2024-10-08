<template>
  <div>
    <div v-if="!isLoaded">
        <svg
          class="animate-spin mx-auto my-10 h-5 w-5 text-violet-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
    </div>
    <div v-else-if="!isNotFound">
      <div class="container mx-auto my-5 p-5">
        <div class="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div v-if="isCodeMode">
              <prism-editor
                class="code-editor"
                v-model="content"
                ref="codeEditor"
                :highlight="highlighter"
                line-numbers
              ></prism-editor>
            </div>
            <p v-else class="text-gray-700 text-base">
              {{ content }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              v-for="(time, key) in gumTimes"
              :key="key"
              class="
                inline-block
                bg-gray-200
                rounded-full
                px-3
                py-1
                text-sm
                font-semibold
                text-gray-700
                mr-2
                mb-2
              "
            >
              {{ getTimeTitle(key) }}：{{ time }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="
          mt-10
          mx-auto
          py-10
          max-w-7xl
          px-4
          sm:mt-12 sm:px-6
          md:mt-16
          lg:mt-20 lg:px-8
          xl:mt-28
        "
      >
        <div class="sm:text-center lg:text-left">
          <h1
            class="
              text-4xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-5xl
              md:text-6xl
            "
          >
            <span class="block xl:inline">😯 ㄨㄚˊ</span><br />
            <span class="block xl:inline">你想找的</span>
            <span class="block text-violet-600 xl:inline">文字片段</span>
            <span class="block xl:inline">不存在</span>
          </h1>
          <p
            class="
              mt-3
              text-base text-gray-500
              sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
              md:mt-5 md:text-xl
              lg:mx-0
            "
          >
            您所請求的資源不見了，或者是從來沒有存在過。
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <button
                v-if="$router.history.length"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  text-white
                  bg-violet-600
                  hover:bg-violet-700
                  md:py-4 md:text-lg md:px-10
                "
                @click="$router.back"
              >
                返回上一頁
              </button>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <router-link
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  text-violet-700
                  bg-violet-100
                  hover:bg-violet-200
                  md:py-4 md:text-lg md:px-10
                "
                to="/"
              >
                回首頁
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  name: "ReaderView",
  components: {
    PrismEditor,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  computed: {
    content() {
      return this.gum.content || "";
    },
    isCodeMode() {
      return this.gum.doc_type !== "plaintext";
    },
    gumTimes() {
      const humanReadableFormater = (time) => {
        return dayjs(time * 1000).format("YYYY-MM-DD HH:mm:ss");
      };
      return {
        created_at: humanReadableFormater(this.gum.created_at),
        updated_at: humanReadableFormater(this.gum.updated_at),
      };
    },
  },
  data: () => ({
    gum: {},
    isLoaded: false,
    isNotFound: false,
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
    getTimeTitle(key) {
      switch (key) {
        case "created_at":
          return "建立時間";
        case "updated_at":
          return "更新時間";
        default:
          return key;
      }
    },
  },
  created() {
    // Fetch data
    this.$axios
      .get(`/gum/${this.code}`)
      .then((response) => {
        this.gum = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.isNotFound = true;
      })
      .finally(() => {
        this.isLoaded = true;
      });
  },
  mounted() {
    if (this.isCodeMode) {
      // Disable edit mode
      const editorTextarea =
        this.$refs.codeEditor?.$el?.children[1]?.children[0];
      if (editorTextarea) {
        editorTextarea.setAttribute("disabled", true);
      } else {
        console.error("editorTextarea is not found.");
      }
    }
  },
};
</script>

<style>
/* required class */
.code-editor {
  min-height: 300px;

  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
