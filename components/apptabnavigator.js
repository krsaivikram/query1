import React  from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from  'react-navigation-tabs'
import Donatescreen from '../screens/donatescreen'
import Requestscreen from '../screens/requestscreen'


export const AppTabNavigator = createBottomTabNavigator({
    donatescreen:{screen:Donatescreen,
        navigationOptions:{
        tabBarIcon : <Image source={require("../assets/images.jpg")} style={{width:25,height:25}}/>,
        tabBarLabel : "Donate"
    }},
    requestscreen:{screen:Requestscreen,
        navigationOptions:{
        tabBarIcon : <Image source={require("../assets/needy.png")} style={{width:25,height:25}}/>,
        tabBarLabel : "Request"
    }},

})