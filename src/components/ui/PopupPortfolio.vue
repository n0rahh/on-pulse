<template>
  <Teleport to="body">
    <transition name="dialog">
      <v-dialog width='800' v-model="open">
        <v-card>
            <v-card-title class="headline deep-purple lighten-2 white--text" primary-title>Dodaj swoje portfolio!</v-card-title>
            <v-card-text>
                <v-form class="pa-3">
                    <v-text-field v-model="name" label="Imię" prepend-icon="badge"></v-text-field>
                    <v-text-field v-model="surname" label="Nazwisko" prepend-icon="badge"></v-text-field>
                    <v-text-field v-model="country" label="Miasto" prepend-icon="language"></v-text-field>
                    <v-textarea v-model="about" label="O mnie" prepend-icon="edit"></v-textarea>
                    <v-text-field v-model="specialization" label="Specjalizacja" prepend-icon="work"></v-text-field>
                    <v-text-field v-model="number" label="Numer telefonu" prepend-icon="phone"></v-text-field>
                    <v-text-field v-model="email" label="E-Mail" prepend-icon="email"></v-text-field>
                    <v-file-input
                    label="Dodaj zdjęcie"
                    filled
                    @change="onFileChange($event)"
                    prepend-icon="mdi-camera">
                    </v-file-input>
                    <div class="d-flex flex-row">
                      <v-btn large outlined color="deep-purple lighten-2" @click="addBtn">Dodaj</v-btn>
                      <v-spacer></v-spacer>
                      <v-btn large text color="deep-purple lighten-2" @click.prevent="tryClose">Close</v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
        <v-overlay z-index='-1' opacity='0' v-if="open" @click="tryClose"></v-overlay>
      </v-dialog>
    </transition>
  </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport';
import storeCandidates from '../../store/modules/candidates';

export default {
   props: {
        open: {
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
          name: '',
          surname: '',
          country: '',
          about: '',
          specialization: '',
          number: '',
          email: '',
          imageURL: null
      };
  },
  methods: {
    tryClose() {
      this.$emit('close');
    },
     onFileChange(e) {
        this.imageURL = URL.createObjectURL(e);
    },
    addBtn() {
      storeCandidates.dispatch('addOneCandidate', {
        id: 12,
        name: this.name,
        surname: this.surname,
        country: this.country,
        specialization: this.specialization,
        number: this.number,
        email: this.email,
        image: this.imageURL
      });
      this.name = '';
      this.surname = '';
      this.country = '';
      this.specialization = '';
      this.number = '';
      this.email = '';
      this.$emit('close');
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