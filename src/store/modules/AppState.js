
const getDefaultState = function() {
    return {
        // Initial state
        leftNavDrawer: false, // Left Navigation Drawer is opened (true) or not (false)
        isDark: false, // if the dark theme has to be used
        navLinks: [ // Application navigation drawer elements
            {id: "home", title: "Home", icon: "mdi-home", path: "/me/home"},
            {id: "cv", title: "Curriculum Vitae", icon: "mdi-timeline-text", path: "/me/cv"},
            {id: "projects", title: "Projects", icon: "mdi-github-circle", path: "/me/projects"},
            {id: "articles", title: "Articles", icon: "mdi-file-document-outline", path: "/me/articles"},
            // {id: "me", title: "About me", icon: "mdi-account", path: "/me/aboutme"},
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
    setLeftNavDrawer({commit}, leftNavDrawer) {
        commit("setLefNavDrawer", leftNavDrawer);
    },
};

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState());
    },
    setLeftNavDrawer(state, leftNavDrawer) {
        state.leftNavDrawer = leftNavDrawer;
        // console.log('AppState -> setLeftTempNavDrawer: ' + state.leftNavDrawer);
    },
    setIsDark(state, isDark) {
        state.isDark = isDark;
        // console.log('AppState -> setIsDark: ' + state.isDark);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
