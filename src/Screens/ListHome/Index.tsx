
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image'

export function ListHome() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.mainView}>
                    <View style={styles.listView}>
                      <View>
                      <FastImage
                            style={{ width: (windowWidth / 100) * 40, height: (windowHeight / 100) * 19,margin:5 }}
                            source={{
                                uri: 'https://unsplash.it/400/400?image=1',
                            }}
                        />
                      </View>
                    <View style={{flexDirection:'column',marginTop:25}}>
                    <View>
                        <Text numberOfLines={2} style={{width:'80%',fontSize:15,color:'#000'}}>Salmon With vegetables in soy Sause</Text>
                      </View>
                      <View style={{marginTop:25}}>
                        <Text style={{fontSize:20,color:'#000'}}>
                            $30.00
                        </Text>
                      </View>
                    </View>
                    
                    </View>
                </View>
            </View>
        </>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainView: {
        width: (windowWidth / 100) * 90,
        height: (windowHeight / 100) * 20,
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 1.0,
        shadowRadius: 5,
      },
      listView:{
        flexDirection:'row',

      }
});


