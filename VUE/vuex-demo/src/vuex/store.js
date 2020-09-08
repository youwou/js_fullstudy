import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    count: 1,
    abc:2
}
const mutations = {
    add(state,num) {
        state.count += num
    },
    reduce(state) {
        state.count --
    }
}

// const getters = {
//     count: (state) => 
// }

export default new Vuex.Store({
    state,
    mutations
})