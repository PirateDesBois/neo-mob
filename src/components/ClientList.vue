<template>
        <v-app>
                <v-app-bar app color="purple-darken-2" dark>
                        <v-toolbar-title>
                                Client List
                        </v-toolbar-title>
                </v-app-bar>

                <v-container>
                        <v-card class="mt-15">
                                <v-card-title>
                                        New Client
                                </v-card-title>
                                <v-card-text>
                                        <v-form>
                                                <v-text-field v-model="newReservation.clientName" label="Client Name"></v-text-field>
                                                <v-text-field v-model="newReservation.clientEmail" label="Client Email"></v-text-field>
                                                <v-btn color="purple-darken-2" @click="addClient">Add</v-btn>
                                        </v-form>
                                </v-card-text>
                        </v-card>

                        <v-divider class="my-4"></v-divider>

                        <v-list>
                                <v-list-item v-for="(reservation, index) in filteredClients" :key="index">
                                        <v-row>
                                                <v-col>
                                                        <v-card class="px-3 py-2" theme="dark">
                                                                <v-list-item>
                                                                        <v-list-item-title>Name : {{ reservation.clientName
                                                                        }}</v-list-item-title>
                                                                        <v-list-item-subtitle>Email: {{ reservation.clientEmail
                                                                        }}</v-list-item-subtitle>
                                                                </v-list-item>
                                                                <v-list-item-action class="justify-end">
                                                                        <v-icon class="deleteIcon"
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
                        newReservation: { clientName: '', clientEmail: '', reservation: { startDate: null, endDate: null }, vehicle: '' },
                        reservations: []
                }
        },
        methods: {
                addClient() {
                        this.reservations.push({ ...this.newReservation })
                        this.saveClientToLocalStorage()
                        alert("Client created successfully !")
                        console.log("Client added successfully !")
                        this.newReservation = { clientName: '', clientEmail: '', reservation: { startDate: null, endDate: null }, vehicle: '' }
                },
                deleteClient(index) {
                        this.reservations.splice(index, 1)
                        this.saveClientToLocalStorage()
                        console.log("Client deleted successfully !")
                },
                // enregistre la liste des clients dans le local storage en utilisant la méthode setItem de l'API du local storage
                saveClientToLocalStorage() {
                        localStorage.setItem('reservations', JSON.stringify(this.reservations))
                },
                // charge la liste des clients dans le local storage en utilisant la méthode getItem de l'API du local storage
                loadCLientFromLocalStorage() {
                        const reservations = localStorage.getItem('reservations')
                        if (reservations) {
                                this.reservations = JSON.parse(reservations)
                        }
                },
        },
        // Propriété computed --------------------------------->
        computed: {
                filteredClients() {
                        return this.reservations.filter(reservation => reservation.clientName !== "")
                }
        },
        mounted() {
                this.reservations = [
                                { clientName: 'John', clientEmail: 'john@example.com', reservation: { startDate: '2023-03-24', endDate: '2023-03-26' }, vehicle: 'Car' },
                                { clientName: 'Jane', clientEmail: 'jane@example.com', reservation: { startDate: '2023-03-25', endDate: '2023-03-27' }, vehicle: 'Bike' },
                                { clientName: 'Joe', clientEmail: 'joe@example.com', reservation: { startDate: '2023-03-25', endDate: '2023-03-25' }, vehicle: 'scooter' },
                                { clientName: 'Samy', clientEmail: 'Samy@example.com', reservation: { startDate: '2023-03-26', endDate: '2023-03-26' }, vehicle: 'MonoWheel' },
                                { clientName: 'Calvin', clientEmail: 'Calvin@example.com', reservation: { startDate: '2023-03-28', endDate: '2023-03-29' }, vehicle: 'Bike' },
                        ],
                this.loadCLientFromLocalStorage()
                        
        }
}
</script>



