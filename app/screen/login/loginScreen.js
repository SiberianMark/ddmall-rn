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
	Button,
	TouchableHighlight,
	TouchableOpacity 
} from "react-native";
import Styles from "./loginStyle"

export default class loginScreen extends Component{
	render(){
		return (
			<View style={Styles.view_Container}>
				<View style={Styles.viewLogin}>
					<Image style={Styles.Image} source={require('./img/icon.png')}></Image>
					<View>
						{/*input默认样式无法修改，跟button一样,password属性无效*/}
						<TextInput style={Styles.TextInput} underlineColorAndroid="transparent" placeholder={"账户"} />
						<TextInput style={Styles.TextInput} underlineColorAndroid="transparent" placeholder={"密码"} secureTextEntry={true} />
					</View>
					<TouchableOpacity onPress={this.onPressLogin}>
						<View style={Styles.loginBtn}><Text style={{color:'#fff'}}>登录</Text></View>
					</TouchableOpacity>
					<View style={Styles.moreMenu}>
						<TouchableOpacity onPress={this.onPressRegist}><Text>注册</Text></TouchableOpacity>
						<TouchableOpacity onPress={this.onPressFindPsw}><Text>忘记密码</Text></TouchableOpacity>
					</View>
				</View>	
				<View style={Styles.otherLogin}>
						<Text>其他登录方式</Text>
						<Image style={Styles.otherImges} source={require('./img/icon3.png')}></Image>
						<Image style={Styles.otherImges} source={require('./img/icon7.png')}></Image>
						<Image style={Styles.otherImges} source={require('./img/icon8.png')}></Image>
				</View>
			</View>
		)

	}
	onPressLogin(){
		alert("press success");
	}
	onPressRegist(){
		alert("press regist");
	}
	onPressFindPsw(){
		alert("press findPsw");
	}
}