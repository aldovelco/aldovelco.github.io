import './bootstrap';
import router from './routes';

// Components
import FontAwesomeIcon from './components/FontAwesomeIcon.vue';
import Avatar from './components/Avatar.vue';
import Hero from './components/Hero.vue';
import Level from './components/Level.vue';
import LevelItem from './components/LevelItem.vue';
import Heading from './components/Heading.vue';
import Notification from './components/Notification.vue';
import Modal from './components/Modal.vue';

const ENV = 'development';
export let bus = new Vue({});
export let store = {
    user: '',
    posts: [{
            id: 0,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        },
        {
            id: 1,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        },
        {
            id: 2,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        },
        {
            id: 3,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
        }
    ]
};

const app = new Vue({
    router,

    components: {
        'x-hero': Hero,
        'x-avatar': Avatar,
        'x-fa': FontAwesomeIcon,
        'x-level': Level,
        'x-level-item': LevelItem,
        'x-heading': Heading,
        'x-notification': Notification,
        'x-modal': Modal,
        'x-dropdown': require('./components/Dropdown.vue')
    },

    data: {
        env: ENV,
        store: store,
        isMenuActive: false,
        login: {
            activeModal: false,
            username: '',
            password: ''
        },
        heading: {
            title: 'Aldo Velasco',
            subtitle: 'Software Developer'
        },
        notification: {
            active: false,
            dismissable: true,
            type: '',
            message: ''
        }
    },

    created() {
        this.isDown();
    },

    mounted() {
        bus.$on('notify', (data) => {
            this.notification.active = true;

            this.notification.type = data.type;
            this.notification.message = data.message;

            setTimeout(function() {
                this.notification.active = false;
            }.bind(this), 5000);
        });
    },

    methods: {
        isDown() {
            if (this.env === 'production') {
                axios.get('https://raw.githubusercontent.com/aldovelco/aldovelco.github.io/status/down').then(response => {
                    if (response.status === 200) {
                        window.location.replace('./public/down.html');
                    }
                });
            }
        },

        tryLogin() {
            this.store.user = this.login.username;

            bus.$emit('notify', {
                type: 'info',
                message: `Welcome back, ${this.login.username}`
            });

            // Clear inputs
            this.login.username = '';
            this.login.password = '';

            this.login.activeModal = false;
        }
    }
}).$mount('#app');