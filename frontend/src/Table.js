import Vue from "vue";

const table = Vue.extend({
    props: {
        tableHeaders: {
            type: Array,
            default: () => { return [] },
        },
        listOfPeople: {
            type: Array,
            default: () => { return [] }
        }
    },
    render: function (createElement) {
        //create header row
        let tableHeadersVDOMS = [];
        this.tableHeaders.forEach(tableHeader => {
            let headerAttribute = {
                style: {
                    color: 'white',
                    'background-color': '#55ACED',
                    padding: '4px',
                    'text-align': 'center',
                    border: '1px solid white'
                }
            }
            let headerVDOM = createElement('th', headerAttribute, tableHeader);
            tableHeadersVDOMS.push(headerVDOM);
        })
        let tableRowAttribute = {
            style: {
                height: '40px'
            }
        }
        let tableHeaderRow = createElement('tr', tableRowAttribute, tableHeadersVDOMS)

        //create item rows
        let tableRowsVDOMS = [];
        this.listOfPeople.forEach(tableItem => {
            let tds = [];
            Object.values(tableItem).forEach(tableItemValue => {
                let tdAttribute = {
                    style: {
                        'background-color': '#dddddd',
                        border: '1px solid white'
                    }
                }

                let self = this;
                let inputAttr = {
                    style:{
                        'background-color':'#dddddd',
                        border:'none'
                    },
                    domProps: {
                        value: tableItemValue,
                        on: {
                            input: function (event) {
                                self.$emit('input', event.target.value)
                            }
                        }
                    }
                }
                let input = createElement('input', inputAttr);
                let td = createElement('td', tdAttribute, [input]);
                tds.push(td);
            })
            let tr = createElement('tr', tableRowAttribute, tds);
            tableRowsVDOMS.push(tr);
        })

        //create table
        let tableAttributes = {
            style: {
                'font-family': 'arial, sans-serif',
                'border-collapse': 'collapse',
                'width': '100%'
            }
        }
        let ret = createElement('table', tableAttributes, [tableHeaderRow, tableRowsVDOMS]);

        return ret;
    }
})

export default table;