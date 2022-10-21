import Vue from 'vue';
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

export default function (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (to.hash) {
                VueScrollTo.scrollTo(to.hash, 300, { easing: 'linear' });
            }
        }, 800)
    })
}
