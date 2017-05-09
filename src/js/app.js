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

export let bus = new Vue({});
export let store = {
    user: '',
    posts: [{
            id: 0,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
            seeMore: true,
            isLoading: false
        },
        {
            id: 1,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
            seeMore: true,
            isLoading: false
        },
        {
            id: 2,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
            seeMore: true,
            isLoading: false
        },
        {
            id: 3,
            title: 'Test',
            subtitle: 'Test',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatibus veniam illo dolores id, quae maiores, quam laborum blanditiis alias iste amet provident expedita quis nihil iusto illum quidem odio!',
            seeMore: true,
            isLoading: false
        },
        {
            id: 4,
            title: 'Good Goodbye',
            subtitle: 'Linkin Park feat. Stormzy & Pusha T',
            body: `[Chorus: Chester Bennington]
So say goodbye and hit the road
Pack it up and disappear
You better have some place to go
'Cause you can't come back around here
Good goodbye
(Don't you come back no more)

[Verse 1: Mike Shinoda]
Live from the rhythm, it's
Something wild, venomous
Enemies trying to read me
You're all looking highly illiterate
Blindly forgetting if I'm in the mix
You won't find an equivalent
I've been here killing it
Longer than you've been alive, you idiot
And it makes you so mad
Somebody else could be stepping in front of you
And it makes you so mad that you're not the only one
There's more than one of you
And you can't understand the fact
That it's over and done, hope you had fun
You've got a lot to discuss on the bus
Headed back where you're from

[Chorus: Chester Bennington]
So say goodbye and hit the road
Pack it up and disappear
You better have some place to go
'Cause you can't come back around here
Good goodbye
Good goodbye
Good goodbye
Good goodbye
Good goodbye

[Verse 2: Pusha T]
Goodbye, good riddance
A period is after every sentence
Did my time with my cellmate
Maxed out so now we finished
Every day was like a hail date
Every night was like a hailstorm
Took her back to my tinted windows
Showin' out, she in rare form
Wings up, now I'm airborne
King Push, they got a chair for him
Make way for the new queen
The old lineup, where they cheer for 'em
Consequence when you ain't there for him
Were you there for him?
Did you care for him?
You were dead wrong

[Chorus: Chester Bennington]
(Don't you come back no more)
So say goodbye and hit the road
Pack it up and disappear
You better have some place to go
'Cause you can't come back around here
Good goodbye
Good goodbye
(Don't you come back no more)
Good goodbye
Good goodbye
(Don't you come back no more)

[Verse 3: Stormzy]
Yo
Let me say goodbye to my demons
Let me say goodbye to my past life
Let me say goodbye to the darkness
Tell 'em that I'd rather be here in the starlight
Tell 'em that I'd rather be here where they love me
Tell 'em that I'm yours this is our life
And I still keep raising the bar like
Never seen a young black brother in the chart twice
Goodbye to the stereotypes
You can't tell my kings we can't
Mandem we're linking tings in parks
Now I got a tune with Linkin Park
Like goodbye to my old hoe’s
Goodbye to the cold roads
I can't die for my postcode
Young little Mike from the Gold Coast
And now I'm inside with my bro bro's
Gang

[Chorus: Chester Bennington]
So say goodbye and hit the road
Pack it up and disappear
You better have some place to go
'Cause you can't come back around here
Good goodbye
Good goodbye
(Don't you come back no more)
Good goodbye
Good goodbye
(Don't you come back no more)`,
            seeMore: false,
            isLoading: false
        },
        {
            id: 5,
            title: 'Battle Symphony',
            subtitle: 'Linkin Park',
            body: `[Verse 1]
I got a long way to go
And a long memory
I been searching for an answer
Always just out of reach
Blood on the floor
Sirens repeat
I been searching for the courage
To face my enemies
When they turn down the lights

[Chorus]
I hear my battle symphony
All the world in front of me
If my armor breaks
I’ll fuse it back together
Battle symphony
Please just don’t give up on me
And my eyes are wide awake

[Bridge]
For my battle symphony
For my battle symphony

[Verse 2]
They say that I don’t belong
Say that I should retreat
That I’m marching to the rhythm
Of a lonesome defeat
But the sound of your voice
Puts the pain in reverse
No surrender, no illusions
And for better or worse
When they turn down the lights

[Chorus]
I hear my battle symphony
All the world in front of me
If my armor breaks
I’ll fuse it back together
Battle symphony
Please just don’t give up on me
And my eyes are wide awake

[Bridge]
If I fall, get knocked down
Pick myself up off the ground
If I fall, get knocked down
Pick myself up off the ground
When they turn down the lights

[Chorus]
I hear my battle symphony
All the world in front of me
If my armor breaks
I’ll fuse it back together
Battle symphony
Please just don’t give up on me
And my eyes are wide awake
For my battle symphony
For my battle symphony`,
            seeMore: false,
            isLoading: false
        },
        {
            id: 6,
            title: 'Heavy',
            subtitle: 'Linkin Park feat. Kiara',
            body: `[Verse 1: Chester Bennington]
I don’t like my mind right now
Stacking up problems that are so unnecessary
Wish that I could slow things down
I wanna let go but there’s comfort in the panic
And I drive myself crazy
Thinking everything's about me
Yeah, I drive myself crazy
'Cause I can’t escape the gravity

[Chorus: Chester Bennington & Kiiara]
I'm holding on
Why is everything so heavy?
Holding on
So much more than I can carry
I keep dragging around what's bringing me down
If I just let go, I'd be set free
Holding on
Why is everything so heavy?

[Verse 2: Kiiara]
You say that I'm paranoid
But I’m pretty sure the world is out to get me
It’s not like I make the choice
To let my mind stay so fucking messy
I know I'm not the center of the universe
But you keep spinning 'round me just the same
I know I'm not the center of the universe
But you keep spinning 'round me just the same

[Chorus: Kiiara]
I'm holding on
Why is everything so heavy?
Holding on
So much more than I can carry
I keep dragging around what's bringing me down
If I just let go, I'd be set free
Holding on
Why is everything so heavy?

[Bridge: Chester Bennington & Kiiara]
I know I'm not the center of the universe
But you keep spinning 'round me just the same
I know I'm not the center of the universe
But you keep spinning 'round me just the same
And I drive myself crazy
Thinking everything’s about me

[Chorus: Chester Bennington & Kiiara]
Holding on
Why is everything so heavy?
Holding on
So much more than I can carry
I keep dragging around what's bringing me down
If I just let go, I'd be set free
Holding on
Why is everything so heavy?
Why is everything so heavy?
Why is everything so heavy?`,
            seeMore: false,
            isLoading: false
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
        showLogin() {
            this.login.activeModal = true;

            this.$nextTick(() => {
                this.$refs.userInput.focus();
            });
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