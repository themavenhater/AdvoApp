import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'DashBoardView', component: require('@/components/DashBoardView').default},
    {path: '/affaires', name: 'affaires', component: require('@/components/affaires/affairesView').default},
    {path: '/audiences', name: 'audiences', component: require('@/components/Audience/audiencesView').default},
    {path: '/clients', name: 'clients', component: require('@/components/Clients/clientsView').default},
    {path: '/client:id', name: 'clientProfile', component: require('@/components/Clients/clientProfile').default},
    {path: '/affaire:id', name: 'AffaireProfile', component: require('@/components/affaires/AffaireProfile').default},
    {path: '/colleagues', name: 'colleagues', component: require('@/components/colleagues/colleaguesView').default},
    {path: '/addClient', name: 'addClient', component: require('@/components/Clients/addClientForm').default},
    {path: '/addColleague', name: 'addColleague', component: require('@/components/colleagues/addColleagueForm').default},
    {path: '/addAffaire', name: 'addAffaire', component: require('@/components/affaires/addAffaireForm').default},
    {path: '/addAudience', name: 'addAudience', component: require('@/components/Audience/addAudienceForm').default},
    {path: '/carnets', name: 'carnets', component: require('@/components/carnetView').default},
    {path: '/notes', name: 'notes', component: require('@/components/noteView').default},
    {path: '/biblio', name: 'biblio', component: require('@/components/biblioView').default},
    {path: '/textEditor', name: 'textEditor', component: require('@/components/textEditorView').default},
    {path: '*', redirect: '/'}
  ]
})
