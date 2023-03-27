<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/logo.png" transition="scale-transition"
                    width="40" />
                <p>{{ $const.APP_NAME }}</p>
            </div>

            <v-spacer></v-spacer>

            <v-btn text>
                Login
            </v-btn>
            <v-btn text>
                <v-icon>mdi-account-circle</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />

        </v-main>
        <bottom-navbar app></bottom-navbar>
    </v-app>
</template>
  
<script>
import BottomNavbar from './components/BottomNavBar.vue';
export default {
    components: { BottomNavbar },
    name: 'App',

    data: () => ({
        //
    }),
};
</script>
  
<style>
@import url('@/assets/styles.css');
</style>
  