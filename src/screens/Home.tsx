import React from "react";
import {View, Button} from 'react-native';
import { styles } from '../constants/styles';
import { Props } from "../constants/types";
import NavBar from "../components/TopBar";

export default class Home extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <NavBar> </NavBar>
                </View>
                <Button
                    title="login"
                    onPress={() =>
                    this.props.navigation.navigate('Login')}
                    />
            </View>
        );
    }
}
