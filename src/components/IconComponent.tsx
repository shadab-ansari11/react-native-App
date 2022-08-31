
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CartIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/FontAwesome';

export interface Iconprops {
    userIcons?: string;
    lockIcons?: string;
    IconsName?:any;
    IConPress: () => void;

}

function IconComponent(props: Iconprops) {
    const { userIcons, lockIcons,IconsName,IConPress} = props;
    return (
        <View style={styles.container}> 
            <View>
                <CartIcon onPress={IConPress} style={{marginTop:7.7,fontSize:18}}  name={IconsName}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
 },
});


export default IconComponent;
