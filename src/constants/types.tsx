import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {NavigationScreenProp } from 'react-navigation';

export interface navigationProps {
    navigation: NavigationScreenProp<any,any>
};

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Settings: undefined;
}

export type Props = NativeStackScreenProps<RootStackParamList>;

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;