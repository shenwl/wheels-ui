import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'

Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)


new Vue({
    el: '#app',
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }
})
