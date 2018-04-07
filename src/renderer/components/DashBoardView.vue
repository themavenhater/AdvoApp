<template>
 <v-container>
  <h1>{{ new Date().toLocaleDateString('fr-fr')}} </h1>
  <h1 align="right">مرحبا أستاذ</h1>
  <v-layout>
       <v-flex xs4>
        <v-icon class="mx-4" x-large light>card_membership</v-icon>
       </v-flex>
       <v-flex xs8>
        <div>
         <div class="subheading">عدد الزبائن </div>
         <strong>{{ userNumber }}</strong>
        </div>
       </v-flex>
       <v-flex xs8>
        <div>
         <div class="subheadingfont">عدد القضايا</div>
         <strong>{{ caseNumber }}</strong>
        </div>
       </v-flex>
       <v-flex xs8>
        <div>
         <div class="subheadingfont">عدد الجلسات</div>
         <strong>{{ audiNumber}}</strong>
        </div>
       </v-flex>
       <v-flex xs8>
        <div>
         <div class="subheadingfont">عدد الزملاء</div>
         <strong>{{ collNumber}}</strong>
        </div>
       </v-flex>
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
     this.caseNumber = Object.keys(this.Cases).length
     this.collNumber = Object.keys(this.Colleagues).length
     this.audiNumber = Object.keys(this.Audiences).length
     this.userNumber = Object.keys(this.allContact).length
   },
   mounted () { }
 }
</script>
<style>

</style>