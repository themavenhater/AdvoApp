<template>
    <v-container fluid>
            <v-card class="grey lighten-4 elevation-0">
                <v-card-text>
                    <v-container fluid grid-list-md>
                        <div align="right">
                            <h1> قضيـة {{affaire.client}}
                                <v-btn color="primary" route to="Affaires" fab small>
                                <v-icon>arrow_forward</v-icon>
                            </v-btn></h1>
                        </div>
                        <br>
                        <v-layout row wrap>
                            <v-flex xs4>
                                <v-text-field label="رقم القضية" :value="affaire.numberAffaire" prepend-icon="one" dir="auto"/>
                                <h3><p class="text-lg-right">قائمة الجلسات</p></h3>
                                <v-card>
                                    <v-list two-line>
                                        <template v-for="(audi, index) in caseAudiences">
                                            <v-list-tile avatar ripple @click="" :key="audi.juridiction">
                                                <v-list-tile-content>
                                                    <v-list-tile-title> {{  audi.dateAudience }} </v-list-tile-title>
                                                    <v-list-tile-sub-title class="text--primary">{{ audi.TypeAudience }}</v-list-tile-sub-title>
                                                    <v-list-tile-sub-title>{{ audi.detailsAudience }}</v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                            <v-divider v-if="index + 1 < caseAudiences.length" :key="index"/>
                                        </template>
                                    </v-list>
                                </v-card>
                            </v-flex>
                            <v-flex xs1/>
                            <v-flex xs3>
                                <v-toolbar-title><p class="text-lg-right">معلومات حول القضية</p></v-toolbar-title>
                                <v-text-field label="المحكمة" :value="affaire.juridiction" prepend-icon="account_balance" dir="auto" />
                                <v-text-field prepend-icon="input" :value="affaire.natureAffaire.text" label="طبيعة القضية"/>
                                <v-text-field label="عنوان القضية" :value="affaire.titleAffaire" prepend-icon="info" dir="auto" />
                                <v-text-field label="معلومات حول القضية" :value="affaire.detailsAffaire" prepend-icon="info" dir="auto" multi-line/>
                            </v-flex>
                            <v-flex xs1/>
                            <v-flex xs3>
                                <v-toolbar-title><p class="text-lg-right">معلومات عامة</p></v-toolbar-title>
                                <v-text-field  prepend-icon="face" :value="affaire.client" label="معلومات الموكل" />
                                <v-text-field  prepend-icon="face" :value="affaire.against" label="معلومات الطرف الأخر" />
                                <v-text-field  prepend-icon="face" :value="affaire.againstAdvo.text" label="محامي الطرف الأخر" />
                                <v-text-field  prepend-icon="face" :value="affaire.entryDate" label="تاريخ الدخول" />
                                <v-toolbar-title><p class="text-lg-right">الأجرة</p></v-toolbar-title>
                                <v-text-field prefix="دينار جزائري/ساعة" :value="affaire.fees" prepend-icon="money"/>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-card>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['affaire', 'caseAudiences'])
      },
      created: function () {
        this.$store.dispatch('getCase', this.$route.params.id)
        this.$store.dispatch('getCaseAudience', 'AUDI_' + this.$route.params.id)
        console.log(this.$store.state.caseAudience)
      }
    }
</script>

<style scoped>

</style>