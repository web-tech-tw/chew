<template>
  <div class="container mx-auto my-5 p-5">
    <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700
        focus:bg-white
        focus:border-blue-600
        focus:outline-none
      "
      v-model="content"
    ></textarea>
    <div>
      <button
        class="
          w-full
          mt-3
          flex
          items-center
          justify-center
          px-8
          py-3
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-violet-100
          bg-violet-700
          hover:bg-violet-600
          md:py-4 md:text-lg md:px-10
        "
        @click="handleSubmit"
      >
        我打完了
      </button>
      <button
        class="
          w-full
          mt-3
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
        @click="goCoder"
      >
        你是工程師嗎？這裡是專業 Coding 模式
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WriterView",
  data: () => ({
    content: "",
  }),
  methods: {
    goCoder() {
      this.$router.push("/coder");
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
