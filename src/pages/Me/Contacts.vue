<template>
    <v-container fluid>

        <v-card class="elevation-0 transparent mx-auto"
                max-width="600">

            <v-list two-line subheader>
                <v-subheader>Contacts</v-subheader>
                <template v-for="(contact, index) in contacts"
                          @click="">
                    <v-divider
                            v-if="contact.divider"
                            :inset="contact.inset"
                            :key="index"
                    ></v-divider>
                    <v-list-item
                            v-else
                            :key="contact.title"
                            @click=""
                    >
                        <v-list-item-avatar tile>
                            <v-img :src="contact.avatar"></v-img>
                        </v-list-item-avatar>
                       <!-- <v-list-item-avatar>
                            <v-icon
                                    :class="[contact.iconClass]"
                                    v-text="contact.icon"
                            ></v-icon>
                        </v-list-item-avatar>-->

                        <v-list-item-content>
                            <v-list-item-title v-text="contact.title"></v-list-item-title>
                            <v-list-item-subtitle v-text="contact.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon>
                                <v-icon color="grey lighten-1">mdi-information</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </template>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Contacts",
        components: {},
        props: {},
        computed: {},
        data() {
            return {
                contacts: [
                    {
                        avatar: require("@/assets/img/contacts/email.png"),
                        badge: "mdi-book",
                        title: "E-mail",
                        subtitle: "crispogioele@gmail.com"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/contacts/facebook.png"),
                        badge: "mdi-book",
                        title: "Facebook",
                        subtitle: "Gioele Crispo"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/contacts/linkedin.png"),
                        badge: "mdi-book",
                        title: "LinkedIn",
                        subtitle: "https://www.linkedin.com/in/gioele-crispo/"
                    },
                    {divider: true, inset: true},
                    {
                        avatar: require("@/assets/img/contacts/skype.png"),
                        badge: "mdi-book",
                        title: "Skype",
                        subtitle: "gioele.crispo"
                    },
                ],
                email: ["joe.crisp7@gmail.com", "crispogioele@gmail.com"],
                cellNumber: "+39 3929646139",
                location: "Salerno, 84100, Italy",
            };
        }
    };
</script>
