<template>
    <section>
         <v-card class="mt-5 d-flex justify-center align-center" elevation="2" height="50">
            <div>FILTER GOES HERE</div>
        </v-card>
        <v-divider></v-divider>
        <v-container class='mt-15'>
            <v-row>
                <v-col offset-xl='' xl='2' v-for="candidate in candidates" :key="candidate.id">
                    <v-card elevation="3" flat class="text-center ma-3">
                        <v-responsive class='pt-4'>
                            <v-avatar size="100" class="grey lighten-2"><img :src="candidate.image"></v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="subtitle-1 black--text">{{ candidate.name }} {{ candidate.surname }}</div>
                            <div class="grey--text">{{ candidate.specialization }}</div>
                            <div class="grey--text">{{ candidate.country }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="grey">
                                <v-icon left>message</v-icon>
                                <span>Kontakt</span>
                            </v-btn>
                            <v-btn text color="grey">
                                <v-icon left>expand</v-icon>
                                <span>More</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>    
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>

export default {
    computed: {
        candidates() {
            return this.$store.getters.portfoliosGet;
        }
    }
}
</script>