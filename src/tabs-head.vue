<template>
    <div class="w-tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-head',
        inject: ['eventBus'],
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    .w-tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: center;
        border: 1px solid #ccc;
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>