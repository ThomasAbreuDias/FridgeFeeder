<template>
	<GridLayout orientation="vertical" rows="auto, *">
      <RadListView ref="listView"
                   for="item in liste_items"
                   swipeActions="true"
                   @itemSwipeProgressStarted="onSwipeStarted"
                   >
        <v-template>
          <StackLayout class="item" orientation="vertical" backgroundColor="#534D56">
            <Label :text="item.name" class="nameLabel"></Label>
          </StackLayout>
        </v-template>

        <v-template name="itemswipe">
          <GridLayout columns="*" backgroundColor="#ac495e">
            <StackLayout id="delete-view" col="2" class="swipe-item right"
                         orientation="horizontal" @tap="rmvItemClick">
              <Label class="swipe-label" text="delete"/>
            </StackLayout>
          </GridLayout>
        </v-template>
      </RadListView>
      <Button col="2" class="btn btn-primary" text="Ajouter" @tap="prompt" />
    </GridLayout>


</template>

<script>
	import { ObservableArray } from 'tns-core-modules/data/observable-array';
	const dialogs = require('tns-core-modules/ui/dialogs');
	export default {
		data() {
			return {
				liste_items: new ObservableArray([
				{
					id: 0,
					name: 'Lait',
					buy: false,
				},
				{
					id: 1,
					name: 'Tomates',
					buy: false,
				}
				])
			};
		},
		methods: {
			onItemTap(ev) {
				console.log(ev.item.id);
			},
			onSwipeStarted ({ data, object }) {
				console.log(`Swipe started`);
				const swipeLimits = data.swipeLimits;
				const swipeView = object;
				const rightItem = swipeView.getViewById('delete-view');
				swipeLimits.right = rightItem.getMeasuredWidth()/4;
				swipeLimits.threshold = swipeLimits.right /2;
			},
			rmvItemClick ({ object }) {
				console.log(object.bindingContext.id);
				// remove item
				this.liste_items.splice(this.liste_items.indexOf(object.bindingContext), 1);
      			this.$refs.listView.notifySwipeToExecuteFinished();
 			 },
 			 prompt() {
 			 	prompt({
				  title: "Un nouvelle article ?",
				  message: "Ajouter votre article:",
				  okButtonText: "OK",
				  cancelButtonText: "Annuler",
				  defaultText: "S.Pellegrino",
				  inputType: dialogs.inputType.email
				}).then(result => {
					if(`${result.result}`){
						this.liste_items.push({
							id:this.liste_items.length+1,
							name:`${result.text}`,
							buy:false,
						})
					}
				  console.log(`Dialog result: ${result.result}, text: ${result.text}`)
				});
 			 }
		}

	};
</script>

<style>
.swipe-label {
	float: right;
}
.item {
	font-size: 18px;
}
</style>