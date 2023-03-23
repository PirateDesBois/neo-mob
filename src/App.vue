<template>
<v-app id="inspire">
  <v-navigation-drawer
        permanent
        theme="dark"
        v-model="drawer" temporary
        class="border-0"
      >
      <v-list>
          <v-list-item
            prepend-avatar="./assets/picOfMe.jpg"
            title="Sieben Nicola"
            subtitle="sieben.nicola@gmail.com"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list nav>
          <v-list-item prepend-icon="mdi-home"><RouterLink class="nav-link text-light pt-4" to="/">Home</RouterLink>
      </v-list-item>
          <v-list-item prepend-icon="mdi-shopping" ><RouterLink class="nav-link text-light pt-4" to="/Clients">Clients</RouterLink></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar class="bg-purple-darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>App</v-toolbar-title>
    </v-app-bar>
  
  <v-main>
    <router-view />
  </v-main>
</v-app>
  
</template>

<script>
  import { RouterLink } from 'vue-router'
export default {
  data: () => ({ drawer: null }),
}

</script>
