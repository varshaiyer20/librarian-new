<template>
    <div class="app-header">
        <v-col>
            <v-row>
            <v-col cols="10"><h3>{{ title }}</h3></v-col>
            <div class="text-right">
                <v-col cols="2"><v-btn><v-icon>mdi-plus</v-icon></v-btn></v-col>
            </div>
        </v-row>
        <v-text-field
            label="Search"
            append-outer-icon="mdi-search-web"
          ></v-text-field>
        </v-col>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
        },
    }
</script>

<style lang="scss" scoped>
.app-header {
    padding: 2rem
}
</style>