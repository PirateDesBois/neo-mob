<template>
        <v-container>
                <v-row>
                        <v-col>
                                <VehicleList />
                        </v-col>
                </v-row>
        </v-container>
</template>
        
<script>
import VehicleList from "../components/VehicleList.vue";

export default {
  components: {
    VehicleList,
  },
};
</script>