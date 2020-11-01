const axios = require("axios");

const getDefaultState = function () {
    return {
        // Initial state
        githubUserInfo: undefined,
        projects: undefined,
        certifications: [
            {
                id: "MLS-C01",
                title: "AWS Machine Learning Specialty",
                date: "10/12/2020",
                color: "orange darken-2"
            },
        ],
        publications: [
            {
                title: "Tracking the Ballistic Trajectory in Complex and Long Handwritten Signatures",
                authors: "Gioele Crispo · Moises Diaz · Angelo Marcelli · Miguel A. Ferrer",
                href: "https://www.researchgate.net/publication/327405064_Tracking_the_Ballistic_Trajectory_in_Complex_and_Long_Handwritten_Signatures",
                date: " August 2018",
                location: "Conference: 16th International Conference on Frontiers in Handwriting Recognition (ICFHR) At: Niagara Falls, USA",
            },
        ],
        experiences: [
            {
                color: "blue darken-2",
                icon: "mdi-briefcase",
                date: "May 2018 - now",
                location: "Naples (Italy)",
                position: "AI Software Engineer",
                company: "NTT Data Italia",
                text: "Software engineer focused on issues of Artificial Intelligence and Natural Language " +
                    "Processing. Main duties:  design of software architectures in AI projects; design and" +
                    " implementation of the AI and NLP functionalities with an eye on the efficiency and " +
                    "reusability of the models;  team coordination in various projects."
            },
            {
                color: "orange darken-1",
                icon: "mdi-briefcase-search",
                date: "Nov 2017 - Feb 2018",
                location: "Las Palmas de Gran Canaria (Spain)",
                position: "Research Internship",
                company: "Universidad del'Atlantico Medio",
                text: "The work was focused on pattern recognition and pattern prediction on signatures. The " +
                    "result was a conference paper, Tracking the Ballistic Trajectory in Complex and Long " +
                    "Handwritten Signatures, was written and published at the 16th International Conference " +
                    "on Frontiers in Handwriting Recognition."
            },
            {
                color: "orange darken-1",
                icon: "mdi-briefcase-search",
                location: "Fisciano, Salerno (Italy)",
                position: "Company Internship",
                company: "A.I Tech",
                date: "Nov 2014 - Jun 2015",
                text: "The work was focused on the design and implementation of a gesture recognition system " +
                    "on a Kinect sensor. I proposed a new feature extraction method for gestures."
            },
            {
                color: "red darken-2",
                icon: "mdi-school",
                date: "Oct 2015 - Feb 2018",
                location: "Fisciano, Salerno (Italy)",
                position: "Master's Degree - Computer Engineering",
                company: "Università degli Studi di Salerno",
                text: "Skills acquired: Semantic technologies, Data Mining and Machine Learning, Network " +
                    "Security, Robotics, Artificial Intelligence and Artificial Vision, Sistributed " +
                    "programming.",
                vote: "110/110 cum laude"
            },
            {
                color: "red darken-2",
                icon: "mdi-school",
                date: "Oct 2011 - Jun 2015",
                location: "Fisciano, Salerno (Italy)",
                position: "Bachelor's Degree - Computer Engineering",
                company: "Università degli Studi di Salerno",
                text: "Skills acquired: Object Oriented Programming; Automatic Controls; Internet and Network" +
                    " stacks; Mathematics, Statistics,Telecommunications and Physics fundamentals.",
                vote: "103/110"
            },
        ],
        skills: {
            "Programming Languages": [
                {
                    avatar: require("@/assets/img/skills/python.png"),
                    title: "<span><strong>Python</strong></span>",
                    subtitle: "<span class='text--primary'>Data Science</span> &mdash; with AI Frameworks, numpy, pandas, " +
                        "g-unicorn, aiohttp, Flask and others for making microservices",
                    value: 95,
                },
                {
                    avatar: require("@/assets/img/skills/js.png"),
                    title: "<span><strong>Javascript</strong></span>",
                    subtitle: "<span class='text--primary'>Backend and Frontend</span> &mdash; NodeJS, VueJS; " +
                        " use of NodeJS to create NodeVM sandboxed microservices in javascript",
                    value: 90,
                },
                {
                    avatar: require("@/assets/img/skills/java.png"),
                    title: "<span><strong>Java</strong></span>",
                    subtitle: "<span class='text--primary'>Backend</span> &mdash; Spring, Spring Boot, Javadoc, " +
                        "Stream, Eureka, Swagger codegen, microservices",
                    value: 85,
                },
                {
                    avatar: require("@/assets/img/skills/matlab.png"),
                    title: "<span><strong>Matlab</strong></span>",
                    subtitle: "<span class='text--primary'>Data Science</span> &mdash; Master's degree thesis " +
                        "strongly focused on Pattern Recognition and Image Analysis",
                    value: 85,
                },
                {
                    avatar: require("@/assets/img/skills/c++.png"),
                    title: "<span><strong>C++</strong></span>",
                    subtitle: "<span class='text--primary'>Computer Vision</span> &mdash; OpenCV based " +
                        "bachelor's degree thesis",
                    value: 39,
                },
                {
                    avatar: require("@/assets/img/skills/c.png"),
                    title: "<span><strong>C</strong></span>",
                    subtitle: "<span class='text--primary'>Generic use</span> &mdash; Some project focused on CV" +
                        " and IoT made on Raspberry Pi 3",
                    value: 65,
                },
                {
                    avatar: require("@/assets/img/skills/sql.png"),
                    title: "<span><strong>SQL</strong></span>",
                    subtitle: "<span class='text--primary'>Databases</span> &mdash; used for many projects",
                    value: 90,
                },
                {
                    avatar: require("@/assets/img/skills/html.png"),
                    title: "<span><strong>HTML, CSS</strong></span>",
                    subtitle: "<span class='text--primary'>Frontend</span> &mdash; used with VueJS",
                    value: 80,
                },
            ],
            "Data Science and AI Frameworks": [
                {
                    avatar: require("@/assets/img/skills/tensorflow.png"),
                    title: "<span><strong>Tensorflow, Keras</strong></span>",
                    subtitle: "<span class='text--primary'>NLP and Audio Projects</span>",
                    value: 70,
                },
                {
                    avatar: require("@/assets/img/skills/pytorch.png"),
                    title: "<span><strong>PyTorch, FastAI</strong></span>",
                    subtitle: "<span class='text--primary'>NLP projects</span> &mdash; GPU optimized",
                    value: 70,
                },
                {
                    avatar: require("@/assets/img/skills/neural.png"),
                    title: "<span><strong>BERT, Scikit-learn</strong></span>",
                    subtitle: "<span class='text--primary'>NLP projects</span>",
                    value: 90,
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
                    value: 85,
                },
            ],
            "Tools": [
                {
                    avatar: require("@/assets/img/skills/aws.png"),
                    title: "<span><strong>AWS Services</strong></span>",
                    subtitle: "<span class='text--primary'>Lambda, S3, DynamoDB, EC2, Kinesis, SageMaker </span> &mdash; " +
                        "and other stuff of AI projects.",
                    value: 70,
                }, {
                    avatar: require("@/assets/img/skills/database.png"),
                    title: "<span><strong>MongoDB, MariaDB</strong></span>",
                    subtitle: "<span class='text--primary'>Data storages</span> &mdash; for multi-clustered " +
                        "cloud architectures",
                    value: 80,
                },
                {
                    avatar: require("@/assets/img/skills/rabbitmq.png"),
                    title: "<span><strong>RabbitMQ, ZMQ, Kafka</strong></span>",
                    subtitle: "<span class='text--primary'>Message Brokers, Data stream</span> &mdash; " +
                        "used in high rate cloud architectures",
                    value: 70,
                },
                {
                    avatar: require("@/assets/img/skills/kubernetes.png"),
                    title: "<span><strong>Docker, Kubernetes</strong></span>",
                    subtitle: "<span class='text--primary'>Deployment</span> &mdash; Containers, PODS, " +
                        "microservices",
                    value: 50,
                },
            ],
            "Project Management tools": [
                {
                    avatar: require("@/assets/img/skills/git.png"),
                    title: "<span><strong>Git, SVN</strong></span>",
                    subtitle: "<span class='text--primary'>Source version control</span>",
                },
                {
                    avatar: require("@/assets/img/skills/task.png"),
                    title: "<span><strong>Jira, Redmine</strong></span>",
                    subtitle: "<span class='text--primary'>Agile development</span> &mdash; with Issues / Bugs " +
                        "tracking",
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
                title: "<span>The <strong>S.O.L.I.D.</strong> rules to build a <strong>solid</strong> software architecture</span>",
                subTitle: "S.O.L.I.D. principles and their consequences are analyzed in depth.",
                content: require("@/assets/articles/solid-rules.md"),
                img: require("@/assets/img/articles/solid.png"),
                date: "11/11/2020",
                tag: "#architectures"
            },
            "wor-talk": {
                title: "<span>A novel <strong>Writing Order Recovery</strong> approach for handwriting specimens</span>",
                subTitle: "A pattern-recognition based approach for recovering the writing order trajectory of a signature is shown.",
                content: require("@/assets/articles/wor-talk.md"),
                img: require("@/assets/img/articles/wor.png"),
                date: "16/03/2019",
                tag: "#pattern-recognition"
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
    getCertifications: (state) => {
        return state.certifications;
    },
    getPublications: (state) => {
        return state.publications;
    },
    getSkills: (state) => {
        return state.skills;
    },
    getExperiences: (state) => {
        return state.experiences;
    },
    getArticles: (state) => {
        return state.articles;
    },
};

const actions = {
    resetState({commit}) {
        commit("resetState");
    },
};

const mutations = {
    resetState(state) {
        Object.assign(state, getDefaultState());
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
