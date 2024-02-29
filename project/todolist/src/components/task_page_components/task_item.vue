<template>
    <div class="task-item">
        <div v-if="!editing" class="title-container">
            <h2>{{tasks.title}}</h2>
        </div>
      <div class="update-form" v-else>
        <input
            
          v-model="data.title"
          type="text"
          class="title__input"
        />
        </div>
        <p v-if="!editing">{{ tasks.description }}</p>
        <div class="update-form" v-else>
            <input
            class="description__input"
              v-model="data.description"
             type="text">
        </div>
        <div class="button-container">
            <button @click="UpdateTaskI(tasks)" class="edit-button">{{editing?'Save':'Edit' }}</button>
            <button @click="DeleteTask(tasks.id)" class="delete-button">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        tasks: {}
    },
    data() {
        return {
            editing: false,
            data: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
        ...mapActions(['DeleteTask','UpdateTask']),
        UpdateTaskI(tasks) {
            this.editing = !this.editing;
            if (this.editing) {
                this.UpdateTask(tasks)
                this.data.title = tasks.title;
                this.data.description = tasks.description;
            }
            else {
                tasks.title = this.data.title;
                tasks.description = this.data.description;
            }
        }
    }
}
</script>

<style>
h2 {
    color: white;
    font-size: 24px;
    word-wrap: break-word;
}

p {
    color: white;
    text-align: center;
    word-wrap: break-word;
}

.task-item {
    border-radius: 20px;
    margin-top: 10px;
    background-color: #6BB77B;
    height: auto;
}


.title-container {
    text-align: center;
    margin-bottom: 20px;
}

.button-container {
    text-align: right;
    white-space: nowrap;
    display: flex;
    justify-content: center;
}

.edit-button,
.done-button,
.delete-button {
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    margin: 5px 5px;
    cursor: pointer;
    background-color: #D76F30;
    color: white;
}

.update-form {
    display: flex;
    justify-content: center;
}
</style>