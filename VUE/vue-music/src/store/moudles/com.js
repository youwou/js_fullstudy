import * as abc from '../types'

const state = {
    showSidebar: false
}

const getters = {
    showSidebar: state => state.showSidebar
}

const mutations = {
    [abc.COM_SHOW_SIDE_BAR](state,status) {
        state.showSidebar = status
    }
}

const actions = {
    setShowSidebar({commit},status) {
        commit(abc.COM_SHOW_SIDE_BAR,status)
        // console.log(111);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}