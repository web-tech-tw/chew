<template>
  <div>
    <div class="w-full bg-slate-900 px-5 py-3 flex justify-between">
      <button class="bg-slate-900 flex hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1" @click="onClickGoHome">
        <CodeBracketIcon class="h-6 w-6"></CodeBracketIcon>
        <span class="ml-3">Code Chew 專業口香糖</span>
      </button>
      <div class="flex">
        <div class="text-white font-normal py-2 px-4 mx-1">
          模式：JavaScript
        </div>
        <button class="bg-slate-900 hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1" title="一般模式"
          @click="onClickGoWriter">
          <document-text-icon class="h-6 w-6"></document-text-icon>
        </button>
        <button class="bg-slate-900 hover:bg-slate-800 text-white font-normal py-2 px-4 mx-1" title="清空內容"
          @click="onClickReset">
          <trash-icon class="h-6 w-6"></trash-icon>
        </button>
        <button class="bg-amber-900 hover:bg-amber-800 text-white font-normal py-2 px-4 mx-1" title="我打完了"
          @click="onSubmit">
          <check-icon class="h-6 w-6"></check-icon>
        </button>
      </div>
    </div>
    <prism-editor class="code-editor" v-model="content" :highlight="highlighter" line-numbers></prism-editor>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";

import {
  DocumentTextIcon,
  CodeBracketIcon,
  CheckIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid"

import { useRouter } from "vue-router";
import { useClient } from "../clients/chew";

// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

const router = useRouter();

const content = ref("");

const isShowCoder = computed(() => {
  return window.innerWidth < 768;
});

function highlighter(code) {
  return highlight(code, languages.js); // languages.<insert language> to return html with markup
}

watch(content, () => {
  if (content.value) {
    window.onbeforeunload = () => true;
  } else {
    window.onbeforeunload = null;
  }
  sessionStorage.setItem(
    "chew-content",
    content.value,
  );
});

function onClickGoHome() {
  if (content.value && !confirm("確定要離開？")) {
    return;
  }
  sessionStorage.removeItem("chew-content");
  router.push("/");
}

function onClickGoWriter() {
  if (content.value && !confirm("確定要離開？")) {
    return;
  }
  router.replace("/writer");
}

function onClickReset() {
  content.value = "";
}

async function onSubmit() {
  if (!content.value) {
    alert("請輸入內容");
    return;
  }
  if (!confirm("確定要送出？")) {
    return;
  }
  const client = useClient();
  const data = await client.
    post("gums", {
      json: {
        type: "js",
        content: content.value,
      }
    }).
    json();
  sessionStorage.removeItem("chew-content");
  router.replace(`/result/${data._id}`);
}

onMounted(() => {
  if (isShowCoder.value) {
    router.replace("/writer");
    return;
  }
  const savedContent = sessionStorage.getItem("chew-content");
  if (savedContent) {
    content.value = savedContent;
  }
});
</script>

<style>
/* required class */
.code-editor {
  position: absolute;
  top: 64px;
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
</style>
