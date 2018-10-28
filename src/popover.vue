<template>
    <div class="w-popover" @click="handlePopoverClick" ref="popover">
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
            setContentPosition() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()

                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            eventHandler(e) {
                const refs = this.$refs
                const hasClose = !refs.contentWrapper
                const isTargetInContentWrapper = refs.contentWrapper && refs.contentWrapper.contains(e.target)
                const isTargetInPopover = refs.popover.contains(e.target) || refs.popover === e.target
                if (hasClose || isTargetInContentWrapper || isTargetInPopover) {
                    return
                }
                this.close()
            },
            addListenerToDocument() {
                this.$nextTick(() => {
                    document.addEventListener('click', this.eventHandler)
                })
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.setContentPosition()
                    this.addListenerToDocument()
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.eventHandler)
            },
            handlePopoverClick(e) {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    this.visible === true ? this.close() : this.open()
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
        padding: 10px;
        border: 1px solid #ccc;
    }
</style>