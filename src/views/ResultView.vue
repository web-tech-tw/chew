<template>
  <div class="container my-5 px-9 py-5">
    <div v-if="isShowUrl" class="max-w-sm mx-auto rounded overflow-hidden shadow-lg px-3 py-5 bg-white">
      <h4 class="font-semibold text-slate-900 text-lg">
        片段網址
      </h4>
      <p class="font-normal text-slate-900 text-sm">
        將片段代碼傳送給你的朋友，讓他們利用代碼查詢這份的文字片段。
      </p>
      <input class="w-full my-5 rounded-full bg-slate-100 px-2 py-1 text-md font-semibold text-slate-700" type="text"
        :value="url" />
    </div>
    <div v-else class="max-w-sm mx-auto rounded overflow-hidden shadow-lg px-3 py-5 bg-white">
      <h4 class="font-semibold text-slate-900 text-lg">
        片段代碼
      </h4>
      <p class="font-normal text-slate-900 text-sm">
        將片段代碼傳送給你的朋友，讓他們利用代碼查詢這份的文字片段。
      </p>
      <input class="w-full my-5 rounded-full bg-slate-100 px-2 py-1 text-md font-semibold text-slate-700" type="text"
        :value="props.gumId" />
    </div>
    <button
      class="w-full mt-3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10"
      @click="onPressSwitch">
      {{ switchText }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const {
  VITE_CHEW_INTE_HOST: chewInteHost,
} = import.meta.env;

const props = defineProps({
  gumId: {
    type: String,
    required: true,
  },
});

const isShowUrl = ref(true);

const url = computed(() => `${chewInteHost}/#/r/${props.gumId}`);
const switchText = computed(() => isShowUrl.value ? '顯示片段代碼' : '顯示片段網址');

function onPressSwitch() {
  isShowUrl.value = !isShowUrl.value;
}
</script>
