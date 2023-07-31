import React, { useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Fontisto'
import IconOcticons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment/moment';
import { useCallback } from 'react';
import { COLORS, color, places, images, fontSize, voucher } from '../../constain';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { isValidEmail, isValidName, isValidPhone } from '../../utilies/Validation';
import { firebaseDatabase, firebaseDatabaseRef, firebaseSet } from '../../firebase/Firebase';

const OrderHotel = ({ navigation, route }) => {
    const place = route.params;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorphone, setErrorPhone] = useState('');
    const [visible, setVisible] = useState('')
    const isValidiattionOK = () => name.length > 0 &&
        email.length > 0 &&
        name.length > 0 &&
        phone.length &&
        selectDate.length > 0 &&
        isValidName(name) == true &&
        isValidEmail(email) == true &&
        isValidPhone(phone) == true;
    // console.log(selectedDate);
    // const orderHistory = route.params.orderHistory;
    // // console.log(orderHistory);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState({
        startDate: '',
        endDate: '',
    });
    //tách ngày
    // state = {
    //     totalDays: 0,
    //   };

    //   handleDateSelect = (date) => {
    //     const selectedDate = moment(date .dateString);
    //     const currentDate = moment();

    //     const totalDays = selectedDate.diff(currentDate, 'days');

    //     this.setState({
    //       selectedDate: selectedDate.format('YYYY-MM-DD'),
    //       totalDays,
    //     });
    //   };
    //   //
    const formattedStartDay = selectedDate.startDate ? moment(selectedDate.startDate).format('DD-MM-YYYY') : '';
    const formattedEndDay = selectedDate.endDate ? moment(selectedDate.endDate).format('DD-MM-YYYY') : '';


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
    const getMarkedDates = () => {
        const markedDates = {};
        const { startDate, endDate } = selectedDate;

        if (startDate && endDate) {
            const start = moment(startDate);
            const end = moment(endDate);
            let currentDate = start.clone();

            while (currentDate.isSameOrBefore(end, 'day')) {
                const dateString = currentDate.format('YYYY-MM-DD');
                markedDates[dateString] = {
                    selected: true,
                    color: 'white',
                    textColor: 'red',
                };
                currentDate.add(1, 'day');
            }
        }

        return markedDates;
    }
    const pricePerDay = 80000;
    const feeVat = pricePerDay / 100 * 10
    const calculateTotalPrice = () => {
        const { startDate, endDate } = selectedDate;
        // Giá tiền mỗi ngày

        if (startDate && endDate) {
            const start = moment(startDate);
            const end = moment(endDate);
            const numberOfDays = end.diff(start, 'days') + 1;
            const totalPrice = (numberOfDays * (pricePerDay + feeVat));
            const day = numberOfDays;

            return { totalPrice, day };
        }

        return { totalPrice: 0, day: 0 }; // Trả về 0 nếu chưa chọn ngày bắt đầu hoặc ngày kết thúc
    };

    //hàm trả về giá trị ngẫu nhiên
    const getRandomValue = () => {
        const min = 1; // Giá trị nhỏ nhất mong muốn
        const max = 100; // Giá trị lớn nhất mong muốn
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomValue;
    };

    // Sử dụng hàm getRandomValue để lấy giá trị ngẫu nhiên
    const id = getRandomValue();
    // Gọi hàm để tính tổng tiền

    const result = calculateTotalPrice();
    const totalPrice = result.totalPrice;
    const day = result.day;

    const formattedPrice = totalPrice.toLocaleString();
    const formattedPiceDay = pricePerDay.toLocaleString();
    const dataAdd = () => {
        firebaseSet(firebaseDatabaseRef(firebaseDatabase, 'order/'+ id), {
            id: id,
            nameplace: place.name,
            userName: name,
            email: email,
            phone: phone,
            priceDay: formattedPiceDay,
            day: day,
            priceVat: formattedPrice,
        }).then(() => {
            // Thông báo thành công
            Alert.alert(`Đặt phòng thành công`)
            navigation.navigate("Home")
            // Hoặc bạn có thể sử dụng một thư viện thông báo hoặc hiển thị thông báo trên giao diện người dùng
        })
            .catch((error) => {
                // Xử lý lỗi nếu cần
                Alert.alert(`Có lỗi khi thực hiện thanh toán`, error)
            });
        setName('')
        setPhone('')
        setEmail('')
    }

    return (
        <View style={{
            top: 20,
            flex: 100
        }}>
            <View style={{
                flex: 7,
                justifyContent: 'space-evenly',
                alignItems: "center",
                // flexDirection: 'row',
                backgroundColor: COLORS.white,
            }}>

                <TouchableOpacity
                    style={{
                        alignSelf: "flex-start",
                        paddingLeft: 15
                    }} onPress={() => navigation.navigate('Home', place)}>
                    <Icon1 name="arrowleft" size={fontSize.h2} style={{
                        // paddingRight: "50%",
                        color: "black"
                    }} />
                </TouchableOpacity>
                <Text style={{

                    fontSize: fontSize.h4,
                    color: "black",
                    position: "absolute",
                    // position: "relative",
                    // right: 20,
                    fontWeight: fontSize.fontWeight
                }}>
                    Đặt phòng
                </Text>
            </View>
            <View style={{
                flex: 80
            }}>
                <ScrollView>
                    <View style={{ height: 0.3, backgroundColor: color.black }} />

                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            backgroundColor: COLORS.white
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                paddingTop: 15,
                                paddingBottom: 15,
                                justifyContent: "space-between",
                                paddingHorizontal: 15
                                // top: 15

                            }}>
                                <View>
                                    <Text style={{
                                        fontSize: fontSize.h4,
                                        color: 'black',
                                        fontWeight: '600',
                                    }}>
                                        {place.name}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', top: 10 }}>
                                        <Icon1 name='star' color={'#FFBC39'} size={11} />
                                        <Icon1 name='star' color={'#FFBC39'} size={11} />
                                        <Icon1 name='star' color={'#FFBC39'} size={11} />
                                        <Icon1 name='star' color={'#FFBC39'} size={11} />
                                        <Icon1 name='star' color={'#FFBC39'} size={11} />
                                        <Text style={{ left: 10, fontSize: 11 }}>570 lượt đánh giá</Text>
                                    </View>
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate('MapScreen')}
                                    activeOpacity={0.8}
                                    style={{ flexDirection: 'row', alignItems: 'center', top: 20 }}>
                                        <Icon3 name='map-marker-alt' size={20} style={{
                                        }} />
                                        <Text style={{ left: 10, fontSize: fontSize.h5 }}>{place.location}</Text>
                                    </TouchableOpacity>
                                </View>

                                <Image source={place.image} style={{
                                    height: 90,
                                    width: 90,
                                    borderRadius: 10,
                                }} />
                            </View>
                            <View style={{ height: 0.5, backgroundColor: COLORS.dark, marginHorizontal: 20 }} />
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
                                        justifyContent: "center",
                                    }}
                                    onPress={() => setIsOpen(!isOpen)}
                                >
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            right: 30
                                        }}>
                                            <Text style={{
                                                textAlign: 'left'
                                            }}>
                                                Nhận phòng
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Roboto",
                                                color: color.black,
                                                fontSize: fontSize.h4,
                                                fontWeight: fontSize.fontWeight
                                            }}>{formattedStartDay}</Text>
                                        </View>
                                        <IconOcticons name='arrow-right' size={20} marginHorizontal={20} />
                                        <View style={{ left: 30 }}>
                                            <Text style={{
                                                textAlign: 'right'
                                            }}>
                                                Trả phòng
                                            </Text>
                                            <Text style={{
                                                fontFamily: "Roboto",
                                                color: color.black,
                                                fontSize: fontSize.h4,
                                                fontWeight: fontSize.fontWeight
                                            }}>{formattedEndDay}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 5 }} />
                    <View style={{
                        backgroundColor: COLORS.white,
                        paddingBottom: 15,
                        paddingHorizontal: 20
                    }}>
                        <View style={{
                            paddingTop: 15,
                            paddingBottom: 15,
                        }}>
                            <Text style={{
                                fontSize: fontSize.h4,
                                color: 'black',
                                fontWeight: '600',
                            }}>
                                Thông tin phòng
                            </Text>
                            <Text style={{
                                fontSize: fontSize.h5,
                                color: COLORS.dark,
                                fontWeight: '700',
                                top: 5
                            }}>
                                Superior Twin Room
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                                <Ionicons name='md-bed-outline' size={15} style={{
                                }} />
                                <Text style={{ left: 10, fontSize: fontSize.h5, color: COLORS.dark }}> 2 giường đơn</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5, }}>
                                <MaterialCommunityIcons name='silverware-fork-knife' size={15} style={{
                                    color: "#6CC58A"
                                }} />
                                <Text style={{ left: 10, fontSize: fontSize.h5, color: "#6CC58A" }}> Bữa sáng miễn phí</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5, }}>
                                <MaterialCommunityIcons name='lightning-bolt' size={20} style={{
                                    width: 20, height: 20,
                                    left: -3
                                }} />
                                <Text style={{ left: 10, fontSize: fontSize.h5, color: COLORS.dark }}>Xác nhận ngay</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5, }}>
                                <Icon1 name='check' size={20} style={{
                                    color: "#FE5578"
                                }} />
                                <Text style={{ left: 10, fontSize: fontSize.h5, color: "#FE5578" }}>An tâm đặt phòng, GoTravel hỗ trợ xuất hoá đơn nhanh chóng, tiết kiệm thời gian cho bạn.</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                top: 10,
                                backgroundColor: "#f9cfcf",
                                // padding: 10,
                                borderRadius: 10
                            }}>
                                <Icon3 name='map-marker-alt' size={15} style={{
                                    left: 10,
                                }} />
                                <Text style={{ left: 10, fontSize: fontSize.h5, color: COLORS.dark, margin: 10, color: "#FE5578" }}>Đừng bỏ lỡ! Phòng cuối cùng của chúng tôii. Hãy đặt ngay!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 5 }} />
                    <View style={{
                        paddingHorizontal: 15,
                        backgroundColor: COLORS.white,
                        paddingTop: 15,
                        paddingBottom: 70
                    }}>
                        <Text style={{
                            fontSize: fontSize.h4,
                            color: 'black',
                            fontWeight: '600',
                        }}>
                            Thông tin liên hệ
                        </Text>
                        <View>
                            <TextInput
                                placeholder="Họ và tên (ví dụ: NGUYEN VAN A)"
                                onChangeText={text => {
                                    setErrorName(
                                        isValidName(text) == true
                                            ? '' : 'Vui lòng nhập họ tên đầy đủ'
                                    )
                                    setName(text)
                                }}
                                style={{
                                    borderBottomWidth: 0.25,
                                    marginTop: 5,
                                    color: COLORS.dark,
                                    marginBottom: 5,
                                    fontSize: fontSize.h5
                                }}
                            />
                            {errorName && <Text
                                style={{
                                    color: color.error,
                                    fontSize: fontSize.h6,
                                }}>
                                {errorName}
                            </Text>}
                            <TextInput
                                placeholder="Email"
                                onChangeText={text => {
                                    setErrorEmail(
                                        isValidEmail(text) == true
                                            ? '' : 'Email không đúng định dạng'
                                    )
                                    setEmail(text)
                                }}
                                style={{
                                    borderBottomWidth: 0.25,
                                    marginTop: 5,
                                    color: COLORS.dark,
                                    marginBottom: 5,
                                    fontSize: fontSize.h5
                                }}
                            />
                            {errorEmail && <Text
                                style={{
                                    color: color.error,
                                    fontSize: fontSize.h6,
                                }}>
                                {errorEmail}
                            </Text>}
                            <TextInput
                                keyboardType="numeric"
                                placeholder="Số điện thoại"
                                onChangeText={text => {
                                    setErrorPhone(
                                        isValidPhone(text) == true
                                            ? '' : 'Số điện thoại không hợp lệ'
                                    )
                                    setPhone(text)
                                }}
                                style={{
                                    borderBottomWidth: 0.25,
                                    marginTop: 5,
                                    color: COLORS.dark,
                                    marginBottom: 5,
                                    fontSize: fontSize.h5
                                }}
                            />
                            {errorphone && <Text
                                style={{
                                    color: color.error,
                                    fontSize: fontSize.h6,
                                }}>
                                {errorphone}
                            </Text>}

                        </View>
                    </View>
                    <View style={{ height: 5 }} />
                    <View style={{
                        paddingHorizontal: 15,
                        backgroundColor: COLORS.white,
                        paddingTop: 15,
                        paddingBottom: 70
                    }}>
                        <Text style={{
                            fontSize: fontSize.h4,
                            color: 'black',
                            fontWeight: '600',
                        }}>
                            Chi tiết giá
                        </Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop: 20,
                        }}>
                            <Text style={{
                                color: COLORS.dark
                            }}>
                                Giá 1 phòng 1 đêm
                            </Text>
                            <Text style={{
                                color: COLORS.dark
                            }}>
                                {formattedPiceDay}₫
                            </Text>
                        </View>
                        <View style={{ height: 0.5, backgroundColor: "#ccc" }} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop: 20,
                        }}>
                            <Text style={{
                                color: COLORS.dark
                            }}>
                                Số ngày ở
                            </Text>
                            <Text style={{
                                color: COLORS.dark
                            }}>
                                {day} ngày
                            </Text>
                        </View>
                        <View style={{ height: 0.5, backgroundColor: "#ccc" }} />

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop: 20,
                        }}>
                            <Text style={{
                                color: COLORS.dark
                            }}>
                                Thuế VAT
                            </Text>
                            <Text style={{
                                color: COLORS.dark
                            }}>
                                10%
                            </Text>
                        </View>
                        <View style={{ height: 3, backgroundColor: "#ccc", marginTop: 10 }} />
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop: 20,
                        }}>
                            <View style={{
                                alignItems: "flex-start"
                            }}>
                                <Text style={{
                                    color: COLORS.dark,

                                }}>
                                    Tổng thanh toán
                                </Text>
                                <Text style={{
                                    color: COLORS.dark,

                                }}>
                                    (bao gồm thếu VAT)
                                </Text>
                            </View>
                            <Text style={{
                                color: COLORS.dark
                            }}>
                                {formattedPrice}₫
                            </Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
            {
                isOpen && <Calendar
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
            <View style={{
                flex: 13
            }}>
                <View style={{ height: 0.25, backgroundColor: "#ccc" }} />

                <View style={{
                    flexDirection: "row",
                    backgroundColor: COLORS.white,
                    justifyContent: "space-between",
                    flex: 1,
                    paddingHorizontal: 15,
                }}>

                    <View>
                        <Text style={{
                            fontSize: fontSize.h5
                        }}>
                            Tổng tiền
                        </Text>
                        <Text style={{
                            fontSize: fontSize.h3,
                            color: "black"
                        }}>
                            {formattedPrice}₫
                        </Text>
                        <Text style={{
                            fontSize: fontSize.h5,
                            textDecorationLine: "line-through"
                        }}>
                            848.754$
                        </Text>
                    </View>
                    <TouchableOpacity
                        disabled={isValidiattionOK() === false}
                        activeOpacity={0.8}
                        onPress={dataAdd}
                        style={{
                            top: 15
                        }}>
                        <Text style={{
                            borderRadius: 10,
                            padding: 12,
                            textAlign: 'center',
                            width: 150,
                            backgroundColor: color.button,
                            color: COLORS.white,
                            fontSize: fontSize.h4,
                        }}>
                            Thanh toán
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* {orderHistory.map((order, index) => (
                <Text key={index} style={{ color: COLORS.dark }}> hello: {order.name}</Text> */}
            {/* ))} */}

        </View >

    );
}
export default OrderHotel