<template>
  <Teleport to="body">
    <transition name="dialog">
      <v-dialog width='800' v-model="infoChange">
        <v-card>
            <v-card-title class="headline deep-purple lighten-2 white--text" primary-title>Informacja</v-card-title>
            <v-card-text>
                <v-form class="pa-3">
                    <v-text-field label="Imię Nazwisko" :value="name + ' ' + surname" prepend-icon="person"></v-text-field>
                    <v-text-field label="Country" :value="country" prepend-icon="language"></v-text-field>
                    <v-text-field label="E-Mail" :value="email" prepend-icon="email"></v-text-field>
                    <v-text-field label="Numer telefonu" :value="number" prepend-icon="phone"></v-text-field>
                    <v-textarea label="O mnie" :value="aboutInfo" prepend-icon="edit"></v-textarea>
                    <div class="d-flex flex-row">
                      <v-btn large outlined color="deep-purple lighten-2" @click.prevent="tryChange">Zmień</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn large text color="deep-purple lighten-2" @click.prevent="tryClose">Zamknij</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
        <v-overlay z-index='-1' opacity='0' v-if="infoChange" @click="tryClose"></v-overlay>
      </v-dialog>
    </transition>
  </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport';
export default {
   props: {
        infoChange: {
            type: Boolean,
            required: true,
        },
        name: {
            type: String,
            default: '',
        },
        surname: {
            type: String,
            default: '',
        },
        country: {
            type: String,
            default: '',
        },
        aboutInfo: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            default: '',
        },
        number: {
            type: String,
            default: '',
        },
  },
  emits: ['close', 'changeData'],
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
    tryChange() {
        this.$emit('changeData');
    }
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