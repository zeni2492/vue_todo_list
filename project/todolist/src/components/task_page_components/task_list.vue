<template>
    <div>
      <div v-for="task in AllTasks" :key="task.id">
        <task_item :tasks="task" />
      </div>
    </div>
  </template>
  
  <script>
  import task_item from "./task_item.vue";
  import { mapGetters } from "vuex";
  
  export default {
    components: {
      task_item
    },
    computed: {
      ...mapGetters(["AllTasks"])
    }
  };
  </script>
  
  <style scoped>
  </style>