<template>
  <div>
    <prism-editor
      class="code-editor"
      v-model="content"
      :highlight="highlighter"
      line-numbers
    ></prism-editor>
    <div class="operations w-32 bg-gray-500 h-full">
      <button
        class="
          w-full
          flex
          items-center
          justify-center
          px-2
          py-2
          border border-transparent
          text-base
          font-medium
          text-gray-100
          bg-gray-700
          hover:bg-gray-600
        "
        @click="handleSubmit"
      >
        我打完了
      </button>
      <button
        class="
          w-full
          flex
          items-center
          justify-center
          px-2
          py-2
          border border-transparent
          text-base
          font-medium
          text-gray-700
          bg-gray-100
          hover:bg-gray-200
        "
        @click="goWriter"
      >
        一般模式
      </button>
    </div>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  name: "CoderView",
  components: {
    PrismEditor,
  },
  data: () => ({
    content: "",
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
    goWriter() {
      this.$router.push("/writer");
    },
    async handleSubmit() {
      const xhr = await this.$axios.post("/gum", {
        content: this.content,
      });
      this.$router.push({
        name: "code",
        params: {
          result: xhr.data,
        },
      });
    },
  },
};
</script>

<style>
/* required class */
.code-editor {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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

.operations {
  min-width: 100px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
