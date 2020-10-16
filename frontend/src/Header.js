import Vue from "vue"
const Header = Vue.extend({
    render: function (createElement) {
        let ret = createElement('h1', "List of people in DST");
        return ret;
    }
});

export default Header;