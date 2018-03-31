<template>
    <v-container fluid>
        <v-flex xs12>
            <v-card class="grey lighten-4 elevation-0">
                <v-card-text>
                    <v-container fluid grid-list-md>
                        <div align="right">
                        <h1> الملف الشخصي لـ {{client.name + ' ' + client.lname}}
                        <v-btn color="primary" route to="Clients" fab small>
                            <v-icon>arrow_forward</v-icon>
                        </v-btn></h1>
                        </div>
                        <br>
                        <v-layout row wrap>
                            <v-flex xs4>
                                <h3><p class="text-lg-right">قائمة القضايا</p></h3>
                                <v-card>
                                    <v-list two-line>
                                        <template v-for="(Case, index) in clientCases">
                                            <v-list-tile avatar ripple @click="toggle(Case._id)" :key="Case.juridiction">
                                                <v-list-tile-content>
                                                    <v-list-tile-title>ضـد  {{  Case.against }} </v-list-tile-title>
                                                    <v-list-tile-sub-title class="text--primary">{{ Case.juridiction }}</v-list-tile-sub-title>
                                                    <v-list-tile-sub-title>{{ Case.natureAffaire.text }}</v-list-tile-sub-title>
                                                </v-list-tile-content>
                                                <v-list-tile-action>
                                                    <v-list-tile-action-text>{{ Case.action }}</v-list-tile-action-text>
                                                </v-list-tile-action>
                                            </v-list-tile>
                                            <v-divider v-if="index + 1 < clientCases.length" :key="index"/>
                                        </template>
                                    </v-list>
                                </v-card>

                            </v-flex>
                            <v-flex xs1/>
                            <v-flex xs3>
                                <v-text-field label="رقم الهاتف" dir="auto"  :value="client.phone1"  prepend-icon="face" required/>
                                <v-text-field v-if="client.phone2" label="رقم الهاتف 2" dir="auto"  :value="client.phone2"  prepend-icon="face" required/>
                                <v-text-field v-if="client.fax" label="رقم الفاكس" dir="auto"  :value="client.fax"  prepend-icon="face" required/>
                                <v-text-field label="الإيميل" dir="auto"  :value="client.email"  prepend-icon="face" required/>
                                <v-text-field label="معلومات بطاقة التعريف" dir="auto"  :value="client.nationalCard"  prepend-icon="face" required/>
                                <v-text-field label="تاريخ التسجيل" dir="auto"  :value="client.inscriptionDate"  prepend-icon="face" required/>
                                <v-text-field label="معلومات إضافية" dir="auto"  :value="client.infos"  prepend-icon="face" multi-line/>
                            </v-flex>
                            <v-flex xs1/>

                            <v-flex xs3>
                                <v-text-field label="الإسم" dir="auto"  :value="client.name"  prepend-icon="face" required/>
                                <v-text-field label="اللفب" dir="auto" :value="client.lname" prepend-icon="face" required/>
                                <v-text-field label="تاريخ الإزدياد" dir="auto" :value="client.birthday" prepend-icon="event" required/>
                                <v-text-field label="العنوان" dir="auto" :value="client.address" prepend-icon="home" required/>
                                <v-text-field label="المدينة" dir="auto" :value="client.ville" prepend-icon="location_city" required/>
                                <v-text-field label="الولاية" dir="auto" :value="client.wilaya" prepend-icon="room" required/>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
      name: 'client-profile',
      computed: {
        ...mapState(['client', 'clientCases'])
      },
      created: function () {
        this.$store.dispatch('getclient', this.$route.params.id)
        this.$store.dispatch('getClientCases', 'CASE_' + this.$route.params.id)
      },
      methods: {
        toggle: function (item) {
          this.$router.push({ name: 'AffaireProfile', params: {id: item} })
        }
      }
    }
</script>

<style scoped>

</style>