<template>
    <v-form
        ref="form"
        v-model="valid"
    >
        <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            outlined
            dense
            filled
            required
        ></v-text-field>

        <v-text-field
            v-model="fromAddress"
            :rules="emailRules"
            label="Your E-mail"
            outlined
            dense
            filled
            required
        ></v-text-field>

        <v-textarea
            v-model="message"
            :rules="messageRules"
            label="Your message for me"
            outlined
            dense
            filled
            required
        ></v-textarea>

        <v-btn
            :disabled="!valid"
            color="pink"
            class="mr-4"
            elevation="0"
            @click="sendEmail"
            rounded
        >
            Send Message
        </v-btn>
    </v-form>
</template>

<script>
import {validationMixin} from "vuelidate";
import {email, maxLength, required} from "vuelidate/lib/validators";

export default {
    name: "EmailForm",
    components: {},
    mixins: [validationMixin],
    props: [],
    validations: {
        name: {required, maxLength: maxLength(10)},
        email: {required, email},
        select: {required}
    },
    data() {
        return {
            valid: false,
            name: "",
            message: "",
            fromAddress: "",
            nameRules: [
                v => !!v || "Name is required",
                v => (v && v.length <= 30) || "Name must be less than 30 characters",
            ],
            emailRules: [
                v => !!v || "E-mail is required",
                v => /.+@.+\..+/.test(v) || "E-mail must be valid",
            ],
            messageRules: [
                v => !!v || "Message is required",
                v => (v && v.length <= 500) || "Message must be less than 500 characters",
            ],
        };
    },
    methods: {
        sendEmail() {
            let messageData = {
                "from_address": this.fromAddress,
                "to_address": "crispogioele@gmail.com",
                "subject": "Email from: " + this.name,
                "body": this.message
            };
            axios({
                url: "https://email-sender-protected.herokuapp.com/send",
                method: "post",
                data: messageData
            })
                .then(success => {
                    console.log(success);

                })
                .catch(error => console.error(error));
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
