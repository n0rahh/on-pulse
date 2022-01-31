<template>
    <section>
        <popup-change-info 
        :infoChange="clickedChange" 
        @close="closeDialog"
        @changeData="changeData"
        :name="profile.name"
        :surname="profile.surname"
        :country="profile.country"
        :aboutInfo="profile.aboutInfo"
        :email="profile.email"
        :number="profile.number"></popup-change-info>
        <v-container class="pa-10">
            <v-row class="profile-bg">
                <v-col offset-xl="2" xl="1">
                    <v-avatar
                    color="grey lighten-2"
                    size="100"
                    >
                        <img src="../assets/avatars/avatar-test.png" alt="#">
                    </v-avatar>
                </v-col>
                <v-col xl="4">
                    <div class="headline white--text">{{ profile.name }} {{ profile.surname }}</div>
                    <div class="overline white--text">{{ profile.country }}</div>
                    <p class="white--text">{{ profile.aboutInfo }}</p>
                    <div class="d-flex justify-end">
                        <v-btn dark color="deep-purple lighten-2" @click="openForm">Zmień<v-icon right>edit</v-icon></v-btn>
                    </div>
                </v-col>
                <v-col offset-xl="1" xl="3">
                    <div class="pa-3 display-1 white--text">Informacje kontaktowe:</div>
                    <div style="border: 2px solid white" class="pa-3 contact-info">
                        <div class="email title white--text">E-mail: {{ profile.email }}</div>
                        <div class="phone title white--text">Telefon: {{ profile.number }}</div>
                    </div>
                </v-col>
            </v-row>
            <h2 class="pa-10 display-2">Moje projekty</h2>
            <v-row>
                <v-col style="height: 200px" xl="2" v-for="project in projects" 
                    :key="project.id">
                    <v-card class="project-card">
                        <v-img
                        :src="project.image"
                        class="white--text  align-center"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                        >
                        <v-card-title style="display: block" class=" d-flex justify-center" v-text="project.title"></v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-container>
    </section>
</template>

<script>
import PopupChangeInfo from '../components/ui/PopupChangeInfo.vue';

export default {
    components: {
        PopupChangeInfo
    },
    data() {
        return {
            profile: {
                name: 'Peter',
                surname: 'Parker',
                country: 'Warszawa',
                aboutInfo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus, culpa voluptatibus explicabo modi eligendi enim animi voluptatum quae numquam, unde saepe, ratione non quidem ut odit ipsam cumque consequatur.' +
                'Labore dolorum eos corrupti. Sint deserunt fugiat pariatur esse dolores hic accusantium voluptate quisquam possimus sapiente! Consequuntur autem ducimus dicta tempora saepe aperiam neque vero iusto! Consequatur fuga nulla neque?',
                email: 'parker@marvel.pl',
                number: '+48700800900'
            },
            clickedChange: false
        };
    },
    computed: {
        projects() {
            return this.$store.getters.projectGet;
        }
    },
    methods: {
        closeDialog() {
            this.clickedChange = false;
        },
        openForm() {
            this.clickedChange = true;
        },
        changeData() {
            console.log('Data has been changed!');
            this.clickedChange = false;
        }
    },
}
</script>

<style scoped>
.project-card {
    transition: all 0.2s;
    cursor: pointer;
}
.project-card:hover {
    transform: scale(1.15);
}

.profile-bg {
    background: url('https://cdn.pixabay.com/photo/2015/09/01/09/33/school-916678_960_720.jpg') center/cover no-repeat;
}
</style>