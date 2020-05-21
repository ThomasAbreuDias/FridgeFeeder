<template>
	<view class="container">
		<Statusbar color="#DECDF5"/>
		<Header title="Fridge Feeder"/>
		<ScrollView orientation="horizontal">
			<Liste class="container" v-for="liste in listes":key="liste.id" :title="liste.title">
				<touchable-opacity class ="rmv_btn" :on-press="() => rmvListItem(liste.id)">
					<text class="btn_txt">Supprimer liste</text>
				</touchable-opacity>
			</Liste>
			<view>
				<text-input class="input" v-model="newListText"/>
				<touchable-opacity class ="add_btn" :on-press="newListe">
					<text class="btn_txt">Nouvelle liste</text>
				</touchable-opacity>  	

			</view>
		</ScrollView>
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
		newListe() {
			this.listes.push({
				id: this.listes.length+1,
				title: this.newListText,
			});
			alert(this.title);
			this.newListText = '';
		},
				rmvListe(id) {
			this.listes = this.listes.filter(liste => liste.id !== id );
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
		background-color: #FFE1FF;
		height: 30px;
		font-size: 18px;
	}
</style>
