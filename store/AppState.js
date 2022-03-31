export const state = () => ({
    // Initial state
    appToolbarTitle: '',
    appToolbarImage: undefined, // the app toolbar image (used for articles)
    leftNavDrawer: false, // Left Navigation Drawer is opened (true) or not (false)
    isDark: false, // if the dark theme has to be used
    themeColors: [ // theme colors
        '#2196F3',
        '#E91E63',
        '#FFB510',
        '#FF5252',
        '#343434',
        '#4CAF50'
    ],
    selectedThemeColor: undefined, // selected theme color
    navLinks: [ // Application navigation drawer elements
        { id: 'home', title: 'Home', icon: 'mdi-home', path: '/' },
        { id: 'resume', title: 'Resume', icon: 'mdi-timeline-text', path: '/resume' },
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
    getThemeColors: (state) => {
        return state.themeColors
    },
    getSelectedThemeColor: (state) => {
        if (state.selectedThemeColor === undefined) {
            return state.themeColors[0]
        }
        return state.selectedThemeColor
    }
}

export const actions = {
    resetState({ commit }) {
        commit('resetState')
    },
    setIsDark({ commit }, isDark) {
        commit('setIsDark', isDark)
    },
    setSelectedThemeColor({ commit }, selectedThemeColor) {
        commit('setSelectedThemeColor', selectedThemeColor)
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
    setProperty({ commit }, { property, value }) {
        commit('setProperty', { property, value })
    }
}

export const mutations = {
    setIsDark(state, isDark) {
        state.isDark = isDark
    },
    setSelectedThemeColor(state, selectedThemeColor) {
        state.selectedThemeColor = selectedThemeColor
    },
    setAppToolbarTitle(state, appToolbarTitle) {
        state.appToolbarTitle = appToolbarTitle
    },
    setAppToolbarImage(state, appToolbarImage) {
        state.appToolbarImage = appToolbarImage
    },
    setLeftNavDrawer(state, leftNavDrawer) {
        state.leftNavDrawer = leftNavDrawer
    },
    setProperty(state, { property, value }) {
        state[property] = value
    }
}

