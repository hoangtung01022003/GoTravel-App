import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {
  auth,
  onAuthStateChanged,
  firebaseDatabaseRef,
  firebaseSet,
  firebaseDatabase
} from '../../firebase/Firebase';
// import {color, fontSize, images } from "../constain";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, color, places, images, fontSize } from '../../constain';
import axios from '../../axios.config';
import Loadding from '../../component/Loadding';
import { useState, useEffect } from 'react';
import OrderHotel from "../Order/OrderHotel"
// const { width } = Dimensions.get('screen');
const { width, height } = Dimensions.get('window');
const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  //lấy dữ liệu hotel
  const [hotelName, setHotelName] = useState('')
  // useEffect(() => {
  //   axios.get('/')
  //     .then(res => {
  //       setData(res.data)
  //       setLoading(false)
  //     })
  //     .catch(error => {
  //       Alert.alert(error.message)
  //     })

  //   // fetchUserInfo();
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     const hotelName = await AsyncStorage.getItem('hotel_name')
  //     setHotelName(hotelName)
  //   })()
  // }, [])
  // const []
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       //signed in
  //       const userId = user.uid
  //       //save data to Firebase
  //       firebaseSet(firebaseDatabaseRef(
  //         firebaseDatabase,
  //         `users/${userId}`
  //       ), {
  //         email: user.email,
  //         emailVerified: user.emailVerified,
  //         accessToken: user.accessToken
  //       })
  //       navigation.navigate('Home')
  //     }
  //     else {
  //       //signout
  //     }
  //   })
  // })
  // useEffect(() => {
  //   try {
  //     const response = await axios.get('http://your-laravel-api-endpoint.com/user-info');
  //     const { name } = response.data;
  //     setName(name);
  //   } catch (error) {
  //     console.log('Error:', error.message);
  //   }
  // })

  const [isOpen, setIsOpen] = useState(false)
  const categoryIcons = [
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchHotel')}
    >
      <Icon name="location-city" size={25} color={color.button} style={{ alignSelf: 'center' }} />
      <Text style={{
        color: 'black',
        fontWeight: '500',
        fontSize: fontSize.h6
      }}>Khách sạn</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchHotel')}
    >
      <Icon name="beach-access" size={25} color={color.button} style={{ alignSelf: 'center' }} />
      <Text style={{
        color: 'black',
        fontWeight: '500',
        fontSize: fontSize.h6
      }}>Chuyến bay</Text>
    </TouchableOpacity>,
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchHotel')}
    >
      <Icon name="near-me" size={25} color={color.button} style={{ alignSelf: 'center' }} />
      <Text style={{
        color: 'black',
        fontWeight: '500',
        fontSize: fontSize.h6
      }}>Đường đi</Text>
    </TouchableOpacity>,
    <TouchableOpacity
    >
      <Icon name="place" size={25} color={color.button} style={{ alignSelf: 'center' }} />
      <Text style={{
        color: 'black',
        fontWeight: '500',
        fontSize: fontSize.h6
      }}>Lịch sử</Text>
    </TouchableOpacity>,
  ];
  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', place)}>
        <ImageBackground style={style.cardImage} source={place.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({ place }) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="place" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
          <Text style={{ color: COLORS.white, fontSize: 13 }}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };
  // if (loading) {
  //   return <Loadding />
  // }
  // else {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: color.button,
            height: 150,
            paddingHorizontal: 20,
          }}>
          <View style={{ flex: 1 }}>
            <View style={{

              justifyContent: 'space-evenly',
              alignItems: 'center',

            }}>
              <Image
                source={images.slide2}
                resizeMode="contain"
                style={{ width }} />
            </View>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{ color: COLORS.grey }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={style.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) =><Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.button,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 140,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 70,
    justifyContent: 'center',
    // backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});
export default HomeScreen;
