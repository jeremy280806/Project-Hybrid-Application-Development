import React from 'react';  
import {NagivationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';

export default function App() {
    return ( 
        <NagivationContainer>
            <AppNavigator />
        </NagivationContainer>
    );
}