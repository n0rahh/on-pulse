<template>
    <v-container class='mt-15'>
            <v-row>
                <v-col offset-xl='3' xl='6' v-for="game in games" :key="game.id">
                    <v-card elevation="3" flat class="text-center ma-3">
                        <v-card-title>
                            {{ game.title }}
                        </v-card-title>
                           <v-img
                            height="250"
                            :src="game.image"
                            class="ma-5"
                            ></v-img>
                        <v-card-text>
                            <v-card-subtitle>{{ game.author}} </v-card-subtitle>
                            <div class="">{{ game.desc }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block dark large color="purple">
                                <span>play</span>
                                <v-icon right>sports_esports</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>    
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
export default {
    computed: {
        games() {
            return this.$store.getters.gamesGet;
        }
    }
}
</script>