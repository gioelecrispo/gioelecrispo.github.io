const axios = require("axios");

const getDefaultState = function() {
    return {
        // Initial state
        githubUserInfo: undefined,
        projects: undefined,
        skills: {
            "Programming Languages": [
                {
                    avatar: require("@/assets/img/skills/python.png"),
                    title: "<span><strong>Python</strong></span>",
                    subtitle: "<span class='text--primary'>Data Science</span> &mdash; with AI Frameworks, " +
                        "but also: aiohttp, Flask and others for making microservices",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/java.png"),
                    title: "<span><strong>Java</strong></span>",
                    subtitle: "<span class='text--primary'>Backend</span> &mdash; Spring, Spring Boot, Javadoc, " +
                        "Swagger codegen, microservices",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/js.png"),
                    title: "<span><strong>Javascript</strong></span>",
                    subtitle: "<span class='text--primary'>Backend and Frontend</span> &mdash; NodeJS, VueJS; " +
                        " use of NodeJS to create NodeVM sandboxed microservices in javascript",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/matlab.png"),
                    title: "<span><strong>Matlab</strong></span>",
                    subtitle: "<span class='text--primary'>Data Science</span> &mdash; Master's degree thesis " +
                        "strongly focused on Pattern Recognition and Image Analysis",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/c++.png"),
                    title: "<span><strong>C++</strong></span>",
                    subtitle: "<span class='text--primary'>Computer Vision</span> &mdash; OpenCV based " +
                        "bachelor's degree thesis",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/c.png"),
                    title: "<span><strong>C</strong></span>",
                    subtitle: "<span class='text--primary'>Generic use</span> &mdash; Some project focused on CV" +
                        " and IoT made on Raspberry Pi 3",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/sql.png"),
                    title: "<span><strong>SQL</strong></span>",
                    subtitle: "<span class='text--primary'>Databases</span> &mdash; used for many projects",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/html.png"),
                    title: "<span><strong>HTML</strong></span>",
                    subtitle: "<span class='text--primary'>Frontend</span> &mdash; used with VueJS",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/css.png"),
                    title: "<span><strong>CSS / SCSS</strong></span>",
                    subtitle: "<span class='text--primary'>Frontend</span> &mdash; used with VueJS",
                    value: 75,
                },
            ],
            "Data Science and AI Frameworks": [
                {
                    avatar: require("@/assets/img/skills/tensorflow.png"),
                    title: "<span><strong>Tensorflow, Keras</strong></span>",
                    subtitle: "<span class='text--primary'>NLP and Audio Projects</span>",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/pytorch.png"),
                    title: "<span><strong>PyTorch, FastAI</strong></span>",
                    subtitle: "<span class='text--primary'>NLP projects</span> &mdash; GPU optimized",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/neural.png"),
                    title: "<span><strong>BERT, Scikit-learn</strong></span>",
                    subtitle: "<span class='text--primary'>NLP projects</span>",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/elastic.png"),
                    title: "<span><strong>Elastic Stack</strong></span>",
                    subtitle: "<span class='text--primary'>Big Data</span> &mdash; Elasticsearch, Kibana, " +
                        "Logstash, MetricBeat, FileBeat",
                    value: 75,
                },
            ],
            "General Frameworks": [
                {
                    avatar: require("@/assets/img/skills/spring.png"),
                    title: "<span><strong>Spring 5.X, Spring Boot 2.X</strong></span>",
                    subtitle: "<span class='text--primary'>Enterprise Java</span> &mdash; MVC and Reactor, REST, " +
                        "Hibernate, String Security, Spring Data",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/nodejs.png"),
                    title: "<span><strong>NodeJS 10.X, VueJS 2.X</strong></span>",
                    subtitle: "<span class='text--primary'>Backend and Frontend</span>",
                    value: 75,
                },
            ],
            "Tools": [{
                avatar: require("@/assets/img/skills/database.png"),
                title: "<span><strong>MongoDB, MariaDB</strong></span>",
                subtitle: "<span class='text--primary'>Data storages</span> &mdash; for multi-clustered " +
                    "cloud architectures",
                value: 75,
            },
            {
                avatar: require("@/assets/img/skills/rabbitmq.png"),
                title: "<span><strong>RabbitMQ, Kafka</strong></span>",
                subtitle: "<span class='text--primary'>Message Brokers, Data stream</span> &mdash; " +
                        "used in high rate cloud architectures",
                value: 75,
            },
            {
                avatar: require("@/assets/img/skills/kubernetes.png"),
                title: "<span><strong>Docker, Kubernetes</strong></span>",
                subtitle: "<span class='text--primary'>Deployment</span> &mdash; Containers, PODS, " +
                        "microservices",
                value: 75,
            },
            ],
            "Project Management tools": [
                {
                    avatar: require("@/assets/img/skills/git.png"),
                    title: "<span><strong>Git, SVN</strong></span>",
                    subtitle: "<span class='text--primary'>Source version control</span>",
                    value: 75,
                },
                {
                    avatar: require("@/assets/img/skills/task.png"),
                    title: "<span><strong>Jira, Redmine</strong></span>",
                    subtitle: "<span class='text--primary'>Agile development</span> &mdash; with Issues / Bugs " +
                        "tracking",
                    value: 75,
                },
            ],
            "Communication capabilities": [],
            "Organisational / managerial skills": [],
            "Driving Licence": [
                {
                    avatar: require("@/assets/img/skills/car.png"),
                    title: "<span><strong>A1, B</strong></span>",
                    subtitle: "Driving licence for car and scooter with 125 cc max"
                },
            ],
        },
        articles: {
            "solid-rules": {
                title: "The SOLID rules for a good software architecture",
                subTitle: "aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa FROZEN YOGURT aaaaaaaaaaaaaaaaaa",
                content:  require("@/assets/articles/solid-rules.md"),
                img: require("@/assets/img/articles/solid.png"),
            },
            "wor-talk": {
                title: "A Writing Order Recovery strategy to handle handwriting specimens",
                subTitle: "aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa FROZEN YOGURT aaaaaaaaaaaaaaaaaa",
                content: require("@/assets/articles/wor-talk.md"),
                img: require("@/assets/img/articles/wor.png"),
            },
        },
    };
};

const state = getDefaultState();


const getters = {
    getGithubUserInfo: (state) => {
        if (!state.githubUserInfo) {
            axios({
                url: "https://api.github.com/users/gioelecrispo",
                method: "get"
            })
                .then(success => {
                    state.githubUserInfo = success.data;
                });
        }
        return state.githubUserInfo;
    },
    getProjects: (state) => {
        if (!state.projects) {
            axios({
                url: "https://api.github.com/users/gioelecrispo/repos",
                method: "get"
            })
                .then(success => {
                    state.projects = success.data;
                });
        }
        return state.projects;
    },
    getSkills: (state) => {
        return state.skills;
    },
    getArticles: (state) => {
        return state.articles;
    },
};

const actions = {
    resetState ({ commit }) {
        commit("resetState");
    },
    /*setGithubUserInfo({commit}, githubUserInfo) {
        commit("setGithubUserInfo", githubUserInfo);
    },
    setProjects({commit}, projects) {
        commit("setProjects", projects);
    },
    setArticles({commit}, articles) {
        commit("setArticles", articles);
    },*/
};

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState());
    },
    /*setGithubUserInfo(state, githubUserInfo) {
        state.githubUserInfo = githubUserInfo;
        // console.log('DataState -> setGithubUserInfo: ' + state.githubUserInfo);
    },
    setProjects(state, projects) {
        state.projects = projects;
        // console.log('DataState -> setProjects: ' + state.projects);
    },
    setArticles(state, articles) {
        state.articles = articles;
        // console.log('DataState -> setArticles: ' + state.articles);
    },*/
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
