<template>
    <section>
        <v-card elevation="4" outlined class="pa-5 mt-7">
            <v-row>
                <v-col lg='2'>
                    <img :src="image" alt="photo">
                </v-col>
                <v-col lg='8'>
                    <div class="ads-content">
                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class='display-1'>{{ title }}</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle>Miasto: {{ country }}, Stawka: {{ stawka }}</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                        <v-list-item-content>
                            <p>{{ long }}</p>
                        </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-col>
                <v-col lg='2' class="d-flex justify-end align-end">
                    <slot></slot>
                </v-col>
            </v-row>
        </v-card> 
    </section>
</template>

<script>
export default {
    props: ['id', 'title', 'country', 'stawka', 'short', 'long', 'image'],
    data() {
        return {
            
        };
    },
    methods: {
       
    }
}
</script>

<style scoped>
img {
    height: 100%;
    width: 100%;
}
</style>