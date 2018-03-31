<template>
    <v-container grid-list-md>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
                <v-flex xs6/>
                <v-flex xs6>
                    <v-select label="نوع الزبون"  prepend-icon="info" v-model="select" :items="type" :rules="[v => !!v || 'Item is required']" required/>
                </v-flex>
                <v-flex xs4>
                    <v-toolbar-title><p class="text-md-right">معلومات بطاقة التعريف</p></v-toolbar-title>
                    <v-text-field label="الرقم" v-model="ncNumber" :rules="[(v) => !!v || 'خانة ضرورية']" required/> <!-- NC= national card -->
                    <v-text-field label="أصدرت عام " v-model="ncYear" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                    <v-text-field label="أصدرت من طرف" v-model="ncBy" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                    <v-text-field name="input-7-1" label="معلومات إضافية" v-model="infos" multi-line />
                    <v-btn @click="submit" :disabled="!valid">تسجيل</v-btn>
                    <v-btn @click="clear">مسح الخانات</v-btn>
                </v-flex>
                <v-flex xs4>
                    <v-toolbar-title><p class="text-md-right">للاتصال</p></v-toolbar-title>
                    <v-text-field label="رقم الهاتف" v-model="phone1" :rules="[(v) => !!v || 'خانة ضرورية']" prepend-icon="phone" required/>
                    <v-text-field label="رقم الهاتف 2" v-model="phone2" prepend-icon="phone"/>
                    <v-text-field label="رقم الفاكس" v-model="fax" prepend-icon="phone"/>
                    <v-text-field label="الإيميل" v-model="email" :rules="[(v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'الإيميل غير صحيح']" prepend-icon="email"/>
                </v-flex>
                <v-flex xs4>
                <v-toolbar-title><p class="text-lg-right">معلومات عامة</p></v-toolbar-title>
                <v-text-field label="الإسم" dir="auto" v-model="name" :rules="[(v) => !!v || 'خانة ضرورية']" prepend-icon="face" required/>
                <v-text-field label="اللفب" dir="auto" v-model="lname" :rules="[(v) => !!v || 'خانة ضرورية']" prepend-icon="face" required/>
                <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
                    <v-text-field slot="activator" label="تاريخ الإزدياد" v-model="date" prepend-icon="event" readonly/>
                    <v-date-picker v-model="date" no-title scrollable actions locale="ar">
                        <template slot-scope="{ save, cancel }">
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                <v-btn flat color="primary" @click="save">OK</v-btn>
                            </v-card-actions>
                        </template>
                    </v-date-picker>
                </v-menu>
                <v-text-field label="العنوان" dir="auto" v-model="address" prepend-icon="home" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                <v-text-field label="المدينة" dir="auto" v-model="ville" prepend-icon="location_city" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                <v-text-field label="الولاية" dir="auto" v-model="wilaya" prepend-icon="room" :rules="[(v) => !!v || 'خانة ضرورية']" required/>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
    export default {
      data: () => ({
        alert: true,
        valid: true,
        name: '',
        lname: '',
        date: null,
        phone1: '',
        phone2: '',
        fax: '',
        menu: false,
        modal: false,
        ncNumber: '',
        ncYear: '',
        ncBy: '',
        address: '',
        ville: '',
        wilaya: '',
        infos: '',
        email: '',
        select: null,
        type: [
          { text: 'حليف', value: 'client' },
          { text: 'عدو', value: 'antiClient' }
        ]
      }),
      methods: {
        submit () {
          if (this.$refs.form.validate()) {
            this.alert = true
            let d = new Date()
            // Native form submission is not yet supported
            let f = {
              _id: 'USER_' + this.select + '_' + +d,
              select: this.select,
              name: this.name,
              lname: this.lname,
              address: this.address,
              ville: this.ville,
              wilaya: this.wilaya,
              birthday: this.date,
              phone1: this.phone1,
              phone2: this.phone2,
              fax: this.fax,
              email: this.email,
              nationalCard: this.ncNumber + '_' + this.ncYear + '_' + this.ncBy,
              infos: this.infos,
              inscriptionDate: d.toLocaleDateString('fr-fr'),
              text: this.name + ' ' + this.lname + ' ' + d.toLocaleDateString('fr-fr')
            }
            this.$store.dispatch('addToDB', {obj: f})
            console.log(f)
            this.$router.push({path: 'clients'})
          }
        },
        clear () {
          this.$refs.form.reset()
        }
      }
    }
</script>

<style scoped>

</style>