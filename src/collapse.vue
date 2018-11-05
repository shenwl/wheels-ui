<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "w-collapse",
        props: {
            single: {
                type: Boolean,
                default: false,
            },
            selected: {
                type: Array
            }
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
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:removeSelected', name => {
                this.$emit('update:selected', this.selected.filter(item => item !== name))
            })
            this.eventBus.$on('update:addSelected', name => {
                this.$emit('update:selected', [...this.selected, name])
            })
            this.$children.forEach(vm => {
                vm.single = this.single
            })
        }
    }
</script>

<style lang="scss" scoped>
    $gray: #ddd;
    $border-radius: 4px;

    .collapse {
        border: 1px solid $gray;
        border-radius: $border-radius;
    }
</style>