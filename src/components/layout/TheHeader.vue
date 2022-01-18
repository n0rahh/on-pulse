<template>
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
            <v-btn v-if="advert" text color="white">
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
            <v-btn v-if="!logedIn" text color="white">
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
                    <div class="subtitle-1 white--text justify-center mt-5">USER NAME</div>
                </v-col>
            </v-container>
            <!-- <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="blue--text text--darken-4">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="blue--text text--darken-4">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list> -->
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            logedIn: true,
            drawer: false,
            portfolio: true,
            advert: true,
            options: [
                { icon: 'person', text: 'Konto', route: '/home' },
                { icon: 'folder', text: 'Dodaj portfolio', route: '/games' },
                { icon: 'exit_to_app', text: 'Log Out', route: '/ads'}
            ]
        };
    }
}
</script>

<style scoped>
.logo {
    width: 50px;
    height: 20px;
}
</style>