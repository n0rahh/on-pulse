<template>
    <section>
        <popup-contact :info="clickedContact" @close="closeDialog">
            <v-text-field label="Imię Nazwisko" prepend-icon="person"></v-text-field>
            <v-text-field label="Numer telefonu" prepend-icon="phone"></v-text-field>
            <v-text-field label="E-Mail" prepend-icon="email"></v-text-field>
            <v-textarea label="Wiadomość" prepend-icon="edit"></v-textarea>
            <v-file-input
            label="Dodaj CV"
            filled
            prepend-icon="attach_file">
            </v-file-input>
            <template v-slot:button>
                <v-btn large outlined color="deep-purple lighten-2">Wyślij</v-btn>
            </template>
        </popup-contact>
        <v-container>
            <v-card class="mt-5 d-flex justify-center align-center" elevation="2" height="50">
                <h2>Zobacz wszystkie ogłoszenia</h2>
            </v-card>
            <v-divider></v-divider>
            <ad-item v-for="ad in adsList" :key="ad.id"
            :id="ad.id"
            :title="ad.title"
            :country="ad.country"
            :stawka="ad.stawka"
            :short="ad.shortDesc"
            :long="ad.longDesc"
            :image="ad.image"
            >
                <v-btn large dark color="deep-purple lighten-1" @click="openForm"><v-icon left>attach_email</v-icon>aplikuj</v-btn>
            </ad-item>
        </v-container>
    </section>
</template>

<script>
import AdItem from '../components/ads/AdItem.vue';
import PopupContact from '../components/ui/PopupContact.vue';
export default {
    components: {
        AdItem,
        PopupContact
    },
    // props: ['searchTerm'],
    // emits: ['search'],
    data() {
        return {
            countries: ['Szczecin', 'Gorzów Wielkopolski', 'Zielona Góra', 'Poznań', 'Gniezno', 'Gdynia', 'Gdańsk', 'Olsztyn', 'Bydgoszcz', 'Toruń', 'Płock', 'Białystok', 'Warszawa',
            'Łódź', 'Kazimierz Dolny', 'Lublin', 'Opole', 'Częstochowa', 'Kielce', 'Sandomierz', 'Zamość', 'Katowice', 'Kraków', 'Tarnów', 'Rzeszów', 'Przemyśl'],
            salary: [],
            clickedContact: false,
            countryItem: ''
        };
    },
    methods: {
        search(event) {
            this.$emit('search', event.target.value);
        },
        salaryList() {
            for(let i=12; i<=50; i++) {
                this.salary.push(i);
            }  
        },
        closeDialog() {
            this.clickedContact = false;
        },
        openForm() {
            this.clickedContact = true;
        },
    },
    computed: {
        adsList() {
            return this.$store.getters.adsGet;
        },
    },
    created() {
        this.salaryList();
    }
}
</script>

<style scoped>
.search-field >>> input {
    font-size: 20px;
}
.search-field >>> .v-input__slot > fieldset {
  border-radius: 8px;
}

.search-field{
    height: 60px;
    width: 300px;
}

</style>