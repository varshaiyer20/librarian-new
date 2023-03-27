<template>
    <div>
        <v-list>
            <v-list-item v-for="item in employees" :key="item._id">
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
import employeesList from '@/data/employees.json'
export default {
    data() {
        return {
            employees: employeesList
        }
    },

}
</script>

<style lang="scss" scoped></style>