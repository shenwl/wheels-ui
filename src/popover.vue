<template>
    <div class="w-popover" @click.stop="handlePopoverClick">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'w-popover',
        props: {
            content: String,
        },
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            handlePopoverClick() {
                this.visible = !this.visible
                if (this.visible === true) {
                    let eventHandler = (e) => {
                        this.visible = false
                        document.removeEventListener('click', eventHandler)
                    }
                    this.$nextTick(() => {
                        document.addEventListener('click', eventHandler)
                    })
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .w-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid #ccc;
        }
    }
</style>