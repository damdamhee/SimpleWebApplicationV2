import Vue from "vue";
import Header from "@/Header.js";
import AddPersonBtn from "@/AddPersonBtn.js";
import Divider from "@/Divider.js";

new Vue({
    components: { 'j-header': Header, 'j-button': AddPersonBtn, 'j-divider': Divider },
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

        let dividerVDOM = createElement('j-divider');

        let ret = createElement('div',{},[headerVDOM, addPersonBtnVDOM, dividerVDOM])
        return ret;
    }
}).$mount('#main')