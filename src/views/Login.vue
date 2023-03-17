<template>
    <div class="center">
        <v-row>
            <v-col cols="10" sm="6" md="4" offset-md="4" offset-sm="3" offset="1" style="background-color: pink">
                <h1>
                    <v-avatar size="95" tile>
                        <v-img src="@/assets/logo.png"></v-img>
                    </v-avatar>
                    <v-text-field label="Username" type="text" v-model="username"></v-text-field>
                    <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                    <v-btn @click="authenticate()">Login</v-btn>
                </h1>
            </v-col>
        </v-row>


    </div>
</template>

<script>
export default {
data() {
    return {
        username: "",
        password: ""
    }
},

methods: {

    authenticate(){
        alert("Login")
    }
}

    

}
</script>

<style lang="scss" scoped></style>