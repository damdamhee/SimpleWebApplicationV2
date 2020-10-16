import Vue from "vue";

const divider = Vue.extend({
    render: function(createElement){
        let dividerAttribute = {
            style : {
                height:'30px'
            }
        }
        let ret = createElement('div',dividerAttribute);
        return ret;
    }
})

export default divider;