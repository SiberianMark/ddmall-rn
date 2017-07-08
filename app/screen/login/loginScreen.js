/**
 * Created by JM on 2017/7/8
 * Function:登录视图
 * Desc:
 */
import React,{Component} from "react";
import {
	Image,
	Text,
	View,
	WebView,
	TextInput,
	Button
} from "react-native";
import Styles from "./loginStyle"

export default class loginScreen extends Component{
	render(){
		return (
			<View style={Styles.view_Container}>
				
				<View>
					<TextInput style={Styles.TextInput} placeholder="账户"></TextInput>
					<TextInput style={Styles.TextInput} placeholder="密码" password={true}></TextInput>
				</View>
				<Button 
					style={Styles.Button}
					onPress={this.onPressLogin} 
					title="登录"
				/>
				<View style={Styles.moreMenu}>
					<Text>注册</Text>
					<Text>忘记密码</Text>
				</View>	
			</View>
		)

	}
	onPressLogin(){
		alert("press success");
	}
}