<template>
  <v-app>
    <the-header></the-header>
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter
  },
  data: () => ({
  }),
};
</script>
