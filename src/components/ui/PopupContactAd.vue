<template>
  <Teleport to="body">
    <transition name="dialog">
      <v-dialog width='800' v-model="info">
        <v-card>
            <v-card-title class="headline deep-purple lighten-2 white--text" primary-title>Wypełnij formularz kontaktowy</v-card-title>
            <v-card-text>
                <v-form class="pa-3">
                    <v-text-field label="Imię Nazwisko" prepend-icon="person"></v-text-field>
                    <v-text-field label="Numer telefonu" prepend-icon="phone"></v-text-field>
                    <v-text-field label="E-Mail" prepend-icon="email"></v-text-field>
                    <v-textarea label="Wiadomość" prepend-icon="edit"></v-textarea>
                    <v-file-input
                    label="Dodaj CV"
                    filled
                    prepend-icon="attach_file">
                    </v-file-input>
                    <div class="d-flex flex-row">
                      <v-btn large outlined color="deep-purple lighten-2" @click="tryClose">Wyślij</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn large text color="deep-purple lighten-2" @click.prevent="tryClose">Zamknij</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
        <v-overlay z-index='-1' opacity='0' v-if="info" @click="tryClose"></v-overlay>
      </v-dialog>
    </transition>
  </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport';
export default {
   props: {
        info: {
            type: Boolean,
            required: true,
        },
  },
  emits: ['close'],
  components: {
    Teleport,
  },
  data() {
      return {
          
      };
  },
  methods: {
    tryClose() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.dialog-enter,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>