<template>
    <div>
        <v-form
            ref='form'
            v-model='valid'
        >
            <v-text-field
                v-model='name'
                :rules='nameRules'
                label='Name'
                outlined
                dense
                filled
                required
            ></v-text-field>

            <v-text-field
                v-model='fromAddress'
                :rules='emailRules'
                label='Your E-mail'
                outlined
                dense
                filled
                required
            ></v-text-field>

            <v-textarea
                v-model='message'
                :rules='messageRules'
                label='Your message for me'
                outlined
                dense
                filled
                required
            ></v-textarea>

            <v-btn
                :disabled='!valid'
                color='pink'
                class='mr-4'
                elevation='0'
                @click='sendEmail'
                rounded
            >
                Send Message
            </v-btn>
        </v-form>
        <v-dialog
            v-model='openEmailResultDialog'
            width='400'
        >
            <v-card class='pa-3'>
                <v-card-title class='justify-center py-3'>
                    <v-icon v-if="emailSendResult !== 'loading'"
                            :color='emailSendColor' size='100'>
                        {{ emailSendIcon }}
                    </v-icon>
                    <v-progress-circular v-else
                                         :width='10'
                                         :size='100'
                                         :color='emailSendColor'
                                         indeterminate
                    ></v-progress-circular>
                </v-card-title>
                <v-card-title class='justify-center py-2'>
                    <h2>{{ emailSendResultTitle }}</h2>
                </v-card-title>
                <v-card-text class='text-center pa-2'>
                    {{ emailSendResultBody }}
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios'
import { validationMixin } from 'vuelidate'
import { email, maxLength, required } from 'vuelidate/lib/validators'

export default {
    name: 'EmailForm',
    components: {},
    mixins: [validationMixin],
    props: [],
    validations: {
        name: { required, maxLength: maxLength(10) },
        email: { required, email },
        select: { required }
    },
    data() {
        return {
            valid: false,
            name: '',
            message: '',
            fromAddress: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 30) || 'Name must be less than 30 characters'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
            ],
            messageRules: [
                v => !!v || 'Message is required',
                v => (v && v.length <= 500) || 'Message must be less than 500 characters'
            ],
            openEmailResultDialog: false,
            emailSendResult: 'loading'
        }
    },
    computed: {
        emailSendColor() {
            if (this.emailSendResult === 'loading') {
                return 'blue'
            } else if (this.emailSendResult === 'success') {
                return 'success'
            } else {
                return 'error'
            }
        },
        emailSendIcon() {
            if (this.emailSendResult === 'loading') {
                return ''
            } else if (this.emailSendResult === 'success') {
                return 'mdi-check-circle-outline'
            } else {
                return 'mdi-close-circle-outline'
            }
        },
        emailSendResultTitle() {
            if (this.emailSendResult === 'loading') {
                return 'I\'m sending'
            } else if (this.emailSendResult === 'success') {
                return 'Thank you'
            } else {
                return 'Oh no!'
            }
        },
        emailSendResultBody() {
            if (this.emailSendResult === 'loading') {
                return 'Aligning the gears...'
            } else if (this.emailSendResult === 'success') {
                return 'Email sent correctly'
            } else {
                return 'An error has occurred. Try later, please'
            }
        }
    },
    methods: {
        sendEmail() {
            let messageData = {
                'from_address': this.fromAddress,
                'to_address': 'crispogioele@gmail.com',
                'subject': 'Email from: ' + this.name,
                'body': this.message
            }
            let _this = this
            _this.openEmailResultDialog = true
            _this.emailSendResult = 'loading'
            axios({
                url: 'https://93u9s5.deta.dev/send',
                method: 'post',
                data: messageData
            })
                .then(success => {
                    _this.emailSendResult = 'success';
                    _this.name = '';
                    _this.message = '';
                    _this.fromAddress = '';
                })
                .catch(error => {
                    console.error(error)
                    _this.emailSendResult = 'error';
                })
                .then(() => {
                    setTimeout(function() {
                        _this.openEmailResultDialog = false
                    }, 4000)
                })
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
