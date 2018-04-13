<template>
    <v-container grid-list-md>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
                <v-flex xs5>
                    <v-text-field label="المحكمة" prepend-icon="account_balance" v-model="juridiction" dir="auto" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                    <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
                        <v-text-field slot="activator" label="تاريخ الجلسة" v-model="dateAudience" prepend-icon="event" readonly required/>
                        <v-date-picker v-model="dateAudience" no-title scrollable actions locale="ar">
                            <template slot-scope="{ save, cancel }">
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="save">OK</v-btn>
                                </v-card-actions>
                            </template>
                        </v-date-picker>
                    </v-menu>
                    <br>
                    <br>
                    <br>
                    <v-btn @click="submit" :disabled="!valid">تسجيل</v-btn>
                    <v-btn @click="clear">مسح الخانات</v-btn>
                </v-flex>
                <v-flex xs1/>
                <v-flex xs6>
                    <v-select :items="Cases" prepend-icon="account_box" v-model="Case" label="القضية" :rules="[(v) => !!v || 'خانة ضرورية']" slot="activator" autocomplete required/>
                    <v-select :items="audienceType" v-model="TypeAudience" prepend-icon="input" label="طبيعة الجلسة" slot="activator" autocomplete required/>
                    <v-text-field label="معلومات حول الجلسة" prepend-icon="info" dir="auto" v-model="detailsAudience" multi-line />
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      name: 'add-audience-form',
      data: () => ({
        alert: true,
        menu: false,
        valid: true,
        Case: '',
        juridiction: '',
        dateAudience: '',
        TypeAudience: '',
        detailsAudience: '',
        audienceType: [
          {text: 'type1'},
          {text: 'type2'},
          {text: 'type3'}
        ]
      }),
      methods: {
        submit () {
          if (this.$refs.form.validate()) {
            this.alert = true
            // Native form submission is not yet supported
            let f = {
              _id: 'AUDI_' + this.Case._id + '_' + this.dateAudience,
              juridiction: this.juridiction,
              dateAudience: this.dateAudience.replace(/-/g, '/'),
              TypeAudience: this.TypeAudience.text,
              detailsAudience: this.detailsAudience,
              client: this.Case.client
            }
            this.$store.dispatch('addToDB', {obj: f})
            console.log(f)
            this.$router.push({path: 'audiences'})
          }
        },
        clear () {
          this.$refs.form.reset()
        }
      },
      computed: {
        ...mapState(['Cases'])
      },
      created: function () {
        this.$store.dispatch('getCases')
      }
    }
</script>

<style scoped>

</style>