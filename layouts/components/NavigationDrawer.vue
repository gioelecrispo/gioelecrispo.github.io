<template>
    <v-navigation-drawer
        :value='isLeftNavDrawer'
        :right='right'
        width='100%'
        app
    >
        <v-container fluid>
            <v-row
                justify='end'
                class='mr-3'
            >
                <v-btn
                    icon
                    @click='closeLeftNavBar()'
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-row>
            <v-row>
                <v-col cols='12' sm='6'>
                    <v-container fluid fill-height>
                        <v-row justify='center' align='center' class='pt-6'>
                            <PersonalAvatar :size='144'></PersonalAvatar>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col cols='12' sm='6'>
                    <v-list
                        class='pt-6 mt-0'
                        dense
                        rounded
                    >
                        <v-list-item-group v-model='model'>
                            <v-list-item
                                v-for='element in appNavDrawElements'
                                :key='element.title'
                                class='text-center primary--text'
                                nuxt
                                :to='element.path'
                            >
                                <v-row>
                                    <v-col cols='12'>
                                        <v-row justify='center'>
                                            <v-icon class='mr-4 primary--text'>
                                                {{ element.icon }}
                                            </v-icon>
                                            {{ element.title }}
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import ui from '../../mixins/ui'
import PersonalAvatar from '@/components/PersonalAvatar'

export default {
    name: 'NavigationDrawer',
    components: { PersonalAvatar },
    mixins: [ui],
    props: ['right'],
    computed: {
        ...mapGetters('AppState', {
                isLeftNavDrawer: 'isLeftNavDrawer',
                appNavDrawElements: "getNavLinks",
            }
        )
    },
    data() {
        return {
            model: 1,
            disableResizeWatcher: true,
            darkTheme: false
        }
    },
    methods: {
        closeLeftNavBar() {
            this.$store.dispatch('AppState/setLeftNavDrawer', false)
        },
    }
}
</script>

<style lang='scss' scoped>
</style>

