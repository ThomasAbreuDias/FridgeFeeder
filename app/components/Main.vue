<template>
    <Page actionBarHidden="true">
        <Frame id="liste-page">
            <ListePage/>
        </Frame>
    </Page>
</template>

<script>
    import ListePage from './ListePage';
    export default {
        components: {
            ListePage,
        }
    };
</script>

<style>

</style>
