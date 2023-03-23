<template>
        <v-app>
                <v-app-bar app color="primary" dark>
                        <v-toolbar-title>
                                Client list
                        </v-toolbar-title>
                </v-app-bar>

                <v-container>
                        <v-card>
                                <v-card-title>
                                        Add Client
                                </v-card-title>
                                <v-card-text>
                                        <v-form>
                                                <v-text-field v-model="newClient.name" label="Client Name"></v-text-field>
                                                <v-text-field v-model="newClient.email" label="Client Email"></v-text-field>
                                                <v-text-field v-model="newClient.reservation" label="Client Reservation"></v-text-field>
                                                <v-text-field v-model="newClient.vehicle" label="Client Vehicle"></v-text-field>
                                                <v-btn color="primary" @click="addClient">Add</v-btn>
                                        </v-form>
                                </v-card-text>
                        </v-card>

                        <v-divider class="my-4"></v-divider>

                        <v-list>
                                <v-list-item v-for="(client, index) in clients" :key="index">
                                        <v-row>
                                                <v-col>
                                                        <v-card class="bg-orange">
                                                                <v-list-item-content>
                                                                        <v-list-item-title>Name : {{ client.name
                                                                        }}</v-list-item-title>
                                                                        <v-list-item-subtitle>Email: {{ client.email
                                                                        }}</v-list-item-subtitle>
                                                                        <v-list-item-subtitle>Reservation: {{ client.reservation
                                                                        }}</v-list-item-subtitle>
                                                                        <v-list-item-subtitle>Vehicle: {{ client.vehicle
                                                                        }}</v-list-item-subtitle>
                                                                </v-list-item-content>
                                                                <v-list-item-action class="justify-end">
                                                                        <v-icon color="red"
                                                                                @click="deleteClient(index)">mdi-delete</v-icon>
                                                                </v-list-item-action>
                                                        </v-card>
                                                </v-col>
                                        </v-row>
                                </v-list-item>
                        </v-list>
                </v-container>

        </v-app>
</template>

<script>
export default {
  data() {
    return {
      newClient: { name: '', email: '', reservation:'',vehicle:'' },
      clients: []
    }
  },
  methods: {
    addClient() {
      this.clients.push({ ...this.newClient })
      this.saveClientsToLocalStorage()
      this.newClient = { name: '', email: '', reservation:'', vehicle:'' }
    },
    deleteClient(index) {
      this.clients.splice(index, 1)
      this.saveClientsToLocalStorage()
    },
    // enregistre la liste des clients dans le local storage en utilisant la méthode setItem de l'API du local storage
    saveClientsToLocalStorage() {
      localStorage.setItem('clients', JSON.stringify(this.clients))
    },
    loadClientsFromLocalStorage() {
      const clients = localStorage.getItem('clients')
      if (clients) {
        this.clients = JSON.parse(clients)
      }
    }
  },
  mounted() {
    this.loadClientsFromLocalStorage()
  }
}
</script>



