import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './Col'

Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)


new Vue({
    el: '#app',
    data: {
        message: 'hi',
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }
})
