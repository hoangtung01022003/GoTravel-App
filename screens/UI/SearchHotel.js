import { React, useEffect } from 'react';
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
} from 'react-native';

// import {color, fontSize, images } from "../constain";
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import { COLORS, color, places, images, fontSize, voucher } from '../../constain';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState } from 'react';
import moment from 'moment/moment';
import { useCallback } from 'react';

const { width, height } = Dimensions.get('window');
const SearchHotel = ({ navigation, route }) => {
    //search
    const [selectedItem, setSelectedItem] = useState('');
    const handleSearch = (item) => {
        navigation.navigate('SearchHotel', { handleResultPress: item });
    };

    //

    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('')
    const [isOpenListSearch, setIsOpenListSearch] = useState(false)
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState({
        startDate: '',
        endDate: '',
    });
    const formattedStartDay = selectedDate.startDate ? moment(selectedDate.startDate).format('DD-MM-YYYY') : '';
    const formattedEndDay = selectedDate.endDate ? moment(selectedDate.endDate).format('DD-MM-YYYY') : '';
    const handleResultPress = (item) => {
        setSelectedItem(item.name);
        setIsOpenSearch(false)
    };

    const listleResultPress = (item) => {
        setSelectedItem(item.name);
        setIsOpenSearch(false)
    };
    const cancer = (item) => {
        setSelectedItem(item.name);
        setIsOpenListSearch(false)
    };

    const selectDate = (day) => {
        const startDate = new Date(selectedDate.startDate);
        const endDate = new Date(day.dateString);
        const range = {
            startDate: selectedDate.startDate,
            endDate: day.dateString,
        };
        // Hoán đổi ngày nếu ngày bắt đầu lớn hơn ngày kết thúc

        if (startDate.getTime() > endDate.getTime()) {
            range.startDate = day.dateString;
            range.endDate = selectedDate.startDate;
        }

        // Đánh dấu tất cả các ngày trong khoảng thời gian được chọn
        const markedDates = {};
        const currentDate = new Date(range.startDate);
        while (currentDate <= new Date(range.endDate)) {
            const dateString = currentDate.toISOString().slice(0, 10);
            markedDates[dateString] = {
                selected: true,
                color: 'white',
                textColor: 'red',
            };
            currentDate.setDate(currentDate.getDate() + 1);
        }
        setSelectedDate(range);
        // const selectedDate = range.startDate;
        // selectedDate = day.dateString.split('T')[0];
        // onDateSelect(selectedDate);
        return markedDates;
    }


    const Card = useCallback(({ place }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailsScreen', place)}>
                <ImageBackground style={{
                    height: 220,
                    width: width / 2,
                    marginRight: 20,
                    padding: 10,
                    overflow: 'hidden',
                    borderRadius: 10,
                }} source={place.image}>
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
    }, [navigation])
    const CardVoucher = useCallback(
        ({ vouchers, index }) => {
            // console.log(voucher.name)
            return (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        margin: 10,
                        height: 100,
                        width: 250,
                        borderRadius: 10,
                        backgroundColor: COLORS.white,
                        // marginRight: index = 0 ? 0 : 20,
                        elevation: 5,
                        borderLeftWidth: 4,
                        borderColor: color.button
                    }}>
                    <View style={{
                        top: 2,
                        left: 10,
                        flexDirection: 'row',
                    }}>
                        <Text style={{
                            alignItems: 'center',
                            fontSize: fontSize.h5,
                            color: COLORS.dark,
                            fontWeight: '400',
                        }}>
                            Nhập mã
                        </Text>
                        <Text style={{
                            fontSize: fontSize.h6,
                            padding: 2,
                            marginLeft: 5,
                            borderRadius: 5,
                            color: COLORS.white,
                            backgroundColor: color.button
                        }}>{vouchers.name}</Text>
                    </View>
                    <View style={{
                        top: 2,
                        left: 10,
                        // flexDirection: 'row',
                        top: 10
                    }}>
                        <Text style={{
                            alignItems: 'center',
                            fontSize: fontSize.h5,
                            fontWeight: '500',
                            color: color.black
                        }}>
                            Khách sạn giảm giá đến {vouchers.price}k
                        </Text>
                        <Text style={{
                            top: 15,
                            fontSize: fontSize.h5,
                        }}>
                            Hạn sử dụng: {vouchers.expiry}
                        </Text>
                    </View>

                </TouchableOpacity>
            )
        }, [])

    const Search = useCallback(() => {
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
                    <Icon name="search" size={28} style={{ marginHorizontal: 10 }} />
                    <TextInput
                        placeholder="Search Here"
                        onChangeText={(text) => {
                            setSearchText(text)
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
                            activeOpacity={0.8}
                            style={{
                                paddingLeft: 20,
                                top: 25,
                                height: 50,
                                // justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                                color: COLORS.dark,
                                paddingBottom: 10,
                                fontSize: fontSize.h4,

                            }}>
                                {item.name == null ? console.log(item.name) : item.name}
                            </Text>
                        </TouchableOpacity>

                    )}
                />
            </View>
        )
    }, [searchText, handleResultPress, selectedItem, places])
    //List tìm kiếm
    const ListHotel = useCallback(() => {
        return (
            <View style={{
                height: "100%",
                backgroundColor: "white"
            }}>
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                    <Icon
                        name="arrow-back-ios"
                        size={28}
                        onPress={(item) => cancer(item)}
                        color={COLORS.dark}
                    />
                    <TextInput
                        placeholder="Search Here"
                        onChangeText={(text) => {
                            setSearchText(text)
                        }}

                        value={selectedItem}
                        style={{ color: COLORS.dark, fontSize: fontSize.h3, top: -10 }}
                    />
                    <Icon name="more-vert" size={28} color={COLORS.dark} />
                </View>
                <View style={{ height: 1, backgroundColor: color.button }} />

                <FlatList
                    data={places.filter(eachPlace => eachPlace.name.toLowerCase().includes(searchText.toLowerCase()))}
                    style={{
                        top: 20
                    }}
                    renderItem={({ item }) => (
                        <View style={{

                        }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('DetailsScreen', item, item.selectedDate,)}
                                activeOpacity={0.8}
                                style={{
                                    paddingLeft: 20,
                                    // top: 25,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingTop: 10,
                                }}
                            >
                                <ImageBackground style={{
                                    height: 140,
                                    width: width - 40,
                                    marginRight: 20,
                                    padding: 10,
                                    overflow: 'hidden',
                                    borderRadius: 10,
                                }} source={item.image}>
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            marginTop: 10,
                                        }}>
                                        {item.name}
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
                                                {item.location}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="star" size={20} color={COLORS.white} />
                                            <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                    )}
                />
            </View>
        )
    }, [searchText, listleResultPress, selectedItem, places])
    return <View style={{
        flex: 1
    }}>
        <ScrollView showsVerticalScrollIndicator={false}
        >
            <View style={{

            }}>
                <ImageBackground
                    source={images.location1}
                    resizeMode='stretch'
                    style={{
                        width,
                        height: 160
                    }}>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                    }}>
                        <Icon
                            name="arrow-back-ios"
                            size={28}
                            color={COLORS.white}
                            onPress={navigation.goBack}
                        />
                        <Icon name="more-vert" size={28} color={COLORS.white} />
                    </View>
                </ImageBackground>
            </View>
            <View style={{ height: 40, backgroundColor: COLORS.white }} />
            <View style={{
                marginHorizontal: 10,
                top: -60,
            }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setIsOpenSearch(!isOpenSearch)}
                    style={{
                        height: 60,
                        backgroundColor: COLORS.white,
                        borderTopStartRadius: 10,
                        borderTopEndRadius: 10,
                        flexDirection: 'row',
                        // marginHorizontal: 10,
                        alignItems: 'center',
                    }}>
                    <Icon name="search" size={28} style={{ marginHorizontal: 10 }} />
                    <TextInput
                        placeholder="Search Here"
                        onChangeText={(text) => setSearchText(text)}
                        value={selectedItem}
                        style={{ color: COLORS.dark }}
                    />
                </TouchableOpacity>
                <View height={1} />

                <View height={1} />
            </View>
            <View style={{
                top: -60,
                borderTopStartRadius: 10,
                borderTopEndRadius: 10,
            }}>

                <View height={1} />
                <View style={{
                    flexDirection: 'row',
                    height: 60,
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: 'center'
                        }}
                        onPress={() => setIsOpen(!isOpen)}
                    >
                        <IconOcticons name='calendar' size={20} style={{ marginRight: 5 }} />
                        <Text style={{
                            fontFamily: "Roboto",
                            color: color.black,
                            fontSize: fontSize.h2,
                            fontWeight: fontSize.fontWeight
                        }}>{formattedStartDay}</Text>
                        <IconOcticons name='arrow-right' size={20} marginHorizontal={20} />
                        <Text style={{
                            fontFamily: "Roboto",
                            color: color.black,
                            fontSize: fontSize.h2,
                            fontWeight: fontSize.fontWeight
                        }}>{formattedEndDay}</Text>
                    </TouchableOpacity>
                </View>
                <View height={1} />
                <View style={{
                    backgroundColor: COLORS.white,
                    height: 33,
                    flexDirection: "row",
                    paddingLeft: 21
                }}>
                    <IconOcticons name='people' size={20} style={{
                        alignSelf: 'center',
                    }} />
                    <Text style={{ alignSelf: 'center', color: color.black }}><Text style={{ fontWeight: fontSize.fontWeight, color: color.black }}> 1 </Text> phòng - <Text style={{ fontWeight: fontSize.fontWeight, color: color.black }}> 2 </Text> người lớn -  <Text style={{ fontWeight: fontSize.fontWeight, color: color.black }}> 0 </Text> trẻ em</Text>


                </View>
                <View height={1} />
                <View style={{
                    paddingHorizontal: 20,
                    width: "100%",
                    height: 70,
                    justifyContent: 'center',
                    backgroundColor: COLORS.white,
                    alignSelf: 'center',
                    // top: 40
                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setIsOpenListSearch(!isOpenListSearch)}
                    >
                        <Text
                            style={{
                                padding: 15,
                                textAlign: "center",
                                fontSize: fontSize.h5,
                                backgroundColor: color.button,
                                color: 'white',
                                fontWeight: fontSize.fontWeight,
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: color.button,
                            }}>
                            Tìm kiếm
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: COLORS.white,
                    top: 10,
                    padding: 10
                }}>
                    <Text style={{ fontSize: fontSize.h3 + 1, fontWeight: '400', color: color.black }}>Mã giảm giá</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{

                        }}
                        data={voucher}

                        renderItem={({ item, index }) => <CardVoucher vouchers={item} />}
                    />
                </View>
                <View style={{
                    backgroundColor: "#fff5f7",
                    height: 300,
                }}>
                    <View style={{
                        marginHorizontal: 20
                    }}>
                        <Text style={{
                            fontSize: fontSize.h3,
                            fontWeight: '500',
                            color: COLORS.dark,
                            paddingTop: 15,
                            paddingBottom: 15
                        }}>
                            Gợi ý cho bạn
                        </Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{

                            }}
                            data={places}

                            renderItem={({ item, index }) => <Card place={item} />}
                        />

                    </View>
                </View>
            </View>

        </ScrollView>
        {isOpenSearch && Search()
        }
        {isOpenListSearch && ListHotel()
        }
        {isOpen && <Calendar
            style={{
                marginHorizontal: 10
            }}
            markingType={'period'}
            markedDates={{
                [selectedDate.startDate]: {
                    selected: true,
                    startingDay: true,
                    color: color.button,
                    dotColor: "translucent",
                    textColor: 'white',
                },
                [selectedDate.endDate]: {
                    selected: true,
                    endingDay: true,
                    color: color.button,
                    textColor: 'white',
                },
                ...selectDate,
            }}
            onDayPress={(day) => {
                // setSelectedDate(day.dateString);
                // setIsOpen(false)
                if (!selectedDate.startDate || selectedDate.endDate) {
                    // Chọn ngày đầu tiên
                    setSelectedDate({
                        startDate: day.dateString,
                        endDate: '',
                    });
                }
                else {
                    // Chọn ngày kết thúc
                    const startDate = new Date(selectedDate.startDate);
                    const endDate = new Date(day.dateString);
                    const range = {
                        startDate: selectedDate.startDate,
                        endDate: day.dateString,
                    };

                    if (startDate.getTime() > endDate.getTime()) {
                        // Hoán đổi ngày nếu ngày bắt đầu lớn hơn ngày kết thúc
                        range.startDate = day.dateString;
                        range.endDate = selectedDate.startDate;
                    }
                    setIsOpen(!isOpen)
                    setSelectedDate(range);
                }
            }
            }
        />
        }


    </View>
}
export default SearchHotel