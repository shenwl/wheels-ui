<template>
    <div class="w-popover" @click="visible=!visible">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'w-popover',
        props: {
          content: String,
        },
        data() {
            return {
                visible: false,
            }
        }
    };
</script>

<style lang="scss" scoped>
    .w-popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid #ccc;
        }
    }
</style>