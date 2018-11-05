<template>
    <div class="w-popover" @click="handlePopoverClick" ref="popover">
        <div class="content-wrapper" ref="contentWrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
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
            handleClickDocument(e) {
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
                    document.addEventListener('click', this.handleClickDocument)
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
                document.removeEventListener('click', this.handleClickDocument)
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
        margin-top: -10px;
        max-width: 20em;
        word-break: break-all;
        border-radius: 5px;
        filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
        background: #fff;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
            left: 10px;
        }
        &::before {
            top: 100%;
            border-top-color: #ccc;
        }
        &::after {
            border-top-color: #fff;
            top: calc(100% - 1px);
        }
    }
</style>