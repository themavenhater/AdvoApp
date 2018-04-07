<template>
    <v-container grid-list-xl>
        <div align="right">
            <h1>قائمة الزملاء</h1>
        </div>
        <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-card-title>
                    <v-text-field append-icon="search" dir="auto" label="بحث" single-line hide-details v-model="search"/>
                    <v-spacer/>
                    <v-btn @click="aa" color="green"><v-icon>cached</v-icon></v-btn>
                    <v-btn route to="/addColleague"color="blue lighten-3"><v-icon>add</v-icon>إضافة زميل</v-btn>
                </v-card-title>
                <v-data-table :headers="headers" :items="Colleagues" :search="search">
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-right">{{ props.item.select.text }}</td>
                        <td class="text-xs-right">{{ props.item.lname }}</td>
                        <td class="text-xs-right">{{props.item.name}}</td>
                        <td class="text-xs-right">{{props.item.inscriptionDate}}</td>
                        <td class="text-xs-right">{{ props.item.email }}</td>
                        <td class="text-xs-right">{{ props.item.address }}</td>
                        <td class="text-xs-right">{{ props.item.phone1 }}</td>
                    </template>
                    <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                        From {{ pageStart }} to {{ pageStop }}
                    </template>
                </v-data-table>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
      name: 'Clients-View',
      data: function () {
        return {
          tmp: '',
          search: '',
          pagination: {},
          headers: [
            {text: 'المهنة', value: 'select'},
            {text: 'اللقب', value: 'lname'},
            {text: 'الإسم', value: 'name'},
            {text: 'تاريخ التسجيل', value: 'inscriptionDate'},
            {text: 'الإيميل', value: 'email'},
            {text: 'العنوان', value: 'address'},
            {text: 'رقم الهاتف', value: 'phone1'}
          ]
        }
      },
      computed: {
        ...mapState(['Colleagues'])
      },
      methods: {
        aa: function () {
          this.$store.dispatch('getColleagues')
        }
      }
    }
</script>

<style scoped>

</style>