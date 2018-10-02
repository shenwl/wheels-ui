import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast'
import Alert from './alert'
import Confirm from './confirm'
import plugin from './plugin'

Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-toast', Toast)
Vue.component('w-alert', Alert)
Vue.component('w-confirm', Confirm)

Vue.use(plugin)


new Vue({
    el: '#app',
    data: {
        message: 'hi',
    },
    methods: {
        showToast() {
            this.$toast('你的智商需要充值' + Math.random(0, 10) * 100, {
                closeButton: {
                    text: '已充值',
                    callback(toast) {
                        toast.log('他说他已经充值了')
                    },
                },
                position: 'center',
            })
        }
    }
})
