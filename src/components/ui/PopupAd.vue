<template>
  <Teleport to="body">
    <transition name="dialog">
      <v-dialog width='800' v-model="show">
        <v-card>
            <v-card-title class="headline deep-purple lighten-2 white--text" primary-title>Dodaj ogłoszenie</v-card-title>
            <v-card-text>
                <v-form class="pa-3">
                    <v-text-field v-model="adTitle" label="Tytuł" prepend-icon="title"></v-text-field>
                    <v-text-field v-model="adCountry" label="Miasto" prepend-icon="language"></v-text-field>
                    <v-text-field v-model="adSalary" label="Stawka brutto" prepend-icon="attach_money"></v-text-field>
                    <v-textarea v-model="adDesc" label="Opis" prepend-icon="edit"></v-textarea>
                    <v-text-field v-model="adNumber" label="Numer telefonu" prepend-icon="phone"></v-text-field>
                    <v-text-field v-model="adEmail" label="E-Mail" prepend-icon="email"></v-text-field>
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
        <v-overlay z-index='-1' opacity='0' v-if="show" @click="tryClose"></v-overlay>
      </v-dialog>
    </transition>
  </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport';
import storeAds from '../../store/modules/ads';

export default {
   props: {
        show: {
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
          adTitle: '',
          adCountry: '',
          adSalary: '',
          adDesc: '',
          adNumber: '',
          adEmail: '',
          imageURL: ''
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
      storeAds.dispatch('addItemToAdList', {
        id: '33',
        title: this.adTitle,
        country: this.adCountry,
        stawka: this.adSalary + ' zł/h brutto',
        longDesc: this.adDesc,
        image: this.imageURL
      });
      this.adTitle = '';
      this.adCountry = '';
      this.adSalary = '';
      this.adDesc = '';
      this.adNumber = '';
      this.adEmail = '';
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