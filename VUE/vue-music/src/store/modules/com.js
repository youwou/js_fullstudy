import * as type from '../types'

const state = {
  showSidebar: false,
  searchHistory:['vue','tasfa','tadt1ada','adt2']
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

const mutations = {
  [type.COM_SHOW_SIDE_BAR](state, status) {
    state.showSidebar = status
  },
  [type.COM_DELETE_SEARCH_HISTORY](state,index) {
    state.searchHistory.splice(index,1)
  },
  [type.COM_SAVE_SEARCH_HISTORY](state,payload) {
    state.searchHistory = payload
  }
}

const actions = {
  setShowSidebar({ commit }, status) {
    commit(type.COM_SHOW_SIDE_BAR, status)
  },
  deleteSearchHistory({commit},index){
    commit(type.COM_DELETE_SEARCH_HISTORY,index)
  },
  saveSearchHistory({commit,state},query) {
    let 
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}