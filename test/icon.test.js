import Vue from 'vue'
import Icon from '../src/icon'

const expect = chai.expect


describe('Icon', () => {
    it('存在', () => {
        expect(Icon).to.be.exist
    })
    it('可以设置图标', () => {
        const Constructor = Vue.extend(Icon)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()
        const useEl = vm.$el.querySelector('use')
        const href = useEl.getAttribute('xlink:href')
        expect(href === '#i-settings').to.eq(true)
        vm.$destroy()
    })
})