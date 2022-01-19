<template>
    <v-container class="pa-5">
        <v-card shaped elevation="10">
            <v-row>
                <v-col offset-lg="3" align="center" cols="12" md="12" lg="6">
                    <h2 class="mt-15 display-3">Kilka słów o nas :)</h2>
                    <p class="mt-15 headline">
                        Jesteśmy platformą wielofunkcyjną, która służy głownie dla rekrutacji.
                        Oferujemy możliwość zamieszczania zarówno ogłoszeń rekrutacyjnych jak i portfolio kandydatów!
                        Naszym celem jest, aby każdy mógł znaleźć swoją wymarzoną prace.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod vitae tenetur alias tempora sed odio aliquid ea. Laudantium debitis veniam nesciunt minus voluptas dolor et fugiat modi animi neque.
                        Eum aut maiores neque obcaecati aliquam provident temporibus velit dolorem, minima perspiciatis dolor? Quidem veritatis quam temporibus? Natus quae iste asperiores amet totam nostrum, explicabo officiis, incidunt quis recusandae tempora?
                    </p>
                </v-col>
                <v-col align="center" cols="12" md="12" lg="12">
                    <v-btn large outlined class="ma-5" color="deep-purple darken-2">GET STARTED</v-btn>
                    <v-btn large dark class="ma-5" color="deep-purple darken-2">KONTAKT</v-btn>
                </v-col>
                <v-col cols="12" md="12" lg="12" class="about-bg"></v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<style scoped>
.about-bg {
    height: 530px;
    background: url('../assets/bg/about_bg.png') center no-repeat;
}
</style>