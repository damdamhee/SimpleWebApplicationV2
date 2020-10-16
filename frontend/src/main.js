import Vue from "vue";

new Vue({
    // el:'#main', //이게 없으면 직접 마운트 해주어야 한다
    components: {},
    data() {
        return {}
    },
    methods: {},
    render: function (createElement) {
        let ret = createElement('div',{},[])
        return ret;
    }
}).$mount('#main')