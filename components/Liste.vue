<template>
<view class="container">
  	<text class="title">{{ title }}</text>
  	<view class="input_container">
  		<text-input class="input" v-model="newListItemText"/>
  		<touchable-opacity class ="add_btn" :on-press="newListItem">
  			<text class="btn_txt">Ajouter</text>
  		</touchable-opacity>
  	</view>
  	<view class="list_item"  v-for="listitem in listitems":key="listitem.id"> 
  		<touchable-opacity :on-press="() => toggleDone(listitem.id)">
  			<text class="list_item_text done" v-if="listitem.done">{{listitem.title}}</text>
  			<text class="list_item_text" v-else>{{listitem.title}}</text>
  		</touchable-opacity>
  		<touchable-opacity  class="rmv_btn" :on-press="() => rmvListItem(listitem.id)">
			<text class="rmv_btn_txt">Retirer</text>
  		</touchable-opacity>
  	</view>
</view>
</template>

<script>
export default {
	data () {
		return {
			newListItemText: '',
			listitems: [
				{
					id: 0,
					title: 'Lait',
					done: false,
				},
				{
					id: 1,
					title: 'Tomates',
					done: false,
				}
			]
		};
	},
	methods: {
		newListItem() {
			this.listitems.push({
				id: this.listitems.length+1,
				title: this.newListItemText,
				done: false
			});
			this.newListItemText = '';
		},
		toggleDone(id) {
			this.listitems = this.listitems.map(todo => {
				if (todo.id == id) todo.done = !todo.done;
				return todo;
			})
		},
		rmvListItem(id) {
			this.listitems = this.listitems.filter(todo => todo.id !== id );
		}
	},
	props: ['title']

};
</script>

<style>
.input_container {
	background-color: #F8F1FF;
	flex-direction: row;
	justify-content: center;
	align-items: stretch;
}
.input {
	background-color: #F8F1FF;
	flex: 1;
	height: 30px;
	font-size: 18px;
}

.add_btn {
	width: 100px;
	height: 35px;
	justify-content: center;
	align-items: center;
	background-color: #DECDF5;
}
.rmv_btn {
	justify-content: center;
	align-items: center;
}
.btn_txt {
	color: #534D56;
	font-size: 18px;
	font-weight: 700;
}
.rmv_btn_txt {
	color: #994D56;
	font-size: 18px;
	font-weight: 700;
}
.list_item {
	flex-direction: row;
	justify-content: space-between;
	padding: 15px;

}
.list_item_txt {
	font-size: 18px;	
}
.done {
	color: #738290;
}

.title {
	textAlign: center;
	background-color: #656176;
	color: #F8F1FF;
	font-size: 18px;

}
</style>
