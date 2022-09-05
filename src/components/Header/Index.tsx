
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import ShopingIcon from 'react-native-vector-icons/FontAwesome';

export interface Headerprops {
    backIcon?: any;
    backIconStyle?:any;
    titleText?: string;
    titleTextStyle?: any;
    shopingIcon?: any;
    shopingStyle?: any;
    backonPress: () => void;
    shopingOnPress: () => void;
}

export function Header(props: Headerprops) {
    const { backIcon, titleText, shopingIcon,backonPress,shopingOnPress,backIconStyle,shopingStyle,titleTextStyle } = props;
    return (
        <>
            <View style={styles.container}>
                <View style={styles.nextView}>
                    <TouchableOpacity onPress={backonPress}>
                        <BackIcon name={backIcon || ""} style={backIconStyle}/>
                    </TouchableOpacity>
                    <View>
                        <Text style={titleTextStyle}>{titleText}</Text>
                    </View>
                    <TouchableOpacity onPress={shopingOnPress}>
                        <ShopingIcon name={shopingIcon || ""} style={shopingStyle}/>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 10,
    },
    nextView: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        marginHorizontal: 25
    },
   
});


