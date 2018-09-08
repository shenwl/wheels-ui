<template>
    <div class="w-toast">
        <slot></slot>
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
            }
        },
        mounted() {
            if(this.autoClose) {
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
    }
</style>