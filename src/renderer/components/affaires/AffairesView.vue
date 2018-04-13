<template>
    <v-container grid-list-xs>
        <div align="right">
            <h1> قائمة القضايا</h1>
        </div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <v-text-field append-icon="search" dir="auto" label="بحث" single-line hide-details v-model="search"/>
                        <v-spacer/>
                        <v-btn @click="aa" color="green" icon><v-icon>cached</v-icon></v-btn>
                        <v-btn route to="/addAffaire"color="blue lighten-3"><v-icon>add</v-icon>إضافة قضية</v-btn>
                    </v-card-title>
                    <v-data-table disable-initial-sort="" :headers="headers" :items="Cases" :search="search">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-right">{{ props.item.entryDate }}</td>
                            <td class="text-xs-right">{{ props.item.numberAffaire }}</td>
                            <td class="text-xs-right">{{ props.item.client }}</td>
                            <td class="text-xs-right">{{ props.item.natureAffaire.text }}</td>
                            <td class="text-xs-right">{{ props.item.against }}</td>
                            <td class="text-xs-right">{{ props.item.againstAdvo}}</td>
                            <td class="text-xs-right">{{ props.item.juridiction }}</td>
                            <td class="text-xs-right">
                                <v-layout row justify-center>
                                    <v-btn fab small class="teal" color="green" @click.native="edit(props.item._id)">
                                        <v-icon color="white">edit</v-icon>
                                    </v-btn>
                                    <v-dialog v-model="dialog" persistent max-width="290">
                                        <v-btn fab small color="red" slot="activator">
                                            <v-icon color="white">delete</v-icon>
                                        </v-btn>
                                        <v-card>
                                            <v-card-title class="headline"> {{props.item.client}}</v-card-title>
                                            <v-card-text>{{props.item.client}} تأكيد محو قضية</v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="green darken-1" flat @click.native="dialog = false">إلفاء</v-btn>
                                                <v-btn color="green darken-1" flat  @click.native="remove(props.item._id)">نعم</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
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
      name: 'Affaires-View',
      data: function () {
        return {
          dialog: false,
          tmp: '',
          search: '',
          pagination: {},
          headers: [
            {text: 'تاريخ الدخول', value: 'entryDate'},
            {text: 'رقم القضية', value: 'numberAffaire'},
            {text: 'العميل', value: 'client'},
            {text: 'النوع', value: 'natureAffaire'},
            {text: 'الطرف الضد', value: 'against'},
            {text: 'محامي الطرف الضد', value: 'againstAdvo.text'},
            {text: 'المحكمة', value: 'juridiction'}
          ] // client/natureAffaire/against||advo/juridiction/entryDate
        }
      },
      computed: {
        ...mapState(['Cases'])
      },
      methods: {
        aa: function () {
          this.$store.dispatch('getCases')
        },
        edit: function (item) {
          this.$router.push({name: 'AffaireProfile', params: {id: item}})
        },
        remove (item) {
          console.log('inside')
          this.$store.dispatch('delete', {id: item})
          this.dialog = false
          this.aa()
        }
      }
    }
</script>

<style scoped>

</style>