import Toast from './toast'

/*
  helpers
*/
const createToast = ({Vue, propsData, message, onClose}) => {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
        propsData,
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('beforeClose', onClose ? onClose : () => {})
    document.body.appendChild(toast.$el)
    return toast
}

let currentToast = null

export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, toastoptions) => {
            if(currentToast) {
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastoptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}