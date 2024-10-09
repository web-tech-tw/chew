<template>
  <div class="bg-violet-500">
    <div class="container my-5 px-9 py-5">
      <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-5 bg-white">
        <h4 class="font-semibold text-slate-900">片段網址：</h4>
        <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
          {{ url }}
        </span>
      </div>
      <div class="mx-3 my-5 text-white">
        或者，將片段代碼傳送給你的朋友，讓他們利用代碼查詢這份的文字片段
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg px-3 py-5 bg-white">
        <h4 class="font-semibold text-slate-900">片段代碼：</h4>
        <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
          {{ code }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const {
  VITE_CHEW_INTE_HOST: chewInteHost,
} = import.meta.env;

const router = useRouter();

const props = defineProps({
  gumId: {
    type: String,
    required: true,
  },
});

const url = computed(
  () => `${chewInteHost}/#/r/${props.gumId}`,
);

onMounted(() => {
  if (!props.gumId) {
    router.replace("/");
  }
})
</script>
