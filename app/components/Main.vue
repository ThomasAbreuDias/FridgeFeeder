<template>
    <Liste :title="newListText"/>
</template>

<script>
    import Liste from './Liste';
    export default {
        components: {
            Liste,

        },
        data () {
            return {
                newListText: 'Liste',
            }
        }
    };
</script>

<style>

</style>
