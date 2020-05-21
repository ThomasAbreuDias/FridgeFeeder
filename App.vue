<template>
  <view class="container">
  	<Statusbar color="#DECDF5"/>
  	<Header title="Fridge Feeder"/>
  	<Liste v-for="liste in listes":key="liste.id" :title="liste.title"/>

  	<text-input class="input" v-model="newListText"/>
  	<touchable-opacity class ="add_btn" :on-press="newList">
  		<text class="btn_txt">Nouvelle liste</text>
  	</touchable-opacity>
  </view>
</template>

<script>
	import Statusbar from './components/Statusbar';
	import Header from './components/Header';
	import Liste from './components/Liste';
export default {
	data () {
		return {
			newListText: '',
			listes: [
				{
					id: 0,
					title: 'Liste pour le 15/05/2020',
				},
				{
					id: 1,
					title: 'Liste pour le 25/07/2020',
				}
			]
		};
	},
	components: {
	    Statusbar, 
	    Header,
	    Liste
	},
	methods: {
		newList() {
			this.listes.push({
				id: this.listes.length+1,
				title: this.newListText,
			});
			this.newListText = '';
		}
	}
};
</script>

<style>
	.container {
	 	background-color: white;
	 	flex: 1;
	}
	.add_btn {
		width: 150px;
		height: 35px;
		justify-content: center;
		align-items: center;
		background-color: #DECDF5;
	}
	.btn_txt {
		color: #534D56;
		font-size: 18px;
		font-weight: 700;
	}
	.input {
		background-color: #F8F1FF;
		height: 30px;
		font-size: 18px;
	}
</style>
