<template>
    <Page>
        <AbsoluteLayout>
          <RadListView ref="listView"
                       for="item in user_listes"
                       swipeActions="true"
                       @itemSwipeProgressStarted="onSwipeStarted"
                       @itemTap="showListe"
                       >
            <v-template>
              <StackLayout class="item" orientation="vertical" >
                <Label :text="item.title"></Label>
              </StackLayout>
            </v-template>

            <v-template name="itemswipe">
                <StackLayout id="delete-view" class="swipe-item right"
                             orientation="horizontal" @tap="rmvItemClick" backgroundColor="#ac495e">
                    <Label class="swipe-label">
                        <FormattedString>
                            <Span class="fas" text.decode="&#xf2ed; "/>
                        </FormattedString>
                    </Label>
                  
                </StackLayout>
            </v-template>
          </RadListView>
                <AbsoluteLayout marginTop="87%" marginLeft="75%" >
                <Button class="btn" backgroundColor="#FE9D95" text="Ajouter" @tap="prompt" >
                    <FormattedString >
                        <Span class="fas add-label" text.decode="&#xf067;" />
                    </FormattedString>
                </Button>
            </AbsoluteLayout>
        </AbsoluteLayout>
    </Page>
</template>

<script>
    import Liste from './Liste';
    const u_l=require('../data').user_listes;
    const dialogs = require('tns-core-modules/ui/dialogs');
    import { ObservableArray } from 'tns-core-modules/data/observable-array';
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
                    },
                );
            },
            prompt() {
                prompt({
                  title: "Une nouvelle Liste ?",
                  message: "Attention l'argent ne pousse pas sur les arbres !",
                  okButtonText: "OK",
                  cancelButtonText: "Annuler",
                  cancelable: true,
                  defaultText: `Liste ${this.user_listes.length+1}`,
                  inputType: dialogs.inputType.text
                }).then(result => {
                    if(`${result.result}` == 'true'){
                        this.user_listes.push({
                            id:this.user_listes.length,
                            title:`${result.text}`,
                        })
                    }
                  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
                });
            },
            rmvItemClick ({ object }) {
                console.log(object.bindingContext.id);
                // remove item
                this.user_listes.splice(this.user_listes.indexOf(object.bindingContext), 1);
            },
            onSwipeStarted ({ data, object }) {
                console.log(`Swipe started`);
                const swipeLimits = data.swipeLimits;
                const swipeView = object;
                const rightItem = swipeView.getViewById('delete-view');
                swipeLimits.right = rightItem.getMeasuredWidth()/4;
                swipeLimits.threshold = swipeLimits.right /2;
            },

        }
    };
</script>

<style>

</style>
