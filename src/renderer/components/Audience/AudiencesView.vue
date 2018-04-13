<template>
    <v-container grid-list-xS>
        <div align="right">
            <h1>قائمة الجلسات</h1>
        </div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <v-text-field append-icon="search" dir="auto" label="بحث" single-line hide-details v-model="search"/>
                        <v-spacer/>
                        <v-btn @click="aa" color="green" icon><v-icon>cached</v-icon></v-btn>
                        <v-btn route to="/addAudience"color="blue lighten-3"><v-icon>add</v-icon>إضافة جلسة</v-btn>
                    </v-card-title>
                    <v-data-table disable-initial-sort=true :headers="headers" :items="Audiences" :search="search">
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-right">{{ props.item.dateAudience }}</td>
                            <td class="text-xs-right">{{ props.item.client }}</td>
                            <td class="text-xs-right">{{ props.item.juridiction }}</td>
                            <td class="text-xs-right">{{ props.item.TypeAudience }}</td>
                            <td class="text-xs-right">{{ props.item.detailsAudience }}</td>
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
      name: 'audiences-view',
      data: function () {
        return {
          tmp: '',
          search: '',
          pagination: {},
          headers: [
            {text: 'تاريخ الجلسة', value: 'dateAudience'},
            {text: 'العميل', value: 'client'},
            {text: 'المحكمة', value: 'jurdiction'},
            {text: 'طبيعة الجلسة', value: 'Typeaudience'},
            {text: 'معلومات الجلسة', value: 'detailsAudience'}
          ]
        }
      },
      computed: {
        ...mapState(['Audiences'])
      },
      methods: {
        aa: function () {
          this.$store.dispatch('getAudiences')
        }
      }
    }
</script>

<style scoped>

</style>