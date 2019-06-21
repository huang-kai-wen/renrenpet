

export default {
  state: {
    homeRoute: '',
    breadCrumbList: ''
  },
  getters: {
    // errorCount: state => state.errorList.length
  },
  mutations: {
    setBreadCrumb (state) {
      console.log(state)
    }
  },
  actions: {
    addErrorLog ({ commit, rootState }, info) {
      console.log(commit, rootState, info)
    }
  }
}
