<template>
    <v-container grid-list-xl>
        <h1 align="center">المكتبة القانونية</h1>
        <v-layout row>
            <v-flex xs6><h2>En Français</h2></v-flex>
            <v-flex xs6><h2 style="text-align: right">بالعربية</h2></v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs6 class="elevation-4">
                <v-btn @click="show('fr/FCivil.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code civil</v-btn>
                <v-btn @click="show('fr/FCT.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code des Collectivités Territoriales</v-btn>
                <v-btn @click="show('fr/FCom.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de commerce</v-btn>
                <v-btn @click="show('fr/FCons.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>test</v-btn>
                <v-btn @click="show('fr/FElect.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code électoral</v-btn>
                <v-btn @click="show('fr/FFam.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de la famille.</v-btn>
                <v-btn @click="show('fr/FInfo.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de l'information</v-btn>
                <v-btn @click="show('fr/FJustM.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de justice militaire</v-btn>
                <v-btn @click="show('fr/FMPublic.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code des Marchés Publics et des délégations de service public</v-btn>
                <v-btn @click="show('fr/FNat.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de la nationalité Algérienne</v-btn>
                <v-btn @click="show('fr/FPCivil.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de procédure civile et administrative</v-btn>
                <v-btn @click="show('fr/FPenal.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code pénal</v-btn>
                <v-btn @click="show('fr/FPeni.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de l'organisation pénitentiaire <br>et de la réinsertion sociale des détenus.</v-btn>
                <v-btn @click="show('fr/FPensionM.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code des pensions militaires</v-btn>
                <v-btn @click="show('fr/FPPenal.pdf')" color="blue lighten-2"><v-icon>arrow_forward</v-icon>Code de procédure pénale</v-btn>
            </v-flex>
            <v-flex xs6 class="elevation-4">
                <div id="ar">
                    <v-btn @click="show('ar/ACivil.pdf')" color="green lighten-2" >القانون الـمدنـي<v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/ACT.pdf')" color="green lighten-2">قانون الجمـاعـات الإقليمية <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/ACom.pdf')" color="green lighten-2">القانون التجـاري <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/ACons.pdf')" color="green lighten-2">الدستور<v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/AElect.pdf')" color="green lighten-2">قانون الانتخابـات<v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/AFam.pdf')" color="green lighten-2">قانون الأسـرة <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/AInfo.pdf')" color="green lighten-2">قانون الإعـلام <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/AJustM.pdf')" color="green lighten-2">قانون القضاء العسكري <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/AMPublic.pdf')" color="green lighten-2">قانون الصفقـات العموميـة و تفويضات المرفق العام <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/ANat.pdf')" color="green lighten-2">قانون الجنسـية الجزائـرية <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/APCivil.pdf')" color="green lighten-2">قانون الإجراءات الـمدنيـة والإداريـة <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/APenal.pdf')" color="green lighten-2">قانون العقوبـات <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/APeni.pdf')" color="green lighten-2">قانون تنظيم السجون وإعادة الإدماج الإجتماعي للمحبوسيـن <v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/APensionM.pdf')" color="green lighten-2">قانون المعاشات العسكرية<v-icon>arrow_back</v-icon></v-btn>
                    <v-btn @click="show('ar/APPenal.pdf')" color="green lighten-2">قانون الإجراءات الجزائيـة <v-icon>arrow_back</v-icon></v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<!-- <v-btn @click="show('ar/ACom.pdf')" >القانون المدني2</v-btn> -->
<script>
    const PDFWindow = require('electron-pdf-window')
    const { BrowserWindow } = require('electron').remote

    export default {
      data: function () {
        return {
          url: '/Users/Belka/Documents/Books/LawBooks/'
        }
      },
      methods: {
        show: function (pdf) {
          const win = new BrowserWindow({width: 1200, height: 800, autoHideMenuBar: true, webPreferences: {devTools: false}})
          PDFWindow.addSupport(win)
          win.loadURL(this.url + pdf)
        }
      }
    }
</script>

<style scoped>
button {
    width: 100%;
    font-weight: bold;
}
</style>