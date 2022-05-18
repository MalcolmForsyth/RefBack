import React from "react";
import {View, Button} from 'react-native';
import { styles } from '../constants/styles';
import { Props } from "../constants/types";

export default class Login extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="frontpage"
                    onPress={() =>
                    this.props.navigation.navigate('Home')}
                    />
            </View>
        );
    }
}

