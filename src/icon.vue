<template>
    <svg class="w-icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script>
    import './svg'

    export default {
        props: {
            icon: {
                type: String,
            }
        }
    }
</script>

<style>
    .w-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>