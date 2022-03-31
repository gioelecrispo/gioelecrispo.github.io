<template>
    <div v-if='isLoaded'>
        <slot></slot>
    </div>
    <PageLoader v-else></PageLoader>
</template>

<script>
import loader from '../../mixins/loader'
import PageLoader from './PageLoader'

export default {
    name: 'AbstractPage',
    mixins: [loader],
    components: { PageLoader },
    props: {
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>

</style>
