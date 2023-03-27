<template>
    <div>
        <v-list>
            <v-list-item v-for="item in authors" :key="item._id">
                
                <v-list-item-content>
                    <v-list-item-title> {{ item.name }}</v-list-item-title>
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
                                    <v-list-item-title>Edit</v-list-item-title>
                                    <v-icon>mdi-pencil></v-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Delete</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>


                      

                    </div>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </div>
</template>


<script>
import authorsList from '@/data/authors.json'
export default {
    data() {
        return {
            authors: authorsList
        }
    },

}
</script>

<style lang="scss" scoped></style>