<template>
    <div class="collapse-item">
        <div class="title" @click="handleToggle">
            {{title}}
        </div>
        <div v-if="show">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-collapse-item",
        props: {
            title: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                show: false,
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', name => {
                if (name !== this.name) {
                    this.close()
                } else {
                    this.open()
                }
            })
        },
        methods: {
            handleToggle() {
                if (this.show) {
                    this.close()
                } else {
                    this.open()
                    this.eventBus && this.eventBus.$emit('update:selected', this.name)
                }
            },
            open() {
                this.show = true
            },
            close() {
                this.show = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    $gray: #ddd;
    $border-radius: 4px;

    .collapse-item {
        > .title {
            border: 1px solid $gray;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .title {
                margin-bottom: -1px;
            }
        }
    }
</style>