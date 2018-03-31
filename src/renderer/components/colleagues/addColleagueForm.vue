<template>
    <v-container grid-list-md>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
                <v-flex xs6/>
                <v-flex xs6>
                    <v-select label="نوع المهنة"  prepend-icon="info" v-model="select" :items="type" :rules="[v => !!v || 'Item is required']" required/>
                </v-flex>

                <v-flex xs5>
                    <v-toolbar-title><p class="text-md-right">للاتصال</p></v-toolbar-title>
                    <v-text-field label="رقم الهاتف" v-model="phone1" :rules="[(v) => !!v || 'خانة ضرورية']" prepend-icon="phone" required/>
                    <v-text-field label="رقم الهاتف 2" v-model="phone2" prepend-icon="phone"/>
                    <v-text-field label="رقم الفاكس" v-model="fax" prepend-icon="phone"/>
                    <v-text-field label="الإيميل" v-model="email" :rules="[(v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'الإيميل غير صحيح']" prepend-icon="email"/>
                    <v-btn @click="submit" :disabled="!valid">تسجيل</v-btn>
                    <v-btn @click="clear">مسح الخانات</v-btn>
                </v-flex>
                <v-flex xs2/>
                <v-flex xs5>
                <v-toolbar-title><p class="text-lg-right">معلومات عامة</p></v-toolbar-title>
                <v-text-field label="الإسم" dir="auto" v-model="name" :rules="[(v) => !!v || 'خانة ضرورية']" prepend-icon="face" required/>
                <v-text-field label="اللفب" dir="auto" v-model="lname" :rules="[(v) => !!v || 'خانة ضرورية']" prepend-icon="face" required/>
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
        phone1: '',
        phone2: '',
        fax: '',
        address: '',
        ville: '',
        wilaya: '',
        infos: '',
        email: '',
        select: null,
        type: [
          { text: 'محامي' },
          { text: 'قاضي' },
          { text: 'محضر قضائي' },
          { text: 'خبير' },
          { text: 'مترجم' },
          { text: 'مهن أخري' }
        ]
      }),
      methods: {
        submit () {
          if (this.$refs.form.validate()) {
            this.alert = true
            let d = new Date()
            // Native form submission is not yet supported
            let f = {
              _id: 'COLL_' + this.select + '_' + +d,
              select: this.select,
              name: this.name,
              lname: this.lname,
              address: this.address,
              ville: this.ville,
              wilaya: this.wilaya,
              phone1: this.phone1,
              phone2: this.phone2,
              fax: this.fax,
              email: this.email,
              infos: this.infos,
              inscriptionDate: d.toLocaleDateString('fr-fr'),
              text: this.name + ' ' + this.lname
            }
            this.$store.dispatch('addToDB', {obj: f})
            console.log(f)
            this.$router.push({path: 'colleagues'})
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