<template>
    <v-container class="pa-5">
        <v-row align="center" class="login-card">
            <v-col offset-lg="4" cols="6" md="6" lg="4">
                <v-card class="white--text" shaped elevation="10">
                    <v-card-title class="deep-purple lighten-2" primary-title>{{ title }}</v-card-title>
                    <v-card-text>
                        <v-form v-if="isLogin" class="mt-10" ref="form">
                            <v-text-field label="Login" prepend-icon="badge" v-model="loginInput" :rules="loginRule"></v-text-field>
                            <v-text-field label="Hasło" type="password" prepend-icon="password"  v-model="passwordInput" :rules="passwordRule"></v-text-field>
                            <div class="d-flex justify-space-between">
                                <v-btn @click="loginBtn" dark large class="ma-7" color="deep-purple lighten-2">Login</v-btn>
                                <v-btn @click.prevent="changeForm" large outlined class="ma-7" color="deep-purple lighten-2">SignUp</v-btn>
                            </div>
                        </v-form>
                        <v-form v-if="!isLogin" class="mt-10" ref="form">
                            <h2 class="display-1">Wypełnij formularz</h2>
                            <div class="mt-10">
                                <v-text-field label="Imię" type="text" v-model="nameInput" prepend-icon="badge" :rules="nameRule"></v-text-field>
                                <v-text-field label="Nazwisko" type="text" v-model="surnameInput" prepend-icon="badge" :rules="nameRule"></v-text-field>
                                <v-text-field label="Telefon" type="text" v-model="phoneInput" prepend-icon="phone" :rules="phoneRule"></v-text-field>
                                <v-text-field label="E-mail" type="email" v-model="emailInput" prepend-icon="email" :rules="loginRule"></v-text-field>
                                <v-text-field label="Hasło" type="password" v-model="passwordInput" prepend-icon="password" :rules="passwordRule"></v-text-field>
                                <v-textarea outlined label="Informacje o Tobie (opcjonalnie)" type="text" v-model="userInfo" prepend-icon="info"></v-textarea>
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
            title: 'Zaloguj się',
            loginInput: '',
            passwordInput: '',
            nameInput: '',
            surnameInput: '',
            emailInput: '',
            phoneInput: '',
            userInfo: '',
            loginRule: [
                login => login.length >= 5 || 'Minimum length is 5 characters'
            ],
            // passwordRule: [
            //     password => password.length >= 6 || 'Minimum length is 6 characters'
            // ],
            nameRule: [
                name => name.length >= 2 || "Minimum length is 2 characters"
            ],
            passwordRule: [
                password => password.length >= 1 || 'Enter min. 6 chars and must include numbers and special chars (!@#$%^&*())'
                // && this.passwordInput.value.includes(/[!@#$%^&*()01234567890]/gi)
            ],
            phoneRule: [
                phone => phone.length >= 6 || 'Enter phone number'
            ]
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
            if(this.$refs.form.validate()) {
                console.log(this.title + ' ' + this.isLogin);
            }
        },
        signupBtn() {
            if(this.$refs.form.validate()) {
                console.log(this.title + ' ' + this.isLogin);
            }
        }
    }
}
</script>

<style scoped>
.login-card {
    height: 100%;
}
</style>