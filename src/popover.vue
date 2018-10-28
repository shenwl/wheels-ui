<template>
    <div class="w-popover" @click.stop="handlePopoverClick">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'w-popover',
        props: {
            content: String,
            event: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'focus'].indexOf(value) > -1
                }
            }
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
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()

                        this.$refs.contentWrapper.style.left =  left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top =  top + window.scrollY + 'px'

                        let eventHandler = (e) => {
                            this.visible = false
                            document.removeEventListener('click', eventHandler)
                        }
                        this.$nextTick(() => {
                            document.addEventListener('click', eventHandler)
                        })
                    })
                }
            },
        }
    }
</script>

<style lang="scss">
    .w-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper {
        position: absolute;
        transform: translateY(-100%);
    }
</style>