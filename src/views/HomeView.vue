<template>
  <div>
    <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block xl:inline">想要</span>
          <span class="block text-violet-600 xl:inline">分享文字片段</span>
          <span class="block xl:inline">卻找不到地方貼貼剪剪嗎？</span>
        </h1>
        <p class="mt-3 text-base text-gray-500">
          我們提供一個簡單好用的地方，讓你可以在這裡打打字，並分享給朋友
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <button
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10"
              @click="onClickGoWriter"
            >
              開始打字
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
    <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-right">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block xl:inline">你</span>
          <span class="block text-violet-600 xl:inline">已經拿到</span>
          <span class="block xl:inline">片段代碼了嗎？</span>
        </h1>
        <p class="mt-3 text-base text-gray-500">
          這裡這裡，往這裡輸入你拿到的代碼，我來幫你換成片段資料！
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
          <div class="rounded-md shadow mr-1">
            <input
              v-model="code"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 my-2 sm:my-0 md:py-4 md:text-lg md:px-10"
              type="text"
              placeholder="0code-xxxx"
              @keydown.enter="onClickGoReader"
            >
          </div>
          <div class="rounded-md shadow">
            <button
              class="w-full h-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 md:py-4 md:text-lg md:px-10"
              @click="onClickGoReader"
            >
              <loading-circle-icon
                v-show="isLoading"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
              />
              <span v-show="!isLoading">查詢</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

import LoadingCircleIcon from "../components/LoadingCircleIcon.vue";

const router = useRouter();

const isLoading = ref(false);
const code = ref("");

/**
 *
 */
function onClickGoWriter() {
  router.push("/writer");
}

/**
 *
 */
function onClickGoReader() {
  if (!code.value) {
    return;
  }
  setTimeout(() => {
    router.push(`/r/${code.value}`);
  }, 300);
  isLoading.value = true;
}
</script>
