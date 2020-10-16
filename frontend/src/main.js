import Vue from "vue";
import Header from "@/Header.js";
import AddPersonBtn from "@/AddPersonBtn.js";
import Divider from "@/Divider.js";
import Table from "@/Table.js"

new Vue({
    components: { 'j-header': Header, 'j-button': AddPersonBtn, 'j-table': Table, 'j-divider': Divider },
    data(){
        return {
            tableHeaders: ["Name", "Phone No.", "Address"],
            listOfPeople: [
                { name: 'JJH', phno: '010-1234-5678', addr: 'suwon' },
                { name: 'JHJ', phno: '010-0987-6543', addr: 'suwon' }
            ]
        }
    },
    methods: {
        addPerson: function () {
            let newPerson = {name:"", phno:"", addr:""}
            this.listOfPeople.push(newPerson);
        }
    },
    render: function (createElement) {
        let headerVDOM = createElement('j-header')
        let addPersonBtnVDOM = createElement('j-button', {
            on: {
                input: this.addPerson
            }
        })
        let dividerVDOM = createElement('j-divider');

        let tableAttributes = {
            props: {
                tableHeaders : this.tableHeaders,
                listOfPeople: this.listOfPeople
            }
        }
        let tableVDOM = createElement('j-table', tableAttributes)
        let ret = createElement('div',
            {},
            [headerVDOM, addPersonBtnVDOM, dividerVDOM, tableVDOM]
        )
        return ret;
    }
}).$mount('#main')