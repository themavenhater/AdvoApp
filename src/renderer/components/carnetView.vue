<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
            <v-card>
                <v-card-title>
                    <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"/>
                    <v-spacer/>
                </v-card-title>
                <v-data-table :headers="headers" :items="getsss" :search="search">
                    <template slot="items" slot-scope="props">
                        <td>
                            <v-edit-dialog lazy> {{ props.item.name }}
                                <v-text-field slot="input" label="Edit" v-model="props.item.name" single-line counter :rules="[max25chars]"/>
                            </v-edit-dialog>
                        </td>
                        <td class="text-xs-right">{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item._id }}</td>
                    </template>
                    <template slot="pageText" slot-scope="{ pageStart, pageStop }">
                        From {{ pageStart }} to {{ pageStop }}
                    </template>
                </v-data-table>
            </v-card>
            </v-flex>
            <v-btn @click="aa" >show</v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'carnet-view',
  data: function () {
    return {
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        {
          text: 'name',
          align: 'right',
          sortable: false,
          value: 'name'
        },
        {text: 'الإسم', value: 'name'},
        {text: 'اللقب', value: 'email'},
        {text: 'العنوان', value: 'id'}
      ],
      items: [
      ]
    }
  },
  computed: {
    getsss: function () {
      return this.$store.state.clients
    }
  },
  methods: {
    aa: function () {
      this.$store.dispatch('getAll', 'USER')
    }
  }
}
</script>

<style scoped>

</style>