<template>
  <div>
    <button
      class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      v-on:click="toggleModal()"
    >
      Open large modal
    </button>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative my-6 mx-auto max-w-6xl w-11/12">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none"
        >
          <!--header-->
          <div class="flex items-start p-5 rounded-t">
            <input
              type="text"
              class="appearance-none w-2/4 bg-gray-200 text-gray-700 border rounded py-3 px-4 h-10 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
            <button
              class="w-44 h-10 ml-4 bg-nutry-primary hover:bg-nutry-secondary text-white dark:brightness-[.80] font-semibold text-xl border rounded shadow appearance-none border-[#9002bf]"
            >
              Procurar
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto h-96">
            <p class="my-4 text-slate-500 text-lg leading-relaxed"></p>
          </div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Close
            </button>
            <button
              class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
