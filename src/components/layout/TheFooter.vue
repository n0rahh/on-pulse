<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="deep-purple lighten-2 text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugiat laudantium ipsa, iste eos labore esse! Dolore dignissimos facilis a, pariatur tempora, ea eligendi accusantium vel, exercitationem tempore molestias quis.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quasi necessitatibus dolor qui doloribus sapiente asperiores eum iusto quae eligendi laudantium nesciunt, impedit modi, incidunt repellat nam molestiae exercitationem distinctio.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ONPULSE</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>