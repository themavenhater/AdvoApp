<template >
    <v-container fluid grid-list-xs>
        <v-layout>
            <v-flex xs12>
                <div align="center">
                    <h1>ملاحضات</h1>
                    <v-text-field v-model="message" placeholder="New Todo" required/>
                    <v-btn v-if="message!==''" @click="$pouch.post('todos', {message: message}); message=''">إضافة ملاحضة</v-btn>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row justify-space-around wrap>
            <v-flex xs12 class="elevation-2" style="border-radius: 10px">
            <v-list>
                <v-list-tile avatar v-for="todo in todos" @click="">
                    <v-list-tile-content>
                        <input v-model="todo.message" @change="$pouch.put('todos', todo)" :class="todo.color"/>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple @click="$pouch.remove('todos', todo)">
                            <v-icon color="red">delete</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      data: function () {
        return {
          message: ''
        }
      },
      // VuePouch adds a `pouch` config option to all components.
      pouch: {
        // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
        todos: {/* empty selector */}
      },
      methods: {
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