import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect


describe('Input', () => {
    it('存在', () => {
        expect(Input).to.be.exist
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'testValue',
                }
            }).$mount()
            const inputEl = vm.$el.querySelector('input')
            expect(inputEl.value === 'testValue').to.eq(true)
            vm.$destroy()

        })
        it('接收 disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true,
                }
            }).$mount()
            const inputEl = vm.$el.querySelector('input')
            expect(inputEl.disabled === true).to.eq(true)
            vm.$destroy()
        })
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true,
                }
            }).$mount()
            const inputEl = vm.$el.querySelector('input')
            expect(inputEl.readOnly === true).to.eq(true)
            vm.$destroy()
        })
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: "errorTest",
                }
            }).$mount()
            const useEl = vm.$el.querySelector('use')
            const errorMessage = vm.$el.querySelector('.error-message')
            expect(useEl.getAttribute('xlink:href') === '#i-error').to.eq(true)
            expect(errorMessage.innerText === 'errorTest').to.eq(true)
            vm.$destroy()
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                const event = new Event(eventName)
                Object.defineProperty(event, 'target', {
                    value: {value: 'Hello'},
                    enumerable: false,
                })
                const inputEL = vm.$el.querySelector('input')
                inputEL.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('Hello')
            })
        })
    })
})