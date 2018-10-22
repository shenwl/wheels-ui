<template>
    <div class="w-tabs-body">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'w-tabs-body',
        inject: ['eventBus'],
    }
</script>
<style lang="scss" scoped>
    .w-tabs-body {

    }
</style>