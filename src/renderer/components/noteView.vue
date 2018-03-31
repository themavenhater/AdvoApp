<template>
    <v-container fluid grid-list-xl>
        <v-layout>
            <v-flex xs12>
                <div align="center">
                    <h1>ملاحضات</h1>
                    <v-text-field v-model="message" placeholder="New Todo" required/>
                    <v-btn v-if="message!==''" @click="colorBack();$pouch.post('todos', {message: message, color: color});color='';message='';">إضافة ملاحضة</v-btn>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row justify-space-around wrap>
            <v-flex v-for="todo in todos" xs3>
                <input v-model="todo.message" @change="$pouch.put('todos', todo)" :class="todo.color"/>
                        <button @click="$pouch.remove('todos', todo)">
                        <v-icon>delete</v-icon>
                        </button>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      data: function () {
        return {
          message: '',
          color: ''
        }
      },
      // VuePouch adds a `pouch` config option to all components.
      pouch: {
        // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
        todos: {/* empty selector */}
      },
      methods: {
        colorBack: function () {
          this.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
        }
      }
    }
</script>

<style scoped>
 h1 {
     font-size: 80px;
 }
 input {
     padding-left: 3px;
     height: 34px;
     width: 100%;
     border-radius: 3px;
     border: 1px solid transparent;
     border-top-style: none;
     border-bottom-color: #DDD;
     box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
 }
</style>