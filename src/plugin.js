export default {
    install(Vue, options) {
        Vue.prototype.$toast = () => {
            console.log('toast')
        }
    }
}