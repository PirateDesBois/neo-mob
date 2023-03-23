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
          <v-list-item prepend-icon="mdi-home"><RouterLink class="nav-link text-white pt-4 text-decoration-none" to="/">Home</RouterLink>
      </v-list-item>
          <v-list-item prepend-icon="mdi-check-circle-outline" ><RouterLink class="nav-link text-white pt-4 text-decoration-none" to="/reservations">Reservations</RouterLink></v-list-item>
          <v-list-item prepend-icon="mdi-account-circle" ><RouterLink class="nav-link text-white pt-4 text-decoration-none" to="/clients">Clients</RouterLink></v-list-item>
          <v-list-item prepend-icon="mdi-ev-station" ><RouterLink class="nav-link text-white pt-4 text-decoration-none" to="/vehicles">Vehicles</RouterLink></v-list-item>
        </v-list>

      </v-navigation-drawer>
      <v-app-bar class="bg-purple-darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mobility App</v-toolbar-title>
      <v-btn color="purple" @click="clearHistory">Clear history</v-btn>
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
  methods: {
                clearHistory() {
                        // Réinitialiser le LocalStorage
                        localStorage.clear();
                        // Refresh page
                        location.reload();
                },
        },

}

</script>

<style>
#inspire{
  background: rgb(98,0,238);
background: radial-gradient(circle, rgba(98,0,238,1) 3%, rgba(5,35,62,1) 100%);
}
.deleteIcon{
  color: rgb(154, 6, 223) !important;
}
.deleteIcon:hover{
  color: rgb(196, 24, 2) !important;
}
</style>