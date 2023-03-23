<template>
<v-container>
        <v-row class="text-center mt-15">
          <v-col cols="12">
            <div class="animation text-center-">Welcome</div>
          </v-col>
        </v-row>
    
</v-container>
</template>

<script setup>
</script>

<style>

.animation{
  animation-name: text-focus-in;
  font-size: 80px;
  color: white;
  animation-duration: 3s;
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

</style>
