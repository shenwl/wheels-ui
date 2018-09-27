<template>
    <div class="w-toast" :class="position">
        <slot></slot>
        <div class="line" v-if="closeButton"></div>
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
                default: true,
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
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.delay * 1000)
            }
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
        },
    }
</script>

<style lang="scss" scoped>
    $toast-height: 40px;
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
        height: $toast-height;
        text-align: center;
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 0 16px;

        .close {
            padding-left: 16px;
        }

        .line {
            height: 100%;
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