import report from '../report/report.vue'

export default ({
    name: 'schedule',

    props: {
        days: {
            type: Array,
            default: [],
        },
    },

    components: {
        report
    },

    data() {
        return {
            tabs: []
        }
    },

    mounted() {
        this.tabs = this.days.map(() => false);
        this.tabs[0] = true;
    },

    methods: {
        setTab: function(index){
            this.tabs = this.tabs.map(() => false);
            this.tabs[index] = true;
        },
    },
});
