import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)


new Vue({
    el: '#app',
})

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const {expect} = chai

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'upload',
        }
    }).$mount()
    const useEle = vm.$el.querySelector('use')
    const href = useEle.getAttribute('xlink:href')
    expect(href).to.eq('#i-upload')
}