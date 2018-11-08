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
            this.eventBus.$emit('update:selected', this.single ? this.selected.slice(0, 1) : this.selected)
            this.single && this.$emit('update:selected', this.selected.slice(0, 1))

            this.eventBus.$on('update:removeSelected', name => {
                const selectedArray = this.selected.filter(item => item !== name)
                this.$emit('update:selected', selectedArray)
                this.eventBus.$emit('update:selected', selectedArray)
            })
            this.eventBus.$on('update:addSelected', name => {
                const selectedArray = this.single ? [name] : [...this.selected, name]
                this.$emit('update:selected', selectedArray)
                this.eventBus.$emit('update:selected', selectedArray)
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