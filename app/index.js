/*
**应用的入口文件，完成app的启动相关操作以及配置
**在安卓端运行则在index.android.js引入
**在ios端则在index.ios.js引入
 */

// 引入基础组件
import {AppRegistry} from 'react-native';
// import {StackNavigator} from 'react-navigation';//使用导航器跳转页面

import loginScreen from './screen/login/loginScreen';


// const App = StackNavigator({
// 	Main:{screen:loginScreen}
// });

AppRegistry.registerComponent('ddmall',()=>loginScreen)