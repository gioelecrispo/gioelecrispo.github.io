<template>
  <v-container fluid />
</template>

<script>
export default {
    name: "Contacts",
    components: {},
    props: {},
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
    },
    computed: {}
};
</script>
