<template>
    <v-container>
        <v-card  class="d-flex justify-center align-center" elevation="5" height="50">
            <div>FILTER GOES HERE</div>
        </v-card>
        <v-divider></v-divider>
        <v-list>
            <ad-item v-for="ad in adsList" :key="ad.id"
            :id="ad.id"
            :title="ad.title"
            :country="ad.country"
            :stawka="ad.stawka"
            :short="ad.shortDesc"
            :long="ad.longDesc"
            :image="ad.image"
            >
            </ad-item>
        </v-list>
</v-container>
</template>

<script>
import AdItem from '../components/ads/AdItem.vue';
export default {
    components: {
        AdItem
    },
    computed: {
        adsList() {
            return this.$store.getters.adsGet;
        }
    }
}
</script>