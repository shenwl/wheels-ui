<template>
    <div class="w-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            for(const node of this.$el.children) {
                const tag = node.tagName.toLowerCase()
                if(tag !== 'button') {
                    console.warn(`w-button-group 子元素应为 w-button, 你使用了${tag}`)
                }
            }
        }
    }
</script>

<style lang="scss">
    .w-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .w-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>