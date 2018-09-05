import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

const expect = chai.expect


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('Row存在', () => {
        expect(Row).to.exist
    })

    it('Row 接收 gutter 属性', (done) => {
        Vue.component('w-row', Row)
        Vue.component('w-col', Col)

        const div = document.createElement('div')

        div.innerHTML = `
            <w-row gutter="10">
                <w-col span="12"></w-col>
                <w-col span="12"></w-col>
            </w-row>
        `
        document.body.appendChild(div)

        const vm = new Vue({
            el: div,
        })

        setTimeout(() => {
            const cols = vm.$el.querySelectorAll('.w-col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('5px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('5px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })

    it('Row 接收 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)

        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'left',
            }
        }).$mount(div)
        const el = vm.$el
        expect(getComputedStyle(el).justifyContent).to.eq('flex-start')
        div.remove()
        vm.$destroy()
    })
})