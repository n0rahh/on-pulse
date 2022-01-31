<template>
    <section>
        <popup-contact-ad :info="clickedContact" @close="closeDialog"></popup-contact-ad>
        <v-container>
            <v-card  class="pl-15 d-flex justify-start align-center" elevation="2" height="50">
                <h3 class="headline">Filter</h3>
                <v-form class="pl-15 d-flex justify-space-between align-center">
                    <v-text-field class="search-field" @input="search" :value="searchTerm" type="search" placeholder="Szukaj"></v-text-field>
                    <v-select
                    :items="countries"
                    label="Miasto"
                    style="width: 200px"
                    class="pl-5 mt-3"
                    ></v-select>
                    <v-select
                    :items="salary"
                    label="Stawka od"
                    style="width: 130px"
                    class="pl-5 mt-3"
                    ></v-select>
                </v-form>
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
import PopupContactAd from '../components/ui/PopupContactAd.vue';
export default {
    components: {
        AdItem,
        PopupContactAd
    },
    props: ['searchTerm'],
    emits: ['search'],
    data() {
        return {
            countries: ['Szczecin', 'Gorzów Wielkopolski', 'Zielona Góra', 'Poznań', 'Gniezno', 'Gdynia', 'Gdańsk', 'Olsztyn', 'Bydgoszcz', 'Toruń', 'Płock', 'Białystok', 'Warszawa',
            'Łódź', 'Kazimierz Dolny', 'Lublin', 'Opole', 'Częstochowa', 'Kielce', 'Sandomierz', 'Zamość', 'Katowice', 'Kraków', 'Tarnów', 'Rzeszów', 'Przemyśl'],
            salary: [],
            clickedContact: false
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
        }
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