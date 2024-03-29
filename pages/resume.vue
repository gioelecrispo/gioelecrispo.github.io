<template>
    <v-container fluid>
        <v-container>
            <CVBtnDownload :isFab=true></CVBtnDownload>

            <v-row class='pt-2 pb-3 slide-in-bottom' justify='center' id='experiences'>
                <h1 class='title-underline my-6'>Experiences</h1>
            </v-row>
            <v-row class='slide-in-bottom'>
                    <v-timeline :dense='tabletAndDown()'>
                        <v-timeline-item
                            v-for='(experience, i) in experiences'
                            :key='i'
                            :color='experience.color'
                            :icon='experience.icon'
                            fill-dot
                        >
                            <template v-slot:opposite>
                <span
                    v-if='!tabletAndDown()'
                    :class='`body-1 font-weight-bold`'
                    v-text='experience.date'
                />
                            </template>
                            <Experience :experience='experience'
                                        :forceDate='false'></Experience>
                        </v-timeline-item>
                    </v-timeline>
            </v-row>

            <v-row class='pt-8 pb-3 slide-in-bottom'>
                <v-col cols='12' md='6' id="certifications">
                    <v-row justify='center'>
                        <h1 class='title-underline my-6'>Certifications</h1>
                    </v-row>
                    <v-row class='slide-in-bottom'>
                        <div v-for='certification in certifications'
                             :key='certification.id'
                             class='awards-container pb-2 mx-2'>
                            <Certification :certification='certification'></Certification>
                        </div>
                    </v-row>
                </v-col>
                <v-col cols='12' md='6' id="publications">
                    <v-row justify='center'>
                        <h1 class='title-underline my-6'>Publications</h1>
                    </v-row>
                    <v-row class='slide-in-bottom'>
                        <div v-for='publication in publications'
                             :key='publication.title'
                             class='awards-container pb-2 mx-2'>
                            <Publication :publication='publication'></Publication>
                        </div>
                    </v-row>
                </v-col>
            </v-row>

            <v-row class='pt-8 pb-3 slide-in-bottom' justify='center' id='skills'>
                <h1 class='title-underline my-6'>Skills</h1>
            </v-row>
            <div
                v-for='(skillSet, skillSetName) in skills'
                :key='skillSetName'
            >
                <v-row class='pt-6 pb-2 slide-in-bottom'>
                    <h3>{{ skillSetName }}</h3>
                </v-row>
                <Skill
                    v-for='skill in skillSet'
                    :key='skill.title'
                    :skill='skill'
                />
            </div>

            <v-row class='pt-8 pb-3 slide-in-bottom' justify='center'>
                <h1 class='title-underline my-6'>Languages</h1>
            </v-row>
            <v-row class='slide-in-bottom' justify='center'>
                <v-data-table
                    :headers='languages.tableHeaders'
                    :items='languagesData'
                    hide-default-footer
                    class='elevation-0'
                    style='width: 90%;'
                />
            </v-row>
            <v-row class='slide-in-bottom'>
                <p class='my-2'>
                    Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2:
                    Proficient user - (*) Common European Framework of Reference for Languages
                </p>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Skill from '../components/Skill'
import Experience from '../components/Experience'
import Certification from '../components/Certification'
import Publication from '../components/Publication'
import CVBtnDownload from '../components/CVBtnDownload'
import createSeoMeta from '../utils/seo'
import ui from '~/mixins/ui'
//import Vue from 'vue'
//import VueScrollTo from 'vue-scrollto'

export default {
    name: 'Works',
    layout: 'page',
    scrollToTop: true,
    head() {
        return createSeoMeta('Resume',
            'A complete Resume with experiences, certifications, skill and so on.',
            this.$route.path,
            `${process.env.HOST_BASE}/seo/resume.jpg`)
    },
    components: { CVBtnDownload, Experience, Skill, Certification, Publication },
    mixins: [ui],
    props: {},
    data() {
        return {
            cvFabShow: false,
            languages: {
                tableHeaders: [
                    {
                        text: 'Language',
                        align: 'center',
                        sortable: false,
                        value: 'language'
                    },
                    {
                        text: 'Listening',
                        align: 'center',
                        sortable: false,
                        value: 'listening'
                    },
                    {
                        text: 'Reading',
                        align: 'center',
                        sortable: false,
                        value: 'reading'
                    },
                    {
                        text: 'Spoken Interaction',
                        align: 'center',
                        sortable: false,
                        value: 'spokenInteraction'
                    },
                    {
                        text: 'Spoken Production',
                        align: 'center',
                        sortable: false,
                        value: 'spokenProduction'
                    },
                    {
                        text: 'Writing',
                        align: 'center',
                        sortable: false,
                        value: 'writing'
                    }
                ]
            }
        }
    },
    mounted() {
        /*if(this.$router.currentRoute['hash']) {
            Vue.use(VueScrollTo);
            VueScrollTo.scrollTo(this.$router.currentRoute['hash'], 500);
        }*/
    },
    created() {
        this.$store.dispatch('AppState/setAppToolbarTitle', 'Resume')
    },
    computed: {
        ...mapGetters('DataState', {
            certifications: 'getCertifications',
            publications: 'getPublications',
            skills: 'getSkills',
            experiences: 'getExperiences',
            languagesData: 'getLanguages'
        })
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
.awards-container {
    width: 100%;
}

.v-timeline-item__opposite {
    align-self: flex-start !important;
    margin-top: 10px !important;
}

</style>
