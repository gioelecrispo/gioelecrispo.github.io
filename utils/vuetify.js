import colors from 'vuetify/es5/util/colors';

export default () => {
    return {
        treeShake: true,
        customVariables: ['~/assets/variables.scss'],
        font: {
            family: 'Lato'
        },
        theme: {
            dark: true,
            themes: {
                light: {
                    primary: "#2196F3",
                    secondary: "#e91e63",
                    accent: "#82B1FF",
                    error: "#FF5252",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#FFC107",
                    toolbars: "#FFFFFF"
                },
                dark: {
                    primary: "#2196F3",
                    secondary: "#e91e63",
                    accent: "#673ab7",
                    error: "#f44336",
                    warning: "#ff9800",
                    info: "#3f51b5",
                    success: "#4caf50",
                    toolbars: "#121212"
                }
            }
        }
    }
}
