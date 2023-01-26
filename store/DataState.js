export const state = () => ({
    // Initial state
    githubUserInfo: undefined,
    githubProjects: undefined,
    blogArticles: undefined,
    certifications: [
        {
            id: 'AZ-900',
            title: 'Azure Fundamentals',
            date: '28 Mar 2022',
            color: '#1212A9',
            icon: 'mdi-medal',
            credential: 'https://www.credly.com/badges/d784a3bf-cb54-4d64-9da6-c7adaa024177?source=linked_in_profile',
            imageUrl: 'https://i.ibb.co/X5ZtgYf/az900.png'
        },
        {
            id: 'MLS-C01',
            title: 'AWS Machine Learning Specialty',
            date: '9 Mar 2021',
            color: '#F57C00',
            icon: 'mdi-medal',
            credential: 'https://www.youracclaim.com/badges/314500b7-2107-4355-b4c7-10f1c7972a75?source=linked_in_profile',
            imageUrl: 'https://i.ibb.co/bgK9kN1/aws.png'
        },
        {
            id: 'PSM I - Scrum.org',
            title: 'Professional Scrum Master 1',
            date: '13 Nov 2021',
            color: '#388E3C',
            icon: 'mdi-medal',
            credential: 'https://www.credly.com/badges/2f2ae498-ee5f-45ef-9290-e1d5172e4d21/linked_in',
            imageUrl: 'https://i.ibb.co/wcmtZV5/psm1.png'
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
            title: 'Impact of Writing Order Recovery in Automatic Signature Verification',
            authors: 'Moises Diaz · Gioele Crispo · Antonio Parziale · Angelo Marcelli · Miguel A. Ferrer',
            //href: 'https://www.researchgate.net/publication/349988795_Writing_Order_Recovery_in_Complex_and_Long_Static_Handwriting',
            date: 'June 2022',
            location: 'Conference: 20th Conference of the International Graphonomics Society (IGS2021) At: Las Palmas De Gran Canaria, Spain'
        },
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
            color: 'primary darken-2',
            type: 'job',
            icon: 'mdi-briefcase',
            date: 'May 2018 - now',
            location: 'Naples (Italy)',
            position: 'Machine Learning Engineer',
            company: 'NTT Data Italia',
            text: 'Machine Learning Engineer focused on Artificial Intelligence and NLP.<br>' +
            'I designed and developed AI products and innovative solutions, taking care of the software engineering and the architectural part.<br>' +
            'Team lead on several projects, interacting with customers and business partners.' +
            'Participation to fairs and expositions launch',
            achievements: [
                'I design and implemented a microservices architecture for two internal assets which are used by 15+ customers.',
                'I designed a Table-of-Content comparison algorithm through linear optimization model and string similarity.',
                'I designed an innovative NLP pipeline based on sentiment and generative models to improve user experience in chatbots & voicebots.',
            ],
        },
        {
            color: 'primary darken-2',
            type: 'job',
            icon: 'mdi-briefcase',
            date: 'March 2020 - now',
            location: 'Salerno (Italy)',
            position: 'Software Development Engineer',
            company: 'Freelance',
            text: 'Development of websites for professionals (portfolios and blogs);<br>' +
                'Design of a in-house video surveillance system, with some AI contributions.',
            achievements: [
                'I designed a generic website layout template to reduce website prototyping time by 50%.',
                'I designed a custom bed fall detection algorithm (~85% accuracy) to improve the alerting capability of the video surveillance system.',
            ],
        },
        /*{
            color: 'primary darken-1',
            type: 'internship',
            icon: 'mdi-briefcase-search',
            date: 'Nov 2017 - Feb 2018',
            location: 'Las Palmas de Gran Canaria (Spain)',
            position: 'Research Internship',
            company: 'Universidad del\'Atlantico Medio',
            text: 'The work was focused on pattern recognition and pattern prediction on signatures. The ' +
                'result was a conference paper, Tracking the Ballistic Trajectory in Complex and Long ' +
                'Handwritten Signatures, was written and published at the 16th International Conference ' +
                'on Frontiers in Handwriting Recognition.',
            achievements: [
            ],
        },*/
        {
            color: 'primary darken-1',
            type: 'instruction',
            icon: 'mdi-school',
            date: 'Oct 2015 - Feb 2018',
            location: 'Fisciano, Salerno (Italy)',
            position: 'Master\'s Degree - Computer Engineering',
            company: 'Università degli Studi di Salerno',
            text: 'Skills acquired: Semantic technologies, Data Mining and Machine Learning, Network ' +
            'Security, Robotics, Artificial Intelligence and Artificial Vision, Sistributed ' +
            'programming.<br>' +
            'Thesis work: The work was focused on pattern recognition and pattern prediction on signatures. ' +
            'I proposed a new approach to estimate the writing order of signatures.',
            activities: [],
            achievements: [
                'Thesis published as a conference and journal paper',
                'Grade Point Average: 29.62 / 30'
            ],
            vote: '110/110 cum laude'
        },
        {
            color: 'primary darken-1',
            type: 'instruction',
            icon: 'mdi-school',
            date: 'Oct 2011 - Jun 2015',
            location: 'Fisciano, Salerno (Italy)',
            position: 'Bachelor\'s Degree - Computer Engineering',
            company: 'Università degli Studi di Salerno',
            text: 'Skills acquired: Object Oriented Programming; Automatic Controls; Internet and Network' +
            ' stacks; Mathematics, Statistics,Telecommunications and Physics fundamentals.<br>' +
            'Thesis work: The work was focused on the design and implementation of a gesture recognition system ' +
            'on a Kinect sensor. I proposed a new feature extraction method for gestures.',
            achievements: [],
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
            name: 'Bed Fall Detection for Video Surveillance System',
            description: 'Design of a bed fall detection system based on computer vision for a home video surveillance ' +
                'system. Three TPLink Tapo C-200s are used and the video stream from the camera positioned above the bed ' +
                'is sent to a Raspberry Pi 3 to perform real-time computation. Accuracy achieved is approximately 85%.',
            type: 'Artificial Intelligence',
            color: 'blue',
            area: 'Computer Vision',
            group: 'Only me',
            technologies: 'Python, OpenCV, YOLOv5, Tapo C-200, Raspberry Pi',
            date: 'April 2022',
            resources: [
                { img: require('@/assets/img/applications/bedfall_adjusted_with_roi.jpg') },
                { img: require('@/assets/img/applications/bedfall_isolation_and_detection.jpg') },
                { img: require('@/assets/img/applications/bedfall_elderly_house.jpg') }
            ]
        },
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
    languages: [
        {
            language: 'English',
            listening: 'B2',
            reading: 'C1',
            spokenInteraction: 'B2',
            spokenProduction: 'B2',
            writing: 'B2'
        },
        {
            language: 'Spanish',
            listening: 'A2',
            reading: 'B1',
            spokenInteraction: 'A2',
            spokenProduction: 'A2',
            writing: 'A2'
        }
    ],
    books: {
        "discover-chatgpt-by-asking-it": {
            id: "discover-chatgpt-by-asking-it",
            title: "<b>Discover ChatGPT by asking it</b>: </br> Advantages, Disadvantages and Secrets",
            subtitle: "The first book about <b>ChatGPT</b> written by <b>ChatGPT</b>",
            description: "Welcome to the first-ever <i>autobiographical account of a neural network</i>! </br>" +
                "In these pages, <b>written by ChatGPT</b>, you will learn about the history, capabilities, advantages and disadvantages of ChatGPT, a powerful language model developed by OpenAI that is able to generate coherent and logical responses based on input data. You will also explore the ethical considerations and potential for misuse or abuse of this technology, and learn about the limitations of ChatGPT and the importance of human oversight. </br> </br>" +
                "Through a series of chapters and examples, you will gain a deeper understanding of ChatGPT and its place in the field of natural language processing. Whether you are a machine learning enthusiast, a writer, or simply curious about artificial intelligence, this book will provide you with valuable insights and knowledge about ChatGPT and its capabilities.",
            publishedAt: "2023-01-25T21:51:10.516Z",
            img: "/books/discover-chatgpt-by-asking-it/cover.png",
            author: "Gioele Crispo",
            tags: ["Generative AI", "Deep Learning", "ChatGPT"],
            preview: [
                require('@/assets/img/books/discover-chatgpt-by-asking-it/chapter1.png'),
                require('@/assets/img/books/discover-chatgpt-by-asking-it/chapter2.png'),
                require('@/assets/img/books/discover-chatgpt-by-asking-it/chapter3.png'),
                require('@/assets/img/books/discover-chatgpt-by-asking-it/chapter4.png'),
                require('@/assets/img/books/discover-chatgpt-by-asking-it/chapter5.png'),
                require('@/assets/img/books/discover-chatgpt-by-asking-it/chapter6.png'),
            ],
            authorDescription: "<p>My name is Gioele Crispo and I am a software development engineer focused on machine learning. I have a passion for experimentation and I am always looking for new and interesting ways to explore the capabilities and potential of artificial intelligence and machine learning.</p></br>" +
                "<p>This book, <i><b>Discover ChatGPT by asking it</b>: Advantages, Disadvantages and Secrets</i>, is the result of one such experiment. It is a <b>technical experiment</b>, as I aim to evaluate whether a neural network (ChatGPT) is capable of writing an entire book and how much human intervention is required to produce a readable and enjoyable final product. It is also an experiment in empathy and the ability of ChatGPT to convey emotions through its writing.</p>" +
                "<p>However, this work is also a <b>social experiment</b>, as I seek to gauge the level of interest in reading an \"autobiographical\" work written by a machine. I am curious to see how people respond to this unique and groundbreaking work, and I hope that it sparks discussions and debates about the role and potential of artificial intelligence in society.</p>" +
                "<p>Discover more about my projects at <a href='https://gioelecrispo.github.io'>https://gioelecrispo.github.io/</a>.</p>",
            ebook: {
                price: "€ 5,00",
                purchaseLink: "https://www.amazon.it/dp/B0BT25N51X",
            },
            paperback: {
                price: "€ 16,90",
                purchaseLink: "",
            },
            hardcover: {
                price: "€ 16,90",
                purchaseLink: "",
            }
        },
    }
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
    getLanguages: (state) => {
        return state.languages
    },
    getBooks: (state) => {
        return state.books
    }
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

