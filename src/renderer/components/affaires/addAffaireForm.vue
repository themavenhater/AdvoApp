<template>
    <v-container grid-list-md>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
                <v-flex xs5>
                    <v-toolbar-title><p class="text-lg-right">معلومات حول القضية</p></v-toolbar-title>
                    <v-text-field label="عنوان القضية" prepend-icon="info" dir="auto" v-model="titleAffaire" required/>
                    <v-text-field label="رقم القضية" prepend-icon="info" dir="auto" v-model="numberAffaire" required/>
                    <v-text-field label="المحكمة" prepend-icon="account_balance" dir="auto" v-model="juridiction" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                    <v-select :items="affaireType" prepend-icon="input" v-model="natureAffaire" label="طبيعة القضية" slot="activator" autocomplete required/>
                    <v-text-field label="معلومات حول القضية" prepend-icon="info" dir="auto" v-model="detailsAffaire" multi-line />
                    <v-btn @click="submit" :disabled="!valid">تسجيل</v-btn>
                    <v-btn @click="clear">مسح الخانات</v-btn>
                </v-flex>
                <v-flex xs1/>
                <v-flex xs6>
                    <v-toolbar-title><p class="text-lg-right">معلومات عامة</p></v-toolbar-title>
                    <v-select :items="clients" prepend-icon="face" v-model="client" label="معلومات الموكل" :hint="client.address + ' ' + client.phone1" :rules="[(v) => !!v || 'خانة ضرورية']" slot="activator" autocomplete required/>
                    <v-select :items="antiClients" prepend-icon="face" v-model="against" label="معلومات الطرف الأخر" :hint="against.address + ' ' + against.phone1" :rules="[(v) => !!v || 'خانة ضرورية']" slot="activator" autocomplete required/>
                    <v-text-field prepend-icon="face" v-model="againstAdvo" label="محامي الطرف الأخر" slot="activator" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                    <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
                        <v-text-field slot="activator" label="تاريخ الدخول" v-model="entryDate" prepend-icon="event" readonly/>
                        <v-date-picker v-model="entryDate" no-title scrollable actions locale="ar">
                            <template slot-scope="{ save, cancel }">
                                <v-card-actions>
                                    <v-spacer/>
                                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="save">OK</v-btn>
                                </v-card-actions>
                            </template>
                        </v-date-picker>
                    </v-menu>
                    <v-toolbar-title><p class="text-lg-right">الأجرة</p></v-toolbar-title>
                    <v-text-field prefix="دينار جزائري/ساعة" prepend-icon="money" v-model="fees" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
      data: () => ({
        alert: true,
        menu: false,
        valid: true,
        client: '',
        titleAffaire: '',
        numberAffaire: '',
        against: '',
        affaireType: [ /* طبيعة الت مثيل */
          {text: 'القسم المدني'},
          {text: 'القسم العقاري'},
          {text: 'القسم التجاري'},
          {text: 'القسم الاجتماعي'},
          {text: 'القسم البحري'},
          {text: 'قسم شؤون الأسرة'},
          {text: 'القسم الاستعجالي'},
          {text: 'قسم الجنح'},
          {text: 'قسم الأحداث'}
        ],
        againstAdvo: '',
        juridiction: '',
        natureAffaire: '',
        detailsAffaire: '',
        plusInfoAffaire: '',
        entryDate: '',
        fees: '',
        infoInfo: ''
      }),
      methods: {
        submit () {
          if (this.$refs.form.validate()) {
            this.alert = true
            // Native form submission is not yet supported
            let f = {
              _id: 'CASE_' + this.client._id + '_' + this.entryDate,
              client: this.client.name + ' ' + this.client.lname,
              against: this.against.name + ' ' + this.against.lname,
              againstAdvo: this.againstAdvo,
              juridiction: this.juridiction,
              natureAffaire: this.natureAffaire,
              detailsAffaire: this.detailsAffaire,
              titleAffaire: this.titleAffaire,
              numberAffaire: this.numberAffaire,
              entryDate: this.entryDate,
              fees: this.fees,
              text: this.client.name + ' ' + this.client.lname + '  ' + this.entryDate
            }
            this.$store.dispatch('addToDB', {obj: f})
            console.log(f)
            this.$router.push({path: 'affaires'})
          }
        },
        clear () {
          this.$refs.form.reset()
        }
      },
      computed: {
        ...mapState(['clients', 'antiClients'])
      },
      created: function () {
        this.$store.dispatch('getClients')
        this.$store.dispatch('getAntiClients')
      }
    }
</script>

<style scoped>

</style>