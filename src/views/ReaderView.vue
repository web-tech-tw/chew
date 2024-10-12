<template>
  <div>
    <div v-if="!isLoaded">
      <img alt="loading" class="mx-auto my-24 w-8 h-8 text-white animate-spin" :src="LoadingCircle" />
    </div>
    <div v-else-if="!isNotFound">
      <div class="container mx-auto my-5 p-5">
        <div class="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div v-if="isCodeMode">
              <prism-editor class="code-editor" v-model="content" :highlight="highlighter" :readonly="true"
                line-numbers></prism-editor>
            </div>
            <p v-else class="text-gray-700 text-base">
              {{ content }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span v-for="(time, key) in gumTimes" :key="key"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {{ getTimeTitle(key) }}：{{ time }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            <span class="block xl:inline">😯 ㄨㄚˊ</span><br />
            <span class="block xl:inline">你想找的</span>
            <span class="block text-violet-600 xl:inline">文字片段</span>
            <span class="block xl:inline">不存在</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            您所請求的資源不見了，或者是從來沒有存在過。
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <router-link
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10"
                to="/">
                回首頁
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";

import LoadingCircle from "../assets/LoadingCircle.svg";

import dayjs from "dayjs";

import { useClient } from "../clients/chew";

// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

const gumData = reactive({});

const isLoaded = ref(false);
const isNotFound = ref(false);

const props = defineProps({
  gumId: {
    type: String,
    required: true,
  },
});

const content = computed(() => {
  return gumData.content || "";
});

const isCodeMode = computed(() => {
  return gumData.type && gumData.type !== "plain";
});

const gumTimes = computed(() => {
  const humanReadableFormater = (time) => {
    return dayjs(time * 1000).format("YYYY-MM-DD HH:mm:ss");
  };
  return {
    created_at: humanReadableFormater(gumData.created_at),
    updated_at: humanReadableFormater(gumData.updated_at),
  };
});

function highlighter(code) {
  return highlight(code, languages.js); // languages.<insert language> to return html with markup
}

function getTimeTitle(key) {
  switch (key) {
    case "created_at":
      return "建立時間";
    case "updated_at":
      return "更新時間";
    default:
      return key;
  }
}

onMounted(async () => {
  // Fetch data
  try {
    const client = useClient();
    const data = await client.
      get(`gum/${props.gumId}`).
      json();
    Object.assign(gumData, data);
  } catch (e) {
    isNotFound.value = true;
    console.log(e);
  } finally {
    isLoaded.value = true;
  }
});
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
