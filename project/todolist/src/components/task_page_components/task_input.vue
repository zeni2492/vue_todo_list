<template>
    
    <form class="input-form">
        <p class="input-form__title">Add new task</p>
        <input  v-model="title" placeholder="Title" class="title__input"  type="text">
        <input  v-model="description" placeholder="Description" class="description__input" type="text">
        <button @click.prevent="AddTaskI({title, description})" class="add-task-input__button">Add</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import {v1} from 'uuid';

export default {
    props: {
        ClickToCloseModal: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            title: '',
            description: '',
        }
    },
    methods: {
        ...mapActions(['AddTask']),
        
        
        AddTaskI(){
            this.AddTask({id: v1(),title: this.title, description: this.description});
            this.title = '';
            this.description = '';
            this.ClickToCloseModal();
        },
    }
}
</script>

<style>
    .input-form__title{
        margin: 10px;
        text-align: center;
        font-size: 24px;
    }
    .input-form{
        width: 70%;
        height: 200px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #32683d;
        box-shadow: 100px 100px 1000px 1000px #00000097;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
    }
    .title__input,
    .description__input{
        border: none;
        width: 80%;
        height: 30px;
        margin: 0 auto;
        margin-top: 10px;
        outline: none;
        padding-left: 10px;
        border-radius: 5px;
        justify-content: center;
    }

    .add-task-input__button{
        width: 40%;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #D76F30;
        cursor: pointer;
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
        color: white;
        margin-top: 10px;
    }
</style>