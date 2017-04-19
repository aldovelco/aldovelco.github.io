import './bootstrap';
import router from './routes';

const app = new Vue({
    el: '#app',
    router,

    mounted() {
        axios.get('https://raw.githubusercontent.com/aldovelco/aldovelco.github.io/status/down').then(response => {
            if (response.status === 200) {
                window.location.replace('./public/down.html');
            }
        })
    }
});