<template>
  <v-app>
    <the-header></the-header>
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: {
    TheHeader
  },
  data: () => ({
  }),
};
</script>
