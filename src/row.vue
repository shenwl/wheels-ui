<template>
    <div class="w-row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'w-row',
    }
</script>

<style lang="scss" scoped>
    .w-row {
        display: flex;
    }
</style>