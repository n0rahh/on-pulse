<template>
    <v-container class="pa-5">
        <v-row align="center" class="login-card">
            <v-col offset-lg="4" cols="6" md="6" lg="4">
                <v-card class="white--text" shaped elevation="10">
                    <v-card-title class="deep-purple lighten-2" primary-title>{{ title }}</v-card-title>
                    <v-card-text>
                        <v-form v-if="isLogin" class="mt-10">
                            <v-text-field label="Login" v-model="login" prepend-icon="badge"></v-text-field>
                            <v-text-field label="Hasło" type="password" v-model="password" prepend-icon="password"></v-text-field>
                            <div class="d-flex justify-space-between">
                                <v-btn @click="loginBtn" dark large class="ma-7" color="deep-purple lighten-2">Login</v-btn>
                                <v-btn @click.prevent="changeForm" large outlined class="ma-7" color="deep-purple lighten-2">SignUp</v-btn>
                            </div>
                        </v-form>
                        <v-form v-if="!isLogin" class="mt-10">
                            <h2 class="display-1">Wypełnij formularz</h2>
                            <div class="mt-10">
                                <v-text-field label="Imię" v-model="login" type="text" prepend-icon="badge"></v-text-field>
                                <v-text-field label="Nazwisko" v-model="password" type="text" prepend-icon="badge"></v-text-field>
                                <v-text-field label="E-mail" v-model="password" type="email" prepend-icon="email"></v-text-field>
                                <v-text-field label="Telefon" v-model="password" type="text" prepend-icon="phone"></v-text-field>
                                <v-text-field label="Hasło" type="password" v-model="password" prepend-icon="password"></v-text-field>
                            </div>
                            <div class="d-flex justify-space-between">
                                <v-btn @click="signupBtn" large dark class="ma-7" color="deep-purple lighten-2">SignUp</v-btn>
                                <v-btn @click.prevent="changeForm" outlined large class="ma-7" color="deep-purple lighten-2">Login</v-btn>
                            </div>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            isLogin: true,
            title: 'Zaloguj się'
        };
    },
    methods: {
        changeForm() {
            this.isLogin = !this.isLogin;
            if(!this.isLogin) {
                this.title = 'Zarejestruj się';
            } else {
                 this.title = 'Zaloguj się';
            }
        },
        loginBtn() {

        },
        signupBtn() {

        }
    }
}
</script>

<style scoped>
.login-card {
    height: 100%;
}
</style>