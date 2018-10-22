<template>
    <div class="w-tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        name: 'w-tabs',
        props: {
            selected: {
                type: String,
                required: true,
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) > -1
                }
            },
        },
        data() {
            return {
                eventBus: new Vue(),
            }
        },
        provide() {
            return {
                eventBus: this.eventBus,
            }
        },
        created() {
            this.$emit("update:selected", '')
        },
    }
</script>
<style lang="scss">
    .w-tabs {

    }
</style>