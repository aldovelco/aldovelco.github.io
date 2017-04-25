import './bootstrap';
import router from './routes';

// Components
import FontAwesomeIcon from './components/FontAwesomeIcon.vue';
import Avatar from './components/Avatar.vue';
import Hero from './components/Hero.vue';
import Level from './components/Level.vue';
import LevelItem from './components/LevelItem.vue';
import Heading from './components/Heading.vue';


const ENV = 'development';

const app = new Vue({
    el: '#app',
    router,

    data: {
        env: ENV,
        isMenuActive: false,
        heading: {
            title: 'Aldo Velasco',
            subtitle: 'Software Developer'
        }
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
        }
    },

    created() {
        this.isDown();
    },

    components: {
        'x-hero': Hero,
        'x-avatar': Avatar,
        'x-fa': FontAwesomeIcon,
        'x-level': Level,
        'x-level-item': LevelItem,
        'x-heading': Heading
    }
});