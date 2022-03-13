export const state = () => ({
    // Initial state
    githubUserInfo: undefined,
    githubProjects: undefined,
    blogArticles: undefined,
    certifications: [
        {
            id: 'MLS-C01',
            title: 'AWS Machine Learning Specialty',
            date: '9 Mar 2021',
            color: '#F57C00',
            icon: 'mdi-medal',
            credential: 'https://www.youracclaim.com/badges/314500b7-2107-4355-b4c7-10f1c7972a75?source=linked_in_profile',
            //imageUrl: 'https://images.unsplash.com/photo-1485796826113-174aa68fd81b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            id: 'PSM I - Scrum.org',
            title: 'Professional Scrum Master 1',
            date: '13 Nov 2021',
            color: '#388E3C',
            icon: 'mdi-medal',
            credential: 'https://www.credly.com/badges/2f2ae498-ee5f-45ef-9290-e1d5172e4d21/linked_in',
            //imageUrl: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
        },
        {
            id: 'B1.1 of the CEFR',
            title: 'Trinity - Grade 5',
            date: '23 Jan 2015',
            color: '#1976D2',
            icon: 'mdi-web',
            imageUrl: 'https://media.istockphoto.com/vectors/united-kingdom-flag-realistic-waving-union-jack-vector-id1251660737?k=20&m=1251660737&s=612x612&w=0&h=Hd3fVDhA3KUaefIawI9jcyTFL7M_YZwO6wBxTu8bVxE='
        }
    ],
    publications: [
        {
            title: 'Writing Order Recovery in Complex and Long Static Handwriting',
            authors: 'Moises Diaz · Gioele Crispo · Antonio Parziale · Angelo Marcelli · Miguel A. Ferrer',
            href: 'https://www.researchgate.net/publication/349988795_Writing_Order_Recovery_in_Complex_and_Long_Static_Handwriting',
            date: 'March 2021',
            location: 'International Journal of Interactive Multimedia and Artificial Intelligence – IJIMAI'
        },
        {
            title: 'Tracking the Ballistic Trajectory in Complex and Long Handwritten Signatures',
            authors: 'Gioele Crispo · Moises Diaz · Angelo Marcelli · Miguel A. Ferrer',
            href: 'https://www.researchgate.net/publication/327405064_Tracking_the_Ballistic_Trajectory_in_Complex_and_Long_Handwritten_Signatures',
            date: 'August 2018',
            location: 'Conference: 16th International Conference on Frontiers in Handwriting Recognition (ICFHR) At: Niagara Falls, USA'
        }
    ],
    experiences: [
        {
            color: 'blue darken-2',
            icon: 'mdi-briefcase',
            date: 'May 2018 - now',
            location: 'Naples (Italy)',
            position: 'AI Software Engineer',
            company: 'NTT Data Italia',
            text: 'Software engineer focused on issues of Artificial Intelligence and Natural Language ' +
                'Processing. Main duties:  design of software architectures in AI projects; design and' +
                ' implementation of the AI and NLP functionalities with an eye on the efficiency and ' +
                'reusability of the models;  team coordination in various projects.'
        },
        {
            color: 'orange darken-1',
            icon: 'mdi-briefcase-search',
            date: 'Nov 2017 - Feb 2018',
            location: 'Las Palmas de Gran Canaria (Spain)',
            position: 'Research Internship',
            company: 'Universidad del\'Atlantico Medio',
            text: 'The work was focused on pattern recognition and pattern prediction on signatures. The ' +
                'result was a conference paper, Tracking the Ballistic Trajectory in Complex and Long ' +
                'Handwritten Signatures, was written and published at the 16th International Conference ' +
                'on Frontiers in Handwriting Recognition.'
        },
        {
            color: 'red darken-2',
            icon: 'mdi-school',
            date: 'Oct 2015 - Feb 2018',
            location: 'Fisciano, Salerno (Italy)',
            position: 'Master\'s Degree - Computer Engineering',
            company: 'Università degli Studi di Salerno',
            text: 'Skills acquired: Semantic technologies, Data Mining and Machine Learning, Network ' +
                'Security, Robotics, Artificial Intelligence and Artificial Vision, Sistributed ' +
                'programming.',
            vote: '110/110 cum laude'
        },
        {
            color: 'orange darken-1',
            icon: 'mdi-briefcase-search',
            location: 'Fisciano, Salerno (Italy)',
            position: 'Company Internship',
            company: 'A.I Tech',
            date: 'Nov 2014 - Jun 2015',
            text: 'The work was focused on the design and implementation of a gesture recognition system ' +
                'on a Kinect sensor. I proposed a new feature extraction method for gestures.'
        },
        {
            color: 'red darken-2',
            icon: 'mdi-school',
            date: 'Oct 2011 - Jun 2015',
            location: 'Fisciano, Salerno (Italy)',
            position: 'Bachelor\'s Degree - Computer Engineering',
            company: 'Università degli Studi di Salerno',
            text: 'Skills acquired: Object Oriented Programming; Automatic Controls; Internet and Network' +
                ' stacks; Mathematics, Statistics,Telecommunications and Physics fundamentals.',
            vote: '103/110'
        }
    ],
    skills: {
        'Programming Languages': [
            {
                avatar: require('@/assets/img/skills/python.png'),
                title: '<span><strong>Python</strong></span>',
                subtitle: '<span>Data Science</span> &mdash; with AI Frameworks, numpy, pandas, ' +
                    'g-unicorn, aiohttp, Flask and others for making microservices',
                value: 95
            },
            {
                avatar: require('@/assets/img/skills/javascript.png'),
                title: '<span><strong>Javascript</strong></span>',
                subtitle: '<span>Backend and Frontend</span> &mdash; NodeJS, VueJS; ' +
                    ' use of NodeJS to create NodeVM sandboxed microservices in javascript',
                value: 90
            },
            {
                avatar: require('@/assets/img/skills/java.png'),
                title: '<span><strong>Java</strong></span>',
                subtitle: '<span>Backend</span> &mdash; Spring, Spring Boot, Javadoc, ' +
                    'Stream, Eureka, Swagger codegen, microservices',
                value: 85
            },
            {
                avatar: require('@/assets/img/skills/matlab.png'),
                title: '<span><strong>Matlab</strong></span>',
                subtitle: '<span>Data Science</span> &mdash; Master\'s degree thesis ' +
                    'strongly focused on Pattern Recognition and Image Analysis',
                value: 85
            },
            {
                avatar: require('@/assets/img/skills/c++.png'),
                title: '<span><strong>C++</strong></span>',
                subtitle: '<span>Computer Vision</span> &mdash; OpenCV based ' +
                    'bachelor\'s degree thesis',
                value: 39
            },
            {
                avatar: require('@/assets/img/skills/c.png'),
                title: '<span><strong>C</strong></span>',
                subtitle: '<span>Generic use</span> &mdash; Some project focused on CV' +
                    ' and IoT made on Raspberry Pi 3',
                value: 65
            },
            {
                avatar: require('@/assets/img/skills/sql.png'),
                title: '<span><strong>SQL</strong></span>',
                subtitle: '<span>Databases</span> &mdash; used for many projects',
                value: 90
            },
            {
                avatar: require('@/assets/img/skills/html.png'),
                title: '<span><strong>HTML, CSS</strong></span>',
                subtitle: '<span>Frontend</span> &mdash; used with VueJS',
                value: 80
            }
        ],
        'Data Science and AI Frameworks': [
            {
                avatar: require('@/assets/img/skills/tensorflow.png'),
                title: '<span><strong>Tensorflow, Keras</strong></span>',
                subtitle: '<span>NLP and Audio Projects</span>',
                value: 70
            },
            {
                avatar: require('@/assets/img/skills/pytorch.png'),
                title: '<span><strong>PyTorch, FastAI</strong></span>',
                subtitle: '<span>NLP projects</span> &mdash; GPU optimized',
                value: 70
            },
            {
                avatar: require('@/assets/img/skills/neural.png'),
                title: '<span><strong>BERT, Scikit-learn</strong></span>',
                subtitle: '<span>NLP projects</span>',
                value: 90
            },
            {
                avatar: require('@/assets/img/skills/elastic.png'),
                title: '<span><strong>Elastic Stack</strong></span>',
                subtitle: '<span>Big Data</span> &mdash; Elasticsearch, Kibana, ' +
                    'Logstash, MetricBeat, FileBeat',
                value: 75
            }
        ],
        'General Frameworks': [
            {
                avatar: require('@/assets/img/skills/spring.png'),
                title: '<span><strong>Spring 5.X, Spring Boot 2.X</strong></span>',
                subtitle: '<span>Enterprise Java</span> &mdash; MVC and Reactor, REST, ' +
                    'Hibernate, String Security, Spring Data',
                value: 75
            },
            {
                avatar: require('@/assets/img/skills/nodejs.png'),
                title: '<span><strong>NodeJS 10.X, VueJS 2.X</strong></span>',
                subtitle: '<span>Backend and Frontend</span>',
                value: 85
            }
        ],
        'Tools': [
            {
                avatar: require('@/assets/img/skills/aws.png'),
                title: '<span><strong>AWS Services</strong></span>',
                subtitle: '<span>Lambda, S3, DynamoDB, EC2, Kinesis, SageMaker </span> &mdash; ' +
                    'and other stuff of AI projects.',
                value: 70
            }, {
                avatar: require('@/assets/img/skills/database.png'),
                title: '<span><strong>MongoDB, MariaDB</strong></span>',
                subtitle: '<span>Data storages</span> &mdash; for multi-clustered ' +
                    'cloud architectures',
                value: 80
            },
            {
                avatar: require('@/assets/img/skills/rabbitmq.png'),
                title: '<span><strong>RabbitMQ, ZMQ, Kafka</strong></span>',
                subtitle: '<span>Message Brokers, Data stream</span> &mdash; ' +
                    'used in high rate cloud architectures',
                value: 70
            },
            {
                avatar: require('@/assets/img/skills/kubernetes.png'),
                title: '<span><strong>Docker, Kubernetes</strong></span>',
                subtitle: '<span>Deployment</span> &mdash; Containers, PODS, ' +
                    'microservices',
                value: 50
            }
        ],
        'Project Management tools': [
            {
                avatar: require('@/assets/img/skills/git.png'),
                title: '<span><strong>Git, SVN</strong></span>',
                subtitle: '<span>Source version control</span>'
            },
            {
                avatar: require('@/assets/img/skills/task.png'),
                title: '<span><strong>Jira, Redmine</strong></span>',
                subtitle: '<span>Agile development</span> &mdash; with Issues / Bugs ' +
                    'tracking'
            }
        ],
        'Communication capabilities': [
            {
                avatar: require('@/assets/img/skills/soft/teamwork.png'),
                title: '<span><strong>Teamwork</strong></span>',
                subtitle: '<span>Focused on team and cooperation</span>'
            }
        ],
        'Organisational / managerial skills': [
            {
                avatar: require('@/assets/img/skills/soft/punctual.png'),
                title: '<span><strong>Punctual</strong></span>',
                subtitle: '<span>Careful in meeting deadlines</span>'
            },
            {
                avatar: require('@/assets/img/skills/soft/goal.png'),
                title: '<span><strong>Goal oriented</strong></span>',
                subtitle: '<span>Projected on the goal, but also giving importance to the details</span>'
            },
            {
                avatar: require('@/assets/img/skills/soft/leadership.png'),
                title: '<span><strong>Leadership</strong></span>',
                subtitle: '<span>Team leader in several projects</span>'
            }
        ],
        'Driving Licence': [
            {
                avatar: require('@/assets/img/skills/car.png'),
                title: '<span><strong>A1, B</strong></span>',
                subtitle: '<span>Driving licence for car and scooter with 125 cc max</span>'
            }
        ]
    },
    projects: [
        {
            name: 'Kaboo - Word Game',
            description: 'Android Game App built with Kivy framework, written in Python and published on Play Store. ' +
                'It is a word game based on well-known Taboo. A CI/CD Github Action has been developed to ' +
                'improve update and release processes.',
            type: 'Web and Mobile',
            color: 'gray',
            area: 'Mobile App',
            group: '2 people',
            technologies: 'Python, Kivy, Buildozer',
            date: 'February 2021',
            resources: [
                { videoId: 'qr9I3LjdkSw' },
                { img: require('@/assets/img/applications/kaboo.jpg') }
            ]
        },
        {
            name: 'Emotions and Faces recognition',
            description: 'System to recognize emotions and faces from a ' +
                'Kinect or generic camera. A CNN was built and ' +
                'trained on the FER 2013 dataset from scratch. ' +
                'A hyperparameters optimization phase allowed ' +
                'to improve the accuracy by 4%.',
            type: 'Artificial Intelligence',
            color: 'blue',
            area: 'Computer Vision',
            group: '2 people',
            technologies: 'Python, Tensorflow, OpenCV, Kinect SDK',
            date: 'January 2021',
            resources: [
                { videoId: 'kOJncJAVPng' },
                { img: require('@/assets/img/applications/emotion-cnn.jpg') }
            ]
        },
        {
            name: 'Self Driving model car',
            description: 'Self driving model car in style Duckietown. Features a homemade lane following algorithm as well a road sign detector and classifier based on cascade detector and HOG descriptor.',
            type: 'Artificial Intelligence',
            area: 'Computer Vision',
            color: 'blue',
            group: '4 people',
            technologies: 'ROS, C++, OpenCV',
            date: 'July 2017',
            resources: [
                { videoId: 'nC_KHnol8jI' },
                { img: require('@/assets/img/applications/duckietown-1.jpg') },
                { img: require('@/assets/img/applications/duckietown-2.jpg') },
                { img: require('@/assets/img/applications/duckietown-3.jpg') }
            ]
        },
        {
            name: 'Remake of a classic videogame',
            description: 'As a coursework, we did our own version of the classic game "Galaga" in Java, using the Extreme Programming methodology.',
            type: 'Other',
            area: 'Software Engineering',
            color: 'purple',
            group: '8 people',
            technologies: 'Java, Extreme Programming',
            date: 'Jan 2016',
            resources: [
                { videoId: '8vTdgrHNEMY' },
                { img: require('@/assets/img/applications/galaga.jpg') }
            ]
        },
        {
            name: 'Scientific Conference App',
            description: 'Mobile hybrid app for the attendees to a conference. The app allows to browse the attendees to the conference, to view the scientific program, to enable notifications for specific talks and to gather general information about the conference.\n' +
                'The app interfaces with a web service to update the information, but also features a local cache to allow offline browsing. The app interfaces with the Scopus database to automatically show blbliometrics about the many speakers. The project involved developing both the server web-service and the app (released on the Google Play Store and on the Apple Store). The app was developed using the hybrid technology Ionic 2.',
            type: 'Web and Mobile',
            area: 'Mobile App',
            color: 'gray',
            group: '4 people',
            technologies: 'ROS, C++, OpenCV',
            date: 'July 2017',
            resources: [
                { img: require('@/assets/img/applications/gbr-app-1.jpg') },
                { img: require('@/assets/img/applications/gbr-app-2.jpg') }
            ]
        },
        {
            name: 'Mrs. Pacman A.I. player - Evolutionary programming',
            description: 'A rule-based Artificial Intelligent player. Genetic Algorithm was used to optimize the performance. Based on Pambush III.',
            type: 'Artificial Intelligence',
            color: 'red',
            area: 'Artificial Intelligence',
            group: '3 people',
            technologies: 'Java',
            date: 'July 2017',
            resources: [
                { videoId: '8_R36Kj4Njo' },
                { img: require('@/assets/img/applications/mrs-pacman.jpg') }
            ]
        },
        {
            name: 'Writing Order Recovery in complex and long static handwriting',
            description: 'Algorithm for writing order recovery of long static handwriting. A pattern recognition system was made to detect all the trace intersections, ' +
                'then a global reconstruction phase was carried out to connect all the traces. A genetic algorithm was used to optimize the hyperparameters of the pattern ' +
                'recognition system.',
            type: 'Artificial Intelligence',
            color: 'dark blue',
            area: 'Computer Vision & Pattern Recognition',
            group: 'Only me',
            technologies: 'Matlab, Python, OpenCV',
            date: 'February 2018',
            resources: [
                { videoId: 'TYoZZ8CThhw' },
                { img: require('@/assets/img/applications/wor.png') }
            ]
        },
        {
            name: 'Smart Waste Bin',
            description: 'A Smart Waste Bin made for NTT DATA Italy at AI Hackathon 2020 (24 hours).\n' +
                '\n' +
                'The system is composed of:\n' +
                '- An Artificial Intelligence model for the recognition of waste material (paper, plastic, cardboard, metal, glass) trained on a dataset of 2400 images\n' +
                '- A Raspberry pi 3 model B;\n' +
                '- A HC-SR04 ultrasonic sensor;\n' +
                '- A 1602 ° LCD display;\n' +
                '- A Smartphone with FullHD camera;\n' +
                '- A Simulated 5G connection.',
            type: 'Artificial Intelligence',
            color: 'light blue',
            area: 'Computer Vision  &  IoT',
            group: '7 people',
            technologies: 'Java',
            date: 'February 2020',
            resources: [
                { videoId: '2Zgz2MiItXI' },
                { img: require('@/assets/img/applications/smart-waste-bin-1.jpg') },
                { img: require('@/assets/img/applications/smart-waste-bin-2.jpg') }
            ]
        },
        {
            name: 'Control of Industrial Robot Comau SmartSix',
            description: 'Pick-and-place like application with ROS and Industrial robot Comau SmartSix',
            type: 'Other',
            color: 'green',
            area: 'Robotics',
            group: '2 people',
            technologies: 'C++, Ros, Matlab, Simulink',
            date: 'July 2017',
            resources: [
                { videoId: 'cZCZZ23GLLc' },
                { img: require('@/assets/img/applications/comau-smartsix.jpg') }
            ]
        },
        {
            name: 'Gesture Recognition & Robot control system',
            description: 'A gesture recognition & Robot Control System made for a Bachelor\'s thesis work. The system was realized through OpenCV, Kinect SDK and Qt in C++.\n' +
                'It is composed of a Pioneer robot, a Kinect sensor and a Ad-hoc Wi-Fi connection for the PC-robot communication. \n' +
                'The images captured by the Kinect sensor are processed by the PC, which identifies and evaluates the gestures (up, down, left, right and stop) in a time window and passes the commands to the robot via a Wi-Fi-based protocol.',
            type: 'Artificial Intelligence',
            color: 'blue',
            area: 'Computer Vision',
            group: '2 people',
            technologies: 'C++, OpenCV, Kinect SDK',
            date: 'February 2020',
            resources: [
                { videoId: 'w_z12qTZt-U' },
                { img: require('@/assets/img/applications/gesture-system.png') }
            ]
        },

    ],
})


export const getters = {
    getGithubUserInfo: (state) => {
        return state.githubUserInfo
    },
    getGithubProjects: (state) => {
        return state.githubProjects
    },
    getProjects: (state) => {
        return state.projects
    },
    getCertifications: (state) => {
        return state.certifications
    },
    getPublications: (state) => {
        return state.publications
    },
    getSkills: (state) => {
        return state.skills
    },
    getExperiences: (state) => {
        return state.experiences
    },
    getBlogArticles: (state) => {
        return state.blogArticles
    },
    getBlogTopics: (state) => {
        let blogTopics = [];
        for (let article of state.blogArticles) {
            for (let tag of article.tags) {
                blogTopics.push(tag);
            }
        }
        return blogTopics;
    },
}


export const mutations = {
    setGithubUserInfo(state, githubUserInfo) {
        state.githubUserInfo = githubUserInfo;
    },
    setGithubProjects(state, githubProjects) {
        state.githubProjects = githubProjects;
    },
    setBlogArticles(state, blogArticles) {
        state.blogArticles = blogArticles;
    },
}

export const actions = {
    setGithubUserInfo({ commit }, githubUserInfo) {
        commit('setGithubUserInfo',  githubUserInfo);
    },
    setGithubProjects({ commit }, githubProjects) {
        commit('setGithubProjects', githubProjects);
    },
    setBlogArticles({ commit }, blogArticles) {
        commit('setBlogArticles', blogArticles);
    },
}

