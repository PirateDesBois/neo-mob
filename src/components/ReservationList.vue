<template>
        <v-app>
                <v-app-bar app color="purple-darken-2" dark>
                        <v-toolbar-title>
                                Reservation list
                        </v-toolbar-title>
                </v-app-bar>

                <v-container>
                        <v-card class="mt-15">
                                <v-card-title>
                                        New Reservation
                                </v-card-title>
                                <v-card-text>
                                        <v-form>
                                                <v-text-field v-model="newReservation.clientName"
                                                        label="Client Name"></v-text-field>
                                                <v-text-field v-model="newReservation.clientEmail"
                                                        label="Client Email"></v-text-field>
                                                <v-row>
                                                        <v-col cols="6">
                                                                <v-text-field v-model="newReservation.reservation.startDate"
                                                                        type="date" label="Start Date"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="6">
                                                                <v-text-field v-model="newReservation.reservation.endDate"
                                                                        type="date" label="End Date"></v-text-field>
                                                        </v-col>
                                                </v-row>

                                                <v-text-field v-model="newReservation.vehicle" label="Vehicle"></v-text-field>
                                                <v-btn color="purple-darken-2" @click="addReservation">Add</v-btn>
                                        </v-form>
                                </v-card-text>
                        </v-card>

                        <v-divider class="my-4"></v-divider>

                        <v-list>
                                <v-list-item v-for="(reservation, index) in filteredReservations" :key="index">
                                        <v-row>
                                                <v-col>
                                                        <v-card class="px-3 py-2" theme="dark">
                                                                <v-list-item>
                                                                        <v-list-item-title>Name : {{ reservation.clientName
                                                                        }}</v-list-item-title>
                                                                        <v-list-item-subtitle>Email: {{ reservation.clientEmail
                                                                        }}</v-list-item-subtitle>
                                                                        <v-list-item-subtitle>Reservation Start Date: {{
                                                                                reservation.reservation.startDate
                                                                        }}</v-list-item-subtitle>
                                                                        <v-list-item-subtitle>Reservation End Date: {{
                                                                                reservation.reservation.endDate
                                                                        }}</v-list-item-subtitle>
                                                                        <v-list-item-subtitle>Vehicle: {{ reservation.vehicle
                                                                        }}</v-list-item-subtitle>
                                                                </v-list-item>
                                                                <v-list-item-action class="justify-end">
                                                                        <v-icon class="deleteIcon"
                                                                                @click="deleteReservation(index)">mdi-delete</v-icon>
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
                addReservation() {
                        this.reservations.push({ ...this.newReservation })
                        this.saveReservationsToLocalStorage()
                        alert("Reservation added successfully !")
                        console.log("Reservation added successfully !")
                        this.newReservation = { clientName: '', clientEmail: '', reservation: { startDate: null, endDate: null }, vehicle: '' }
                },
                deleteReservation(index) {
                        this.reservations.splice(index, 1)
                        this.saveReservationsToLocalStorage()
                        console.log("Reservation deleted successfully !")
                },
                // enregistre la liste des clients dans le local storage en utilisant la méthode setItem de l'API du local storage
                saveReservationsToLocalStorage() {
                        localStorage.setItem('reservations', JSON.stringify(this.reservations))
                },
                // charge la liste des clients dans le local storage en utilisant la méthode getItem de l'API du local storage
                loadReservationsFromLocalStorage() {
                        const reservations = localStorage.getItem('reservations')
                        if (reservations) {
                                this.reservations = JSON.parse(reservations)
                        }
                },
        },
        // Propriété computed --------------------------------->
        computed: {
                filteredReservations() {
                        return this.reservations.filter(reservation => reservation.reservation.startDate !== null)
                }
        },
        // Propriété computed --------------------------------->
        mounted() {
                this.reservations = [
                        { clientName: 'John', clientEmail: 'john@example.com', reservation: { startDate: '2023-03-24', endDate: '2023-03-26' }, vehicle: 'Car' },
                        { clientName: 'Jane', clientEmail: 'jane@example.com', reservation: { startDate: '2023-03-25', endDate: '2023-03-27' }, vehicle: 'Bike' },
                        { clientName: 'Joe', clientEmail: 'joe@example.com', reservation: { startDate: '2023-03-25', endDate: '2023-03-25' }, vehicle: 'scooter' },
                        { clientName: 'Samy', clientEmail: 'Samy@example.com', reservation: { startDate: '2023-03-26', endDate: '2023-03-26' }, vehicle: 'MonoWheel' },
                        { clientName: 'Calvin', clientEmail: 'Calvin@example.com', reservation: { startDate: '2023-03-28', endDate: '2023-03-29' }, vehicle: 'Bike' },
                ],
                        this.loadReservationsFromLocalStorage()

        }
}
</script>



