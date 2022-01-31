<template>
    <section>
        <popup-contact :info="clickedContact" @close="closeDialog">
            <v-text-field label="Imię Nazwisko" prepend-icon="person"></v-text-field>
            <v-text-field label="Numer telefonu" prepend-icon="phone"></v-text-field>
            <v-text-field label="E-Mail" prepend-icon="email"></v-text-field>
            <v-textarea label="Wiadomość" prepend-icon="edit"></v-textarea>
            <template v-slot:button>
                <v-btn large outlined color="deep-purple lighten-2" @click="sendForm">Wyślij</v-btn>
            </template>
        </popup-contact>
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
                            <v-btn text color="grey" @click="openForm">
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
import PopupContact from '../components/ui/PopupContact.vue';
export default {
    components: {
        PopupContact
    },
    data() {
        return {
            clickedContact: false
        };
    },
    computed: {
        candidates() {
            return this.$store.getters.portfoliosGet;
        }
    },
    methods: {
        closeDialog() {
            this.clickedContact = false;
        },
        openForm() {
            this.clickedContact = true;
        }
    }
}
</script>