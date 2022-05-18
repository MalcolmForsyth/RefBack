import React from 'react';
import {Text, View} from 'react-native';
import { styles } from '../constants/styles';
import {TouchableOpacity} from 'react-native';

// import { navigationProps } from "../constants/types";

export default class TopBar extends React.Component<any> {
    toggleDrawer = () => {
        console.log(typeof(this.props))
        this.props.navigation.toggleDrawer();
    }
    
    render() {
        return (
            <View style={{ flexDirection: 'row',height:50,backgroundColor: '#2EB6AE'} }>
              <TouchableOpacity 
                 style={{marginLeft:10,alignContent:'center',alignSelf:'center'}}
                 onPress={()=>{
                  //this.props.navigation.navigate('DrawerOpen');
                   this.props.navigation.openDrawer(); 
                }}
                  >
                {/* <Image
                 source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
                 style={{ width: 25, height: 25, marginLeft: 5 }}
                /> */}
      
              </TouchableOpacity>
              <Text 
              style = {{color: 'blue',alignContent:'center',alignSelf:'center',marginLeft:20,}}>
                  {this.props.showName}
              </Text>
              
            </View>
          );
    }
}