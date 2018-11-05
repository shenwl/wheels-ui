import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast'
import Alert from './alert'
import Confirm from './confirm'
import plugin from './plugin'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('w-icon', Icon)
Vue.component('w-button', Button)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-toast', Toast)
Vue.component('w-alert', Alert)
Vue.component('w-confirm', Confirm)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)
Vue.component('w-popover', Popover)
Vue.component('w-collapse', Collapse)
Vue.component('w-collapse-item', CollapseItem)

Vue.use(plugin)


new Vue({
    el: '#app',
    data: {
        message: 'hi',
        selectedTab: ['1', '2'],
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
