import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'

Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-icon', Icon)


new Vue({
    el: '#app',
})
