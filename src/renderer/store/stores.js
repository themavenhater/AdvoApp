import Vue from 'vue'
import Vuex from 'vuex'
import api from '../../api/'

Vue.use(Vuex)

// noinspection JSAnnotator
export const store = new Vuex.Store({
  mutations: {
    addToDB: (state, f) => {
      api.add(f, ' ajouté')
    },
    getAllUsers: (state, start) => {
      api.getAll(start, false, resultat => {
        state.allContact = resultat
      })
    },
    getClients: (state, start) => {
      api.getAll(start, false, resultat => {
        state.clients = resultat
      })
    },
    getAntiClients: (state, start) => {
      api.getAll(start, false, resultat => {
        state.antiClients = resultat
      })
    },
    getCases: (state, start) => {
      api.getAll(start, false, resultat => {
        state.Cases = resultat
      })
    },
    getAudiences: (state, start) => {
      api.getAll(start, false, resultat => {
        state.Audiences = resultat
      })
    },
    getColleagues: (state, start) => {
      api.getAll(start, false, resultat => {
        state.Colleagues = resultat
      })
    },
    delete: (state, id) => {
      api.delete(id)
    },
    getclient: (state, id) => {
      api.get(id, false, resultat => {
        state.client = resultat
      })
    },
    getClientCases: (state, id) => {
      api.getAll(id, false, resultat => {
        state.clientCases = resultat
      })
    },
    getCase: (state, id) => {
      api.get(id, false, result => {
        state.affaire = result
      })
    },
    getCaseAudience: (state, id) => {
      api.getAll(id, false, result => {
        state.caseAudiences = result
      })
    }
  },
  actions: {
    addToDB: (d, {obj}) => {
      setTimeout(function () {
        d.commit('addToDB', obj)
      }, 200)
    },
    getAllUsers: (d) => {
      d.commit('getAllUsers', 'USER')
    },
    getCases: (d) => {
      setTimeout(function () {
        d.commit('getCases', 'CASE')
      }, 200)
    },
    getAudiences: (d) => {
      setTimeout(function () {
        d.commit('getAudiences', 'AUDI')
      }, 200)
    },
    getClients: (d) => {
      setTimeout(function () {
        d.commit('getClients', 'USER_client')
      }, 200)
    },
    getAntiClients: (d) => {
      setTimeout(function () {
        d.commit('getAntiClients', 'USER_antiClient')
      }, 200)
    },
    getColleagues: (d) => {
      setTimeout(function () {
        d.commit('getColleagues', 'COLL')
      }, 200)
    },
    delete: (d, id) => {
      setTimeout(function () {
        d.commit('delete', id)
      }, 200)
    },
    getclient: (d, id) => {
      setTimeout(function () {
        d.commit('getclient', id)
      }, 200)
    },
    getClientCases: (d, id) => {
      setTimeout(function () {
        d.commit('getClientCases', id)
      }, 200)
    },
    getCase: (d, id) => {
      setTimeout(function () {
        d.commit('getCase', id)
      }, 200)
    },
    getCaseAudience: (d, id) => {
      setTimeout(function () {
        d.commit('getCaseAudience', id)
      }, 200)
    }
  },
  state: {
    allContact: [],
    Cases: [],
    affaire: {},
    caseAudiences: [],
    clients: [],
    client: {},
    clientCases: [],
    antiClients: [],
    Audiences: [],
    Colleagues: [],
    Advocats: [
      {text: 'loki'},
      {text: 'thor'},
      {text: 'hulk'}
    ],
    juridictions: [
      {text: 'valhala'},
      {text: 'middle Earth'},
      {text: 'les roses'}
    ],
    savedDoc: {
      'file1': {html: '<p>azeaze</p>'},
      'file2': {html: '<p>file222</p>'},
      'file3': {html: '<p>fileee33</p>'},
      'file4': {html: '<p>file444</p>'},
      'file5': {html: '<p>file 5555</p>'}
    }
  },
  getters: {
  }
})
