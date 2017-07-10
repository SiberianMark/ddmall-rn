import {StyleSheet} from 'react-native';
import {colors} from '../../common/colors'


var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default StyleSheet.create({
	view_Container:{
		flex:1,
		justifyContent:'space-between'
	},
	Image:{
		marginTop: 100,
		width:70,
		height:70,
		borderRadius:40,
		alignSelf:'center'
	},
	TextInput:{
		marginTop:20,
		textAlign:'center',
		borderBottomWidth:1,
		borderBottomColor:'#aaa'



	},
	loginBtn:{
		width:width*0.9,
		height:35,
		marginTop:30,
		borderRadius:8,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#1E90FF',
		alignSelf:'center'
	},
	moreMenu:{
		width:width*0.9,
		flexDirection:'row',
		justifyContent:'space-between',
		alignSelf:'center',
		marginTop:10
	},
	otherLogin:{
		flexDirection:'row',
		alignItems:'center',
		marginBottom:20,
		marginLeft:20
	},
	otherImges:{
		borderRadius:40,
		width:34,
		height:34,
		marginLeft:5
	}

})