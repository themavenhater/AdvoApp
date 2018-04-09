<template>
 <v-container>
  <h1>{{ new Date().toLocaleDateString('fr-fr')}}</h1>
  <h1 align="right">مرحبا</h1>
  <v-layout>
         <p>{{ userNumber }}عدد الزبائن </p>
         <p>{{ caseNumber }} عدد القضايا</p>
         <p>{{ audiNumber}} عدد الجلسات</p>
         <p>{{ collNumber}} عدد الزملاء</p>
      </v-layout>
     </v-container>
</template>
<script>
 import {mapState} from 'vuex'

 export default {
   name: 'DashBoard',
   data: function () {
     return {
       caseNumber: '',
       collNumber: '',
       audiNumber: '',
       userNumber: ''
     }
   },
   computed: {
     ...mapState([
       'Colleagues',
       'Audiences',
       'allContact',
       'Cases'
     ])
   },
   created: function () {
     this.caseNumber = Object.keys(this.$store.state.Cases).length
     this.collNumber = Object.keys(this.Colleagues).length
     this.audiNumber = Object.keys(this.Audiences).length
     this.userNumber = Object.keys(this.allContact).length
   },
   mounted () { }
 }
</script>
<style>

</style>