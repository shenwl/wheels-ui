import Vue from 'vue'
import Toast from '../src/toast'

const expect = chai.expect


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('Toast存在', () => {
        expect(Toast).to.exist
    })

    describe('props', () => {
        it('接受autoClose & delay', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: true,
                    delay: 1,
                }
            }).$mount(div)
            setTimeout(() => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            }, 1100)
        })
    })
})