import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('Col 存在', () => {
        expect(Col).to.exist
    })

    it('接收 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)

        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 12,
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('col-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })

    it('接收 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)

        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 10,
            }
        }).$mount(div)
        const el = vm.$el
        expect(el.classList.contains('col-offset-10')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})