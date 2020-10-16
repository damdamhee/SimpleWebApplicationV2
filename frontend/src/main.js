import Vue from "vue";
import Header from "@/Header.js";
import AddPersonBtn from "@/AddPersonBtn.js";

new Vue({
    components: { 'j-header': Header, 'j-button': AddPersonBtn },
    data() {
        return {}
    },
    methods: {},
    render: function (createElement) {
        let headerVDOM = createElement('j-header')

        let addPersonBtnVDOM = createElement('j-button', {
            on: {
                input: this.addPerson
            }
        })

        let ret = createElement('div',{},[headerVDOM, addPersonBtnVDOM])
        return ret;
    }
}).$mount('#main')