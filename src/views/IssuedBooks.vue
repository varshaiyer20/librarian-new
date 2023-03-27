<template>
    <div>
        <v-list>
            <v-list-item v-for="item in issues" :key="item._id">
                <v-list-item-avatar tile>
                    <v-list-item-title>Return date:</v-list-item-title>
                    <!-- <v-list-item-title>{{ item.returnDate }}</v-list-item-title> -->
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Book Title: {{ item.book.title }}</v-list-item-title>
                    <v-list-item-title>Member name: {{ item.member.name }}</v-list-item-title>
                    <v-list-item-subtitle>Issue date: {{ item.issueDate }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-icon>
                    <div>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" text>
                                <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>Return</v-list-item-title>
                                    <v-icon>mdi-pencil></v-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Notify</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Approve</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>


                        <p>Status</p>

                    </div>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </div>
</template>


<script>
import issuesList from '@/data/issues.json'
export default {
    data() {
        return {
            issues: issuesList
        }
    },

}
</script>

<style lang="scss" scoped></style>