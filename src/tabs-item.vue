<template>
    <div class="w-tabs-item">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-item',
        props: {
            disabled: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>
<style lang="scss">
    .w-tabs-header {

    }
</style>