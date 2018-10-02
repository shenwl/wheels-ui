<template>
    <div class="w-toast" :class="position" ref="wrapper">
        <div class="message">
            <slot></slot>
        </div>
        <div class="line" v-if="closeButton" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'w-toast',
        props: {
            autoClose: {
                type: Boolean,
                default: false,
            },
            delay: {
                type: Number,
                default: 2,
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined,
                    }
                }
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'center'].indexOf(value) > -1
                }
            }
        },
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        methods: {
            close() {
                this.$el.remove()
                this.$destroy()
            },
            log: console.log.bind(console),
            onClickClose() {
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.delay * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =  `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
        },
    }
</script>

<style lang="scss" scoped>
    $toast-min-height: 40px;
    $font-size: 14px;
    .w-toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        text-align: center;
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 0 16px;

        .message {
            padding: 5px 0;
        }

        .close {
            padding-left: 16px;
        }

        .line {
            border-left: 1px solid #666;
            margin-left: 16px;
        }

        &.top {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        &.bottom {
             position: absolute;
             bottom: 0;
             left: 50%;
             transform: translateX(-50%);
         }
        &.center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

</style>