<template>
    <section>  
        <popup-ad :show="clickedAd" @close="closeDialog"></popup-ad>
        <popup-portfolio :open="clickedPortfolio" @close="closeDialog"></popup-portfolio>
        <nav>
            <v-app-bar 
                app
                flat
                dark
                color="deep-purple lighten-2"
                >
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase">
                    <span class="font-weight-light">On</span>
                    <span class="font-weight-bold">Pulse</span>
                </v-toolbar-title>
                <template v-slot:extension>
                    <v-tabs grow>
                        <v-tab to="/home">Strona Główna</v-tab>
                        <v-tab to="/ads">Ogłoszenia</v-tab>
                        <v-tab to="/candidates">Kandydaci</v-tab>
                        <v-tab to="/games">Take a break!</v-tab>
                        <v-tab to="/about">O nas</v-tab>
                    </v-tabs>
                </template>
                <v-spacer></v-spacer>
                <v-btn @click="addNewAd" v-if="advert" text color="white">
                    <v-icon left>folder</v-icon>
                    <span>Dodaj ogłoszenie</span>
                </v-btn>
                <v-menu v-if="logedIn" offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text v-on="on" color="white">
                            <v-icon left>expand_more</v-icon>
                            <v-avatar class="grey lighten-2" size="30">
                                <img src="../../assets/avatars/avatar-test.png" />
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="option in options" :key="option.text" router :to="option.route">
                            <v-list-item-title><v-icon left>{{ option.icon }}</v-icon>{{ option.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn to="/login" v-else text color="white">
                    <span>Sign In</span>
                    <v-icon right>exit_to_app</v-icon>
                </v-btn>
            </v-app-bar>

            <v-navigation-drawer app v-model="drawer" class="deep-purple lighten-2">
                <v-container>
                    <v-col align="center" class="mt-5">
                        <v-avatar class="grey lighten-2" size="100">
                            <img src="../../assets/avatars/avatar-test.png" />
                        </v-avatar>
                        <div v-if="logedIn" class="subtitle-1 white--text justify-center mt-5">USER NAME</div>
                         <v-btn v-else to="/login" text color="white">
                            <span>Sign In</span>
                            <v-icon right>exit_to_app</v-icon>
                        </v-btn>
                    </v-col>
                </v-container>
                <v-list v-if="logedIn">
                    <v-list-item v-for="item in navigationList" :key="item.text" @click="item.click" router :to="item.route">
                        <v-list-item-action>
                            <v-icon class=" white--text">{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class=" white--text">{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </nav>
    </section>
</template>

<script>
import PopupAd from '../ui/PopupAd.vue';
import PopupPortfolio from '../ui/PopupPortfolio.vue';

export default {
    components: {
        PopupAd,
        PopupPortfolio
    },
    data() {
        return {
            logedIn: true,
            drawer: false,
            portfolio: true,
            advert: true,
            options: [
                { icon: 'exit_to_app', text: 'Log Out', route: '/ads'}
            ],
            navigationList: [
                { icon: 'person', text: 'Konto', route: '/home' },
                { icon: 'account_box', text: 'Dodaj portfolio', click: this.addPortfolio },
                { icon: 'folder', text: 'Dodaj ogłoszenie', click: this.addNewAd},
                { icon: 'exit_to_app', text: 'Log Out', route: '/ads'},
            ],
            clickedAd: false,
            clickedPortfolio: false
        };
    },
    methods: {
        addNewAd() {
            this.clickedAd = true;
        },
        addPortfolio() {
            this.clickedPortfolio = true;
        },
        closeDialog() {
            this.clickedAd = false;
            this.clickedPortfolio = false;
        },
    }
}
</script>

<style scoped>
.logo {
    width: 50px;
    height: 20px;
}
</style>