<template>
    <v-container grid-list-xs>
        <div align="right">
            <h1> قائمة جهات الإتصال</h1>
        </div>
        <v-layout row wrap>
            <v-flex xs8/>
            <v-flex xs4>
            </v-flex>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <v-text-field append-icon="search" dir="auto" label="بحث" single-line hide-details v-model="search"/>
                        <v-spacer/>
                        <v-btn @click="aa" color="green" icon><v-icon>cached</v-icon></v-btn>
                        <v-btn route to="/addClient" color="blue lighten-3"><v-icon>add</v-icon>إضافة إتصال</v-btn>
                    </v-card-title>
                    <v-data-table :disable-initial-sort="sort" :headers="headers" :items="allContact" :search="search">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-right" >{{props.item.inscriptionDate}}</td>
                            <td class="text-xs-right">{{ props.item.select }}</td>
                            <td class="text-xs-right">{{ props.item.lname }}</td>
                            <td class="text-xs-right">{{props.item.name}}</td>
                            <td class="text-xs-right">{{ props.item.email }}</td>
                            <td class="text-xs-right">{{ props.item.address }}</td>
                            <td class="text-xs-right">{{ props.item.phone1 }}</td>
                            <td class="text-xs-right">
                                <v-layout row justify-center>
                                <v-btn fab small class="green" @click.native="edit(props.item)">
                                    <v-icon color="white">edit</v-icon>
                                </v-btn>
                                 <v-btn fab small class="red" dark  @click.native="remove(props.item)">
                                    <v-icon>delete</v-icon>
                                </v-btn>
                                </v-layout>
                            </td>
                        </template>
                        <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                            From {{ pageStart }} to {{ pageStop }}
                        </template>
                        <v-alert slot="no-results" :value="true" color="error" icon="warning">
                            البحث عن "{{search}}" لم يعثر على أية نتائج.
                        </v-alert>
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
          dialog: false,
          tmp: '',
          sort: false,
          search: '',
          pagination: {},
          headers: [
            {text: 'تاريخ التسجيل', value: 'inscriptionDate'},
            {text: 'النوع', value: 'select'},
            {text: 'اللقب', value: 'lname'},
            {text: 'الإسم', value: 'name'},
            {text: 'الإيميل', value: 'email'},
            {text: 'العنوان', value: 'address'},
            {text: 'رقم الهاتف', value: 'phone1'}
          ]
        }
      },
      computed: {
        ...mapState(['allContact'])
      },
      methods: {
        aa: function () {
          this.$store.dispatch('getAllUsers')
        },
        edit (item) {
          this.$router.push({name: 'clientProfile', params: {id: item._id}})
        },
        remove (item) {
          console.log(item)
          // this.$store.dispatch('delete', item)
          this.aa()
        }
      }
    }
</script>

<style scoped>
h1 {
    text-align: right;
    }
</style>