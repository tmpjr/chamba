<template>
  <v-app id="chamba" dark>
		<v-navigation-drawer 
      fixed
      clipped
      disable-route-watcher
      v-model="drawer"
      app>
      <v-list dense class="pt-0">
        <template v-for="(item, i) in items">
          <v-divider dark class="my-4" v-if="item.divider"></v-divider>
          <v-list-tile v-else :key="item.text" :to="{ name: item.to }" @click="drawer = !drawer">
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.text"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
		</v-navigation-drawer>
    <v-toolbar
      class="grey darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title style="width: 400px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title">CHAMBA <span class="text">Invoice System</span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon style="margin-right:0;">
        <v-avatar size="36px" tile>
          <v-icon>account_circle</v-icon>
        </v-avatar>
      </v-btn>
      <v-toolbar-title style="font-weight:300;font-size:21px;" class="ml-0 pl-0">{{ username }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <!--v-router-->
          <router-view :key="$route.fullPath"></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
  const router = this.$router

	export default {
		data() {
			return {
				drawer: false,
        dialog: false,
        username: 'tmpjr',
        items: [
          { icon: 'dashboard', text: 'Dashboard', to: 'dashboard' },
          { icon: 'people', text: 'Clients', to: 'clients' }
        ]
			}
		}
	}
</script>
