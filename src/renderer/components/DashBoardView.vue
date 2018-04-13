<template>
 <v-container grid-list-xs>
     <v-layout wrap>
         <v-flex xs6>
            <h1 class="display-1">{{ new Date().toLocaleDateString('fr-fr')}}</h1>
         </v-flex>
         <v-flex xs6>
             <h1 class="display-1" align="right"> مكتب الأستاذ زعاف علال</h1>
         </v-flex>
         <v-flex xs12>
             <h1 align="right" class="display-1">مرحبا</h1>
         </v-flex>
     </v-layout>
     <br>
     <v-layout wrap>
          <v-flex xs2 v-for="audi in Audiences" v-if="new Date().getTime() > new Date(audi.dateAudience).getTime()">
              <v-card hover raised>
                  <v-card-title primary-title>
                      <div>
                          <h3 class="headline mb-0">{{audi.client}}</h3>
                          <span class="grey--text">{{audi.juridiction}} - {{audi.dateAudience}}</span>
                          <p> {{audi.detailsAudience}}</p>
                      </div>
                  </v-card-title>
              </v-card>
          </v-flex>
         <v-flex xs2 v-for="audi in Audiences" v-if="new Date().getTime() > new Date(audi.dateAudience).getTime()">
             <v-card hover raised>
                 <v-card-title primary-title>
                     <div>
                         <h3 class="headline mb-0">{{audi.client}}</h3>
                         <span class="grey--text">{{audi.juridiction}} - {{audi.dateAudience}}</span>
                         <p> {{audi.detailsAudience}}</p>
                     </div>
                 </v-card-title>
             </v-card>
         </v-flex>
     </v-layout>
     <v-layout row wrap  justify-style-between style="margin-top: 30px">
         <v-flex md3 sm6 xs12>
             <v-card class="blue darken-3" light style="border-radius: 20px">
                 <v-container fluid grid-list-sm light>
                     <v-layout class="mt-0 mb-0" row wrap>
                         <v-flex d-flex xs3>
                             <v-icon class="mx-0" x-large light>account_box</v-icon>
                         </v-flex>
                         <v-flex d-flex xs9 >
                             <v-layout class="mt-2 mb-0 pa-0" row wrap>
                                 <x-flex d-flex xs12>
                                     <div class="silver--text subheading">عدد الزبائن </div>

                                 </x-flex>
                                 <v-flex d-flex xs12>
                                     <div class="silver--text display-1">{{Object.keys(allContact).length}}</div>
                                 </v-flex>
                             </v-layout>
                         </v-flex>
                     </v-layout>
                 </v-container>
             </v-card>
         </v-flex>
         <v-flex md3 sm6 xs12>
             <v-card class="green darken-3" light style="border-radius: 20px">
                 <v-container fluid grid-list-sm light>
                     <v-layout class="mt-0 mb-0" row wrap>
                         <v-flex d-flex xs3>
                             <v-icon class="mx-0" x-large light>class</v-icon>
                         </v-flex>
                         <v-flex d-flex xs9 >
                             <v-layout class="mt-2 mb-0 pa-0" row wrap>
                                 <x-flex d-flex xs12>
                                     <div class="silver--text subheading">عدد القضايا </div>
                                 </x-flex>
                                 <v-flex d-flex xs12>
                                     <div class="silver--text display-1">{{Object.keys(Cases).length}}</div>
                                 </v-flex>
                             </v-layout>
                         </v-flex>
                     </v-layout>
                 </v-container>
             </v-card>
         </v-flex>
         <v-flex md3 sm6 xs12>
             <v-card class="red brighter-3" light style="border-radius: 20px">
                 <v-container fluid grid-list-sm light>
                     <v-layout class="mt-0 mb-0" row wrap>
                         <v-flex d-flex xs3>
                             <v-icon class="mx-0" x-large light>account_balance</v-icon>
                         </v-flex>
                         <v-flex d-flex xs9 >
                             <v-layout class="mt-2 mb-0 pa-0" row wrap>
                                 <x-flex d-flex xs12>
                                     <div class="silver--text subheading">عدد الجلسات</div>
                                 </x-flex>
                                 <v-flex d-flex xs12>
                                     <div class="silver--text display-1">{{Object.keys(Audiences).length}}</div>
                                 </v-flex>
                             </v-layout>
                         </v-flex>
                     </v-layout>
                 </v-container>
             </v-card>
         </v-flex>
         <v-flex md3 sm6 xs12>
             <v-card class="grey brighter-3" light style="border-radius: 20px">
                 <v-container fluid grid-list-sm light>
                     <v-layout class="mt-0 mb-0" row wrap>
                         <v-flex d-flex xs3>
                             <v-icon class="mx-0" x-large light>apps</v-icon>
                         </v-flex>
                         <v-flex d-flex xs9 >
                             <v-layout class="mt-2 mb-0 pa-0" row wrap>
                                 <x-flex d-flex xs12>
                                     <div class="silver--text subheading">عدد الزملاء</div>
                                 </x-flex>
                                 <v-flex d-flex xs12>
                                     <div class="silver--text display-1">{{Object.keys(Colleagues).length}}</div>
                                 </v-flex>
                             </v-layout>
                         </v-flex>
                     </v-layout>
                 </v-container>
             </v-card>
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
       show: false
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
   },
   mounted () { }
 }
</script>
<style>

</style>