export const state = () => ({
    // Initial state
    appToolbarTitle: '',
    appToolbarImage: undefined, // the app toolbar image (used for articles)
    leftNavDrawer: false, // Left Navigation Drawer is opened (true) or not (false)
    isDark: false, // if the dark theme has to be used
    navLinks: [ // Application navigation drawer elements
        { id: 'home', title: 'Home', icon: 'mdi-home', path: '/' },
        { id: 'cv', title: 'Curriculum Vitae', icon: 'mdi-timeline-text', path: '/cv' },
        { id: 'projects', title: 'Projects', icon: 'mdi-briefcase-outline', path: '/projects' },
        { id: 'github', title: 'Github', icon: 'mdi-github', path: '/github' },
        { id: 'blog', title: 'Blog', icon: 'mdi-file-document-outline', path: '/blog' }
    ]
})


export const getters = {
    isLeftNavDrawer: (state) => {
        return state.leftNavDrawer
    },
    isDark: (state) => {
        return state.isDark
    },
    getAppToolbarTitle: (state) => {
        return state.appToolbarTitle
    },
    getAppToolbarImage: (state) => {
        return state.appToolbarImage
    },
    getNavLinks: (state) => {
        return state.navLinks
    },
}

export const actions = {
    resetState({ commit }) {
        commit('resetState')
    },
    setIsDark({ commit }, isDark) {
        commit('setIsDark', isDark)
    },
    setAppToolbarTitle({ commit }, appToolbarTitle) {
        commit('setAppToolbarTitle', appToolbarTitle)
    },
    setAppToolbarImage({ commit }, appToolbarImage) {
        commit('setAppToolbarImage', appToolbarImage)
    },
    setLeftNavDrawer({ commit }, leftNavDrawer) {
        commit('setLeftNavDrawer', leftNavDrawer)
    },
    setProperty({commit}, { property, value }) {
        commit('setProperty', { property, value })
    }
}

export const mutations = {
    setIsDark(state, isDark) {
        state.isDark = isDark
        // console.log('AppState -> setIsDark: ' + state.isDark);
    },
    setAppToolbarTitle(state, appToolbarTitle) {
        state.appToolbarTitle = appToolbarTitle
    },
    setAppToolbarImage(state, appToolbarImage) {
        state.appToolbarImage = appToolbarImage
        // console.log('AppState -> setAppToolbarImage: ' + state.appToolbarImage);
    },
    setLeftNavDrawer(state, leftNavDrawer) {
        state.leftNavDrawer = leftNavDrawer
        // console.log('AppState -> setLeftNavDrawer: ' + state.leftNavDrawer);
    },
    setProperty (state, { property, value }) {
        state[property] = value;
    }
}

