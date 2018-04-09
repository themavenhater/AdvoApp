<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" :right="true" app class="brown darken-2">
        <v-list style="color: aliceblue">
          <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
            <v-list-tile-action>
              <v-icon v-html="item.icon"/>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title" :right="true"/>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed app :clipped="clipped" :right="true" class="green lighten-1">
        <v-btn icon fab>
          <v-icon>close</v-icon>
        </v-btn>
        <v-menu bottom left>
          <v-btn icon slot="activator">
            <v-icon>settings</v-icon>
          </v-btn>
          <v-list>
          <v-btn icon @click.native.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_left' : 'chevron_right'"/>
          </v-btn>
        <v-btn icon @click.native.stop="clipped = !clipped">
          <v-icon>web</v-icon>
        </v-btn>
        <v-btn icon @click.native.stop="fixed = !fixed">
          <v-icon>remove</v-icon>
        </v-btn>
          </v-list>
        </v-menu>
        <v-toolbar-title v-text="title" style="font-weight:bold;"/>
        <v-spacer/>
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"/>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-slide-y-transition mode="out-in">
            <router-view/>
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <v-footer :fixed="fixed" app>
        <v-spacer/>
        <span>&copy; 2018 Blka.Y</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'advo_app',
    data: () => ({
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'web', title: 'الأساسية', to: '/' },
        { icon: 'class', title: 'القضايا', to: '/affaires' },
        { icon: 'account_balance', title: 'الجلسات', to: '/audiences' },
        { icon: 'account_box', title: 'قائمة جهات الإتصال', to: '/clients' },
        { icon: 'apps', title: 'قائمة الزملاء', to: '/colleagues' },
        { icon: 'schedule', title: 'جدول مواعيد', to: '/carnets' },
        { icon: 'note', title: 'ملاحظات', to: '/notes' },
        { icon: 'library_books', title: 'مكتبة قانونية', to: '/biblio' },
        { icon: 'format_align_right', title: 'محرر النصوص', to: '/textEditor' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'برنامج إدارة مكتب الأستاذ زعاف علال'
    }),
    created: function () {
      this.$store.dispatch('getCases')
      this.$store.dispatch('getAllUsers')
      this.$store.dispatch('getColleagues')
      this.$store.dispatch('getAudiences')
      console.log('erersdsd' + Object.keys(this.$store.state.Cases).length)
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cairo:300,400,500,700|Material+Icons');
  /* Global CSS */
  #app {
    font-family: 'Cairo',serif;
  }
  .list__tile__title {
    color: aliceblue;
  }
</style>
