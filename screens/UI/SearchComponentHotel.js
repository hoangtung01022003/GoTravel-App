import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, color, places, images, fontSize, voucher } from '../../constain';
const SearchComponentHotel = ({ navigation }) => {
    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const handleSearch = (item) => {
        navigation.navigate('SearchHotel', { handleResultPress: item});
    };
    // console.log(selectedItem)
    const handleResultPress = (item) => {
        setSelectedItem(item.name);
    };
    // console.log(selectedItem)
    return (
        <View style={{
            height: "100%",
            backgroundColor: "white"
        }}>
            <View style={{
                height: 50,
                backgroundColor: COLORS.white,
                borderTopStartRadius: 10,
                borderTopEndRadius: 10,
                flexDirection: 'row',
                // marginHorizontal: 10,
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 0.2,
                marginHorizontal: 20,
                top: 20
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SearchHotel', { selectedItem })}
                >
                    <Icon name="search" size={28} style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Search Here"
                    onChangeText={(text) => {
                        setSearchText(text)
                        // setSearchResults(!searchResults)
                        // onResultPress(setSearchText)
                    }}

                    value={selectedItem}
                    style={{ color: COLORS.dark }}
                />
            </View>
            <FlatList
                data={places.filter(eachPlace => eachPlace.name.toLowerCase().includes(searchText.toLowerCase()))}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleResultPress(item)}
                        // onPress={() => navigation.navigate('SearchHotel', {selectedItem})}
                        activeOpacity={0.8}
                        style={{
                            paddingLeft: 20,
                            top: 25,
                            height: 50,
                            // justifyContent: 'center'
                        }}>
                        <Text style={{
                            color: COLORS.dark,
                            paddingBottom: 10,
                            fontSize: fontSize.h4,

                        }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
export default SearchComponentHotel;