<template>
    <v-footer id='footer'
              color='toolbars'
              padless
              dark
              height='auto'
    >
        <svg
            class='footer-svg'
            viewBox='0 0 120 28'
        >
            <defs>
                <path
                    id='wave'
                    d='M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z'
                />
            </defs>
            <use
                id='wave3'
                class='wave'
                xlink:href='#wave'
                x='0'
                y='-2'
            />
            <use
                id='wave2'
                class='wave'
                xlink:href='#wave'
                x='0'
                y='0'
            />
            <use
                id='wave1'
                class='wave'
                xlink:href='#wave'
                x='0'
                y='1'
            />
        </svg>
        <v-card
            elevation='0'
            width='100%'
            tile
            class='text-center footer-content'
        >
            <v-container class='pa-2'>
                <v-row
                    align='center'
                    class='mx-2'
                >
                    <v-col>
                        <v-divider />
                    </v-col>
                    <v-col>
                        <span class='overline' style='font-size: 16px!important;'>Stay in touch</span>
                    </v-col>
                    <v-col>
                        <v-divider />
                    </v-col>
                </v-row>
            </v-container>

            <v-card-text class='py-2'>
                <v-row align='center' justify='center'>
                    <v-col
                        class='pa-2'
                        cols='12'
                        md='6'
                    >
                        <v-container class='pa-2'>
                            <v-row align='center' justify='center'
                                   class='mt-4'>
                                <h2>Social</h2>
                            </v-row>
                            <v-row align='center' justify='center'
                                   class='my-2 py-2'>
                                <v-btn v-for='socialMedia in socialMedias'
                                       :key='socialMedia.href'
                                       class='mx-2'
                                       :href='socialMedia.href'
                                       target='_blank'
                                       icon
                                >
                                    <v-icon size='24px'>
                                        {{ socialMedia.icon }}
                                    </v-icon>
                                </v-btn>
                            </v-row>
                            <v-row align='center' justify='center'
                                   class='mt-4 pt-8'>
                                <h2>Contacts</h2>
                            </v-row>
                            <v-row align='center' justify='center'
                                   class='my-2 py-2'>
                                <v-icon class='ml-3 mr-1'>
                                    mdi-at
                                </v-icon>
                                <span>crispogioele@gmail.com</span>
                                <v-icon class='ml-3 mr-1'>
                                    mdi-skype
                                </v-icon>
                                <span>gioele.crispo</span>
                            </v-row>
                        </v-container>
                    </v-col>
                    <v-col class='pa-2'
                           cols='11'
                           md='5'
                    >
                        <EmailForm></EmailForm>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-text class='pt-6 pb-4'>
                <blockquote class='subheader pa-0'>
                    You can not discover new oceans if you do not have the courage to
                    lose sight of the shore.
                </blockquote>
            </v-card-text>

            <v-divider />
            <v-card-text class='py-4'>
                <v-row>
                    <v-col class="py-1" cols='12' sm='6'>{{ new Date().getFullYear() }} — <span class='subtitle-1'>Gioele Crispo</span></v-col>
                    <v-col class="py-1" cols='12' sm='6'><TermsAndPolicy></TermsAndPolicy></v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import ui from '../mixins/ui'
import TermsAndPolicy from '@/components/TermsAndPolicy'
import EmailForm from '@/components/EmailForm'

export default {
    name: 'AppFooter',
    mixins: [ui],
    components: { TermsAndPolicy, EmailForm },
    data() {
        return {
            showInfoReference: false,
            socialMedias: [
                {
                    name: 'Facebook',
                    icon: 'mdi-facebook',
                    href: 'https://www.facebook.com/gioelecrispo'
                },
                {
                    name: 'LinkedIn',
                    icon: 'mdi-linkedin',
                    href: 'https://www.linkedin.com/in/gioele-crispo/'
                },
                {
                    name: 'Instagram',
                    icon: 'mdi-instagram',
                    href: 'https://www.instagram.com/gioelecrispo'
                },
                {
                    name: 'YouTube',
                    icon: 'mdi-youtube',
                    href: 'https://www.youtube.com/channel/UCX38YLmygw3cfwljiNlBBQw'
                }
            ]
        }
    },
    methods: {}
}

</script>

<style lang='scss' scoped>
.footer-content {
    margin: calc(-5%) 0 0 0;
    background-color: #2196F3 !important;
    padding: 0;
}

.footer-svg {
    width: 100%;
}

.wave {
    animation: wave 3s linear;
    animation-iteration-count: infinite;
    fill: #2196F3;
}

#wave2 {
    animation-duration: 5s;
    animation-direction: reverse;
    opacity: .6
}

#wave3 {
    animation-duration: 7s;
    opacity: .3;
}

@keyframes wave {
    to {
        transform: translateX(-100%);
    }
}
</style>

