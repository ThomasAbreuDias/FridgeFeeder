<template>
    <Page>
        <StackLayout>
            <ListView class="list-group" for="item in user_listes" @itemTap="showListe">
                <v-template>
                        <Label :text="item.title"></Label>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import Liste from './Liste';
    const u_l=require('../data').user_listes;
    export default {
        components: {
            Liste,

        },
        data () {
            return {
                user_listes: u_l,
            }
        },
        methods: {
            showListe(ev){
                console.log(ev.item.title);
                this.$navigateTo(Liste,{   
                    transition: {},
                    transitioniOS: {},
                    transitionAndroid: {},

                    props: {
                        title: ev.item.title,
                    }
                }
                );
            }
        }
    };
</script>

<style>

</style>
