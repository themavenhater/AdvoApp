<template>
    <v-container grid-list-xl>
        <h1 align="center">قائمة المقالات النموذجية
            <v-icon>assignment_returned</v-icon>
        </h1>
        <v-layout row>
            <v-btn @click="load('file1')"> مقال 1</v-btn>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <quill-editor dir="rtl" ref="myTextEditor" v-model="content" :options="editorOption">
                </quill-editor>
                <v-btn @click="save()" color="blue lighten-2">
                    <v-icon blue>description</v-icon>
                    WORD حفظ في الوورد
                </v-btn>
                <v-btn @click="clear()" color="green lighten-1">
                    <v-icon>clear_all</v-icon>
                    مسح الكل
                </v-btn>
                <v-btn onclick="window.print()">Print</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import hljs from 'highlight.js'
    import {quillEditor} from 'vue-quill-editor'

    const htmlDocx = require('html-docx-js/dist/html-docx')
    const fs = require('file-saver')

    export default {
      components: {
        quillEditor
      },
      data: function () {
        return {
          content: '<br><br><br><br><br><br><br><br><br>',
          editorOption: {
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{'header': 1}, {'header': 2}],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'script': 'sub'}, {'script': 'super'}],
                [{'indent': '-1'}, {'indent': '+1'}],
                [{'direction': 'rtl'}],
                [{'size': ['small', false, 'large', 'huge']}],
                [{'font': []}],
                [{'color': []}, {'background': []}],
                [{'align': []}],
                ['clean'],
                ['link', 'image']
              ],
              syntax: {
                highlight: text => hljs.highlightAuto(text).value
              }
            }
          }
        }
      },
      computed: {
        editor () {
          return this.$refs.myTextEditor.quill
        },
        tt () {
          this.content = '<br><br><br><br><br>'
        }
      },
      methods: {
        save: function () {
          let lool = '<!Doctype html> ' + '<html><head><meta charset="utf-8"><style>h1{text-align:center}h2{text-align:right} p{text-align:right}</style><body>' + this.content + '</body></head></html>'
          console.log(typeof lool)
          var converted = htmlDocx.asBlob(lool)
          console.log(converted)
          fs.saveAs(converted, 'القضية.docx')
        },
        clear: function () {
          this.content = '<br><br><br><br><br><br><br><br><br>'
        },
        load: function (file) {
          this.content = this.$store.state.savedDoc[file].html
        }
      }
    }
</script>

<style scoped>
    h1 {
        text-align: right;
    }

    p {
        direction: rtl;
    }
</style>