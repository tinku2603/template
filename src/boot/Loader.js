/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import { StyleProvider } from "native-base";


const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const Loader = ({ size }) => {
    return(
        <StyleProvider style={getTheme(variables)}>
        <View style={styles.loader}>
            <ActivityIndicator size={size || 'small'} />
        </View> 
        </StyleProvider>       
        );
};

export default Loader;