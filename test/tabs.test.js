import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'
import TabsItem from '../src/tabs-item'

const expect = chai.expect


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('Tabs存在', () => {
        expect(Tabs).to.exist
    })

    it('接受selected prop', (done) => {
        Vue.component('w-tabs', Tabs)
        Vue.component('w-tabs-head', TabsHead)
        Vue.component('w-tabs-body', TabsBody)
        Vue.component('w-tabs-pane', TabsPane)
        Vue.component('w-tabs-item', TabsItem)

        const div = document.createElement('div')
        document.body.appendChild(div)

        div.innerHTML = `
         <w-tabs :selected="'tech'">
            <w-tabs-head>
                <w-tabs-item name="tech">技术</w-tabs-item>
                <w-tabs-item name="city">城市</w-tabs-item>
                <w-tabs-item name="job">工作</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-pane name="tech">技术相关资讯</w-tabs-pane>
                <w-tabs-pane name="city">城市相关资讯</w-tabs-pane>
                <w-tabs-pane name="job">工作相关资讯</w-tabs-pane>
            </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({el: div})
        vm.$nextTick(() => {
            let selectedItem = vm.$el.querySelector('.w-tabs-item[data-name="tech"]')
            expect(selectedItem.classList.contains('active')).to.be.true
            done()
        })
    })

})