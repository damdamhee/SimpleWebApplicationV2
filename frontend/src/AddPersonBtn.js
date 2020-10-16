import Vue from "vue"
const AddPersonBtn = Vue.extend({
    methods: {
        addPerson: function () {
            this.$emit('input');
        }
    },
    render: function (createElement) {
        let attributes = {
            style: {
                width: '120px',
                height: '40px',
                color: 'white',
                'background-color': '#55ACED',
                border: 'none',
                padding: '15px',
                cursor: 'pointer'
            },
            on: {
                click: this.addPerson
            }
        }
        let ret = createElement('button', attributes, 'ADD')
        return ret;
    }
})

export default AddPersonBtn;