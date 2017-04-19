import './bootstrap';
import router from './routes';

const ENV = 'development';

const app = new Vue({
    el: '#app',
    router,

    data: {
        env: ENV,
        isMenuActive: false
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

        toggleMenu() {
            this.isMenuActive ? this.isMenuActive = false : this.isMenuActive = true;
        }
    },

    mounted() {
        this.isDown();
    }
});