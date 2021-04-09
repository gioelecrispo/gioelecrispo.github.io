
const getDefaultState = function() {
    return {
        // Initial state
        leftNavDrawer: false, // Left Navigation Drawer is opened (true) or not (false)
        isDark: false, // if the dark theme has to be used
        appToolbarImage: undefined, // the app toolbar image (used for articles)
        navLinks: [ // Application navigation drawer elements
            {id: "home", title: "Home", icon: "mdi-home", path: "/"},
            {id: "cv", title: "Curriculum Vitae", icon: "mdi-timeline-text", path: "/cv"},
            {id: "applications", title: "Applications", icon: "mdi-briefcase-outline", path: "/applications"},
            {id: "projects", title: "Projects", icon: "mdi-github-circle", path: "/projects"},
            {id: "articles", title: "Articles", icon: "mdi-file-document-outline", path: "/articles"},
        ]
    };
};

const state = getDefaultState();


const getters = {
    isLeftNavDrawer: (state) => {
        return state.leftNavDrawer;
    },
    isDark: (state) => {
        return state.isDark;
    },
    getAppToolbarImage: (state) => {
        return state.appToolbarImage;
    },
    getNavLinks: (state) => {
        return state.navLinks;
    },
};

const actions = {
    resetState ({ commit }) {
        commit("resetState");
    },
    setIsDark({commit}, isDark) {
        commit("setIsDark", isDark);
    },
    setAppToolbarImage({commit}, appToolbarImage) {
        commit("setAppToolbarImage", appToolbarImage);
    },
    setLeftNavDrawer({commit}, leftNavDrawer) {
        commit("setLeftNavDrawer", leftNavDrawer);
    },
};

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState());
    },
    setIsDark(state, isDark) {
        state.isDark = isDark;
        // console.log('AppState -> setIsDark: ' + state.isDark);
    },
    setAppToolbarImage(state, appToolbarImage) {
        state.appToolbarImage = appToolbarImage;
        // console.log('AppState -> setAppToolbarImage: ' + state.appToolbarImage);
    },
    setLeftNavDrawer(state, leftNavDrawer) {
        state.leftNavDrawer = leftNavDrawer;
        // console.log('AppState -> setLeftNavDrawer: ' + state.leftNavDrawer);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
