import Vue from "vue";
import Header from "@/Header.js";

new Vue({
    // el:'#main', //이게 없으면 직접 마운트 해주어야 한다
    components: { 'j-header': Header },
    data() {
        return {}
    },
    methods: {},
    render: function (createElement) {
        let headerVDOM = createElement('j-header')
        let ret = createElement('div',{},[headerVDOM])
        return ret;
    }
}).$mount('#main')