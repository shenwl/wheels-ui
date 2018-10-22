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
        mounted() {
            if(!this.$children.length) {
                console && console.error && console.error('tabs的子组件应为tabs-head和tabs-body, 但你没有写子组件')
            }
            this.$children.forEach(vm => {
                if(vm.$options.name === 'w-tabs-head') {
                    vm.$children.forEach(item => {
                        if(item.$options.name === 'w-tabs-item' && item.name === this.selected) {
                            this.eventBus.$emit("update:selected", this.selected, item)
                        }
                    })
                }
            })
        },
    }
</script>
<style lang="scss" scoped>
    .w-tabs {

    }
</style>