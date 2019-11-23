// APP
import AppStructure from "@/pages/Layout/AppStructure";
// Me
import Me from "@/pages/Me/Me";
import Home from "@/pages/Me/Home";
import AboutMe from "@/pages/Me/AboutMe";
import Works from "@/pages/Me/Works";
import Hobbies from "@/pages/Me/Hobbies";
import Goals from "@/pages/Me/Goals";
import Contacts from "@/pages/Me/Contacts";
import Projects from "@/pages/Me/Projects";

const routes = [
    {
        path: "/",
        name: "AppStructure",
        component: AppStructure,
        redirect: "me",
        children: [
            {
                path: "me",
                name: "Me",
                component: Me,
                redirect: "me/home",
                children: [
                    {
                        path: "home",
                        name: "Home",
                        component: Home,
                        meta: {
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppFooter: true
                        }
                    },
                    {
                        path: "cv",
                        name: "Works",
                        component: Works,
                        meta: {
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppFooter: true
                        }
                    },
                    {
                        path: "hobbies",
                        name: "Hobbies",
                        component: Hobbies,
                        meta: {
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppFooter: true
                        }
                    },
                    {
                        path: "projects",
                        name: "Projects",
                        component: Projects,
                        meta: {
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppFooter: true
                        }
                    },
                    {
                        path: "goals",
                        name: "Goals",
                        component: Goals,
                        meta: {
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppFooter: true
                        }
                    },
                    {
                        path: "aboutme",
                        name: "AboutMe",
                        component: AboutMe,
                        meta: {
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppFooter: true
                        }
                    },
                    {
                        path: "contacts",
                        name: "Contacts",
                        component: Contacts,
                        meta: {
                            showNavigationDrawer: true,
                            showContentToolbar: false,
                            showContentHeader: false,
                            showContentFooter: false,
                            showAppToolbar: true,
                            showAppFooter: true
                        }
                    }
                ]
            }
        ]
    }
];

export default routes;
