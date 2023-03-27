<template>
    <div>
        <v-list>
            <v-list-item v-for="item in members" :key="item._id">
                <v-list-item-avatar tile>
                    <v-img :src="item.img"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ item.firstName }} {{ item.middleName }} {{ item.lastName }}</v-list-item-title>
                    <v-list-item-subtitle>Username: </v-list-item-subtitle>
                    <v-list-item-subtitle>Member since: </v-list-item-subtitle>
                </v-list-item-content>

               
            </v-list-item>
        </v-list>
    </div>
</template>


<script>
import membersList from '@/data/members.json'
export default {
    data() {
        return {
            members: membersList
        }
    },

}
</script>

<style lang="scss" scoped></style>