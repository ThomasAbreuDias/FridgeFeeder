<template>
	<Page >
		<ActionBar  title="Fridge Feeder" backgroundColor="#FE9D95">
	    	<Label :text="title"></Label>
	    </ActionBar>
		<AbsoluteLayout>
	      <RadListView ref="listView"
	                   for="item in liste_items"
	                   swipeActions="true"
	                   @itemSwipeProgressStarted="onSwipeStarted"
	                   @itemTap="onItemTap"
	                   >
	        <v-template>
	          <StackLayout class="item" orientation="vertical" >

	            <Label :text="item.name" class="nameLabel buy" v-if="item.buy"/>
	            <Label :text="item.name" class="nameLabel" v-else />
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
	import { ObservableArray } from 'tns-core-modules/data/observable-array';
	const dialogs = require('tns-core-modules/ui/dialogs');
	const l_i = require('../data').liste_items;
	
	export default {
		props: ['title'],
		data() {
			return {
				liste_items: new ObservableArray(l_i),
			};
		},
		methods: {
			onItemTap(ev) {
				this.liste_items = this.liste_items.map(listitem => {
				if (listitem.id == ev.item.id) listitem.buy = !listitem.buy;
				return listitem;
			})
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
				  title: "Un nouvel article ?",
				  message: "Ajouter votre article:",
				  okButtonText: "OK",
				  cancelButtonText: "Annuler",
				  cancelable: true,
				  defaultText: "S.Pellegrino",
				  inputType: dialogs.inputType.text
				}).then(result => {
					if(`${result.result}` == 'true'){
						this.liste_items.push({
							id:this.liste_items.length,
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
	padding-left: 330;
	font-size: 23;
}
.item {
	font-size: 18px;
	background-color:#534D56;
}
.btn {
	width: 60;
	height: 60;
	border-radius: 28;
	vertical-align: center;
	
}
.add-label {
	font-size: 20;
	color: #534D56;
}
.buy {
	text-decoration: line-through;
}
</style>