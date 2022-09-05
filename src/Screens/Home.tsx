import React from 'react'
import { View, Text, Button, ImageBackground, Dimensions, StyleSheet, Alert, FlatList } from 'react-native'
import { Header } from '../components/Header/Index';
import { SearchComp } from '../components/Searchbar/Index';
import { ListHome } from './ListHome/Index';

export default function Home({ navigation }) {
  const data = [
    {
      text: 'hello'
    }
  ]
  return (
    <>
      {/* <ImageBackground source={require('../../assets/backgroundImg/imgback.png')} style={styles.backgroundIMG}> */}
        <View >
          <Header
            backIcon={
              // md-chevron-back
              false
            }
            shopingIcon='shopping-cart'
            titleText='Food Delivery'
            titleTextStyle={styles.titleText}
            backonPress={() => false}
            shopingOnPress={() => Alert.alert('shoping')}
            backIconStyle={styles.backIcon} shopingStyle={styles.shopingIcon} />
        </View>
        <View style={styles.serachView}>
          <SearchComp placeholder='search' searcStyle={styles.serach} />
        </View>

        <View style={{flex:1}}>
        <ListHome />
        </View>
      {/* </ImageBackground> */}
    </>
  )
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  backgroundIMG: {
    width: (windowWidth / 100) * 100,
    height: (windowHeight / 100) * 100,
  },
  serachView: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  serach: {
    width: (windowWidth / 100) * 75,
    height: (windowHeight / 100) * 5,
    borderRadius: 50,
    paddingVertical: 0
  },
  backIcon: {
    fontSize: 25,
  },
  shopingIcon: {
    fontSize: 25,
    color: '#3399ff'
  },
  titleText: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold'
  },
  homelistView:{
    flex:1,
  },
  mainView:{
    backgroundColor:"#fff",
    width: (windowWidth / 100) * 80,
    justifyContent:'center',
    alignItems:'center'

  }
})
