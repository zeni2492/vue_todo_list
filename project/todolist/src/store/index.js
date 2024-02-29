import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    plugins: [createPersistedState()],
  state: {
    tasks: []
  },
  getters: {
    AllTasks: state => state.tasks
  },
  actions: {
    AddTask({ commit }, task) {
      commit('Add_task', task)
    },
    DeleteTask({ commit }, id) {
        commit('Delete_task', id)
    },
    UpdateTask({ commit }, task) {
        commit('Update_task', task)
    }
  },
  mutations: {
    Add_task(state, task) {
      state.tasks.push(task)
    },
    Delete_task(state, id) {
        state.tasks = state.tasks.filter(task => task.id !== id)
    },
    Update_task(state, task) {
        let index = state.tasks.findIndex(tasks => tasks.id === task.id)
        
        if (index != -1) {
            console.log(state.tasks);
            state.tasks.splice(index, 1,task)
        }
    }
  },
})
