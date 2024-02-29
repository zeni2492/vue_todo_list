<template>
  <div class="tasks" @click="ClickToCloseModal">
    <nav class="nav-bar">
      <div class="nav-bar__main-page">
        <router-link class="link-button-to-main-page" to="/">Main Page</router-link>
      </div>
    </nav>

      <div class="h1-item">
        <h1>Tasks Page</h1>
      </div>

      <div>
        <task_list />
      </div>
  </div>
    <div class="task-input" v-if="ShowModal">
      <task_input :ClickToCloseModal="ClickToCloseModal" />
    </div>

    <div class="add-task">
      <button class="add-task__button" @click="ClickToShowModal">Add</button>
    </div>
</template>
  
<script>
import task_item from './task_page_components/task_item.vue';
import task_input from './task_page_components/task_input.vue';
import task_list from './task_page_components/task_list.vue';

export default {
  name: "tasks-page",
  data() {
    return {
      ShowModal: false,
    }
  },
  components: {
    task_item,
    task_input,
    task_list
  },
  methods: {
    ClickToShowModal() {
      this.ShowModal = true
    },
    ClickToCloseModal() {
      this.ShowModal = false
    }
  }
}
</script>
  
<style>


.tasks {
  height: calc(100vh - 50px);
}

.link-button-to-main-page {
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  text-decoration: none;
  padding: 10px 20px;
  background-color: #D76F30;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: height .3s ease, line-height .3s ease;
  height: 30px;
  overflow: hidden;
  align-items: center;
  text-align: center;
  line-height: 30px;
}

.link-button-to-main-page:hover {
  height: 50px;
  line-height: 50px;
}

.nav-bar__tasks-page {
  height: 50px;
  line-height: 50px;
}

.nav-bar {
  display: flex;
  flex-direction: row;
  width: 200px;
}

.add-task {
  position: fixed;
  right: 3%;
  top: 8%;

}

.add-task__button {
  cursor: pointer;
  background-color: #D76F30;
  border: none;
  outline: none;
  color: white;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 20px;
}
</style>