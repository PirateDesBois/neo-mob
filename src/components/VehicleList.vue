<template>
        <v-app>
                <v-app-bar app color="purple-darken-2" dark>
                        <v-toolbar-title>
                                Vehicle list
                        </v-toolbar-title>
                </v-app-bar>

                <v-container>
                        <v-card class="mt-15">
                                <v-card-title>
                                        New Vehicle
                                </v-card-title>
                                <v-card-text>
                                        <v-form>
                                                <v-text-field v-model="newReservation.vehicle"
                                                        label="Vehicle Name"></v-text-field>
                                                <v-btn color="purple-darken-2" @click="addVehicle">Add</v-btn>
                                        </v-form>
                                </v-card-text>
                        </v-card>

                        <v-divider class="my-4"></v-divider>

                        <v-list>
                                <v-list-item v-for="(reservation, index) in reservations" :key="index">
                                        <v-row>
                                                <v-col>
                                                        <v-card class="px-3 py-2" theme="dark">
                                                                <v-list-item>
                                                                        <v-list-item-title>Name : {{ reservation.vehicle
                                                                        }}</v-list-item-title>
                                                                </v-list-item>
                                                                <v-list-item-action class="justify-end">
                                                                        <v-icon class="deleteIcon"
                                                                                @click="deleteVehicle(index)">mdi-delete
                                                                        </v-icon>
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
                addVehicle() {
                        this.reservations.push({ ...this.newReservation })
                        this.saveVehicleToLocalStorage()
                        alert("Vehicle created successfully !")
                        console.log("Vehicle created successfully !")
                        this.newReservation = { clientName: '', clientEmail: '', reservation: { startDate: null, endDate: null }, vehicle: '' }
                },
                deleteVehicle(index) {
                        this.reservations.splice(index, 1)
                        this.saveVehicleToLocalStorage()
                        console.log("Vehicle deleted successfully !")
                },
                // enregistre la liste des clients dans le local storage en utilisant la méthode setItem de l'API du local storage
                saveVehicleToLocalStorage() {
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



