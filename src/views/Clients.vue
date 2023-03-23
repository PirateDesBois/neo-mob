<template>
        <v-container>
                <v-row>
                        <v-col>
                                <ClientList />
                        </v-col>
                </v-row>
        </v-container>
</template>
        
<script>
import ClientList from "../components/ClientList.vue";

export default {
  components: {
    ClientList,
  },
};
</script>