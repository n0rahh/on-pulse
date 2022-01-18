<template>
    <v-container class="pa-5">
        <v-row class="main-page">
            <v-col cols='12' md='12' sm='12' lg='12' xl="6" class="mt-15 home-bg">
            </v-col>
            <v-col cols='12' md='12' sm='12' xs='12' lg='12' xl='6' class="pa-2 mt-10">
                <h2 class="display-3 font-weight-bold">Where your pulse can be high!</h2>
                 <p class="mt-5 headline">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit numquam maiores obcaecati suscipit nemo quas consectetur porro, blanditiis, consequuntur inventore in delectus nulla! Ut vitae dolore excepturi in provident quisquam?
                     Hic, maxime iste nisi enim dolorem quaerat tempora officia et, eaque debitis voluptatum officiis earum expedita? Illo obcaecati, nihil voluptas nam et in, quis laudantium dolores, repellendus expedita esse veniam?
                     Aliquid, repudiandae sapiente suscipit quis ab nostrum neque temporibus enim odio magnam! Magnam esse dolorem, libero quis non rerum soluta explicabo nesciunt qui enim possimus totam at nihil perferendis quos!
                 </p>
            </v-col>
        </v-row>

        <v-row class="second-page">
            <v-col cols='12' md='12' sm='12' xs='12' lg='12' xl='6' class="mt-15 ">
                <p class="mt-15 headline">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum veritatis itaque enim dicta voluptate magni libero adipisci! Tempore molestias, et tempora autem temporibus nulla alias possimus, dignissimos illum quidem explicabo.
                 </p>
                 <div align="right" class="mt-15 button">
                    <v-btn outlined color="deep-purple darken-2">GET STARTED</v-btn>
                 </div>
                 
            </v-col>
            <v-col cols='12' md='12' sm='12' lg='12' xl="6" class="second-bg">
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.home-bg {
    height: 460px;
    position: relative;
    background: url('../assets/bg/main_bg.jpg') center no-repeat;
}
.second-bg {
    height: 460px;
    position: relative;
    background: url('../assets/bg/second_bg.jpg') center no-repeat;
}

.main-page {
    display: flex;
    height: 100vh;
    margin-top: -100px;
    align-items: center;
}
.second-page {
    display: flex;
    height: 100vh;
}

@media screen and (max-width: 750px) {
.home-bg {
   display: none;
  }
}
</style>