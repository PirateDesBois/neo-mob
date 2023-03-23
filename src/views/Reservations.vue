<template>
        <v-container>
                <v-row>
                        <v-col>
                                <ReservationList />
                        </v-col>
                </v-row>
        </v-container>
</template>
        
<script>
import ReservationList from "../components/ReservationList.vue";

export default {
  components: {
    ReservationList,
  },
};
</script>