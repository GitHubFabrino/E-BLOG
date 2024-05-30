import { defineStore } from "pinia";
import { ref } from "vue";

export const useUrl = defineStore("Url", () => {
  const url = ref("http://192.168.43.239:3002");

  return {
    url
  };
});
