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


// 单元测试
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

const {expect} = chai

{
    // 测试Button的icon参数
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'upload',
        }
    }).$mount()
    const useEle = vm.$el.querySelector('use')
    const href = useEle.getAttribute('xlink:href')
    expect(href).to.eq('#i-upload')
    vm.$el.remove()
    vm.$destroy()
}
{
    // 测试Button的iconPostion参数
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'upload',
            iconPosition: 'right',
        }
    }).$mount(div)
    const svg = vm.$el.querySelector('svg')
    const order = window.getComputedStyle(svg).order
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    // 测试Button的click事件
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'upload',
        }
    }).$mount()
    const spy = chai.spy(() => {})
    vm.$on('click', spy)
    const button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}