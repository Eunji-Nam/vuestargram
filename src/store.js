import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      likes: 30,
      clickLike: false,
      more: {},
    }
  },

  mutations: {
    이름변경(state) {
        state.name = 'park'
    },

    plus(state) {
        state.age++
    },

    like(state) {
        if(state.clickLike === false) {
            state.likes++
            state.clickLike = true
        } else {
            state.likes--
            state.clickLike = false
        }
    },
    setMore(state, data) {
        state.more = data
    }
  }, 

  actions: {
    getData({commit}) {
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((response)=>{
            commit('setMore', response.data)
            console.log(response.data)
        })
    }
  }
})

export default store