import { Component, useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { fontSize } from "../../constain";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import color from "../../constain/color";
import {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    firebaseSet,
    firebaseDatabaseRef,
    sendEmailVerification,
    signInWithEmailAndPassword
} from '../../firebase/Firebase'
import { isValidEmail, isValidPassword } from "../../utilies/Validation";
function Login({ navigation }) {
    const [show, setShow] = useState(true);
    const [visible, setVisible] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const isValidiattionOK = () => name.length > 0 &&
        email.length > 0 &&
        password.length > 0 &&
        password == re_password &&
        isValidEmail(email) == true &&
        isValidPassword(password) == true;

    // loginUser = async (email, password) => {
    //     try {
    //         await firebase
    //     } catch (error) {

    //     }
    // }
    return <View style={{
        flex: 100,
    }}>
        <View style={{
            flex: 10,
            justifyContent: "center"
        }}>

            <View style={{
                flexDirection: "row",
                position: 'relative',
                top: 10,
                // marginBottom: 15,
                justifyContent: "center"
            }}>
                <Text style={{
                    fontSize: fontSize.h4,
                    fontWeight: fontSize.fontWeight,
                    color: color.black,
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: fontSize.h3,

                }}>
                    Đăng nhập
                </Text>
            </View>
        </View>
        <View style={{
            flex: 75,
        }}>
            <View style={{
                flexDirection: "row",
                borderWidth: fontSize.borderWidth,
                padding: 10,
                paddingHorizontal: 15,
                marginHorizontal: 27,
                alignItems: "center",
                borderRadius: 7,
            }}>
                <View style={{
                    width: 22,
                    alignItems: "center"
                }}>
                    <Icon1 name={'facebook-with-circle'} size={fontSize.h2} style={{
                        color: color.facebook,
                        // marginRight : "10%"
                    }} />
                </View>
                <Text style={{
                    color: color.black,
                    fontSize: fontSize.h5,
                    fontWeight: fontSize.fontWeight,
                    flex: 1,
                    textAlign: "center",
                    // marginLeft : -22
                    // marginHorizontal: 35,
                }}>
                    Đăng nhập bằng Facebook
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                borderWidth: fontSize.borderWidth,
                padding: 10,
                marginHorizontal: 27,
                borderRadius: 7,
                margin: 10,
                alignItems: "center",
                paddingHorizontal: 15,
                // position : "relative"
            }}>
                <Icon name={'google'} size={fontSize.h2} style={{
                    color: color.google,
                    // marginRight : "10%",\
                    // position : "absolute",top : -0, right : 0,
                }} />
                <Text style={{
                    color: color.black,
                    fontSize: fontSize.h5,
                    fontWeight: fontSize.fontWeight,
                    flex: 1,
                    textAlign: "center"

                    // marginHorizontal: 42,

                }}>
                    Đăng nhập bằng Google
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                // justifyContent: 'center',
                borderWidth: fontSize.borderWidth,
                padding: 10,
                marginHorizontal: 27,
                borderRadius: 7,
                alignItems: "center",
                paddingHorizontal: 15,
            }}>
                <Icon1 name={'app-store'} size={fontSize.h2} style={{
                    color: color.black,
                    // marginRight : "10%"
                }} />
                <Text style={{
                    color: color.black,
                    fontSize: fontSize.h5,
                    fontWeight: fontSize.fontWeight,
                    flex: 1,
                    textAlign: "center"
                    // marginHorizontal: 47,

                }}>
                    Đăng nhập bằng Apple
                </Text>
            </View>
            <Text style={{
                color: color.black,
                textAlign: "center",
                padding: 20,
                fontSize: fontSize.h5
            }}>
                Hoặc đăng nhập bằng số điện thoại, email
            </Text>
            <View style={{
                paddingHorizontal: 27
            }}>
                <TextInput
                    placeholder="Email"
                    onChangeText={text => {
                        setErrorEmail(
                            isValidEmail(text) == true
                                ? '' : 'Email bạn nhập không đúng định dạng',
                        )
                        setEmail(text)
                    }}
                    style={{
                        backgroundColor: color.textInput,
                        borderRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 40,
                        marginTop: 5,
                        marginBottom: 5
                    }}
                />

                {errorEmail && <Text
                    style={{
                        color: color.error,
                        fontSize: fontSize.h5,
                        paddingLeft: 15
                    }}>
                    {errorEmail}
                </Text>}
            </View>
            <View style={{
                paddingHorizontal: 27,
                justifyContent: "center"

            }}>
                <TextInput
                    placeholder="Mật khẩu"
                    secureTextEntry={visible}
                    onChangeText={text => {
                        setErrorPassword(
                            isValidPassword(text) == true
                                ? '' : 'Vui lòng điền mật khẩu'
                        )
                        setPassword(text)
                    }}
                    style={{
                        backgroundColor: color.textInput,
                        borderRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 40,
                        marginTop: 5,
                        marginBottom: 5,
                        position: "relative"
                    }}
                />
                {errorPassword && <Text
                    style={{
                        color: color.error,
                        fontSize: fontSize.h5,
                        paddingLeft: 15
                    }}>
                    {errorPassword}
                </Text>}

                <TouchableOpacity
                    onPress={() => {
                        setVisible(!visible)
                        setShow(!show)
                    }}
                    style={{
                        position: "absolute",
                        alignSelf: "flex-end"
                    }}>
                    <Icon2 name={show === false ? "eye" : "eye-slash"} size={20} style={{
                        paddingRight: 47,
                    }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            activeOpacity={0.8}
                onPress={() => {
                    if (email && password) {
                        signInWithEmailAndPassword(auth, email, password)

                            .then((userCredential) => {
                                const user = userCredential.user;

                                if (!user.emailVerified) {
                                    sendEmailVerification(user)
                                        .then(() => {
                                            console.log('Email verification sent');
                                        })
                                        .catch((error) => {
                                            console.log(`Failed to send email verification: ${error}`);
                                        });
                                }

                                firebaseSet(firebaseDatabaseRef(firebaseDatabase, `users/${user.uid}`), {
                                    email: user.email,
                                    emailVerified: user.emailVerified,
                                    accessToken: user.accessToken,
                                });


                                navigation.navigate('Home');
                            })
                            .catch((error) => {
                                alert(`Cannot sign in. Error: ${error.message}`);
                            });
                    } else {
                        alert('Please enter email and password');
                    }
                }}
                style={{
                    justifyContent: "center",
                    paddingHorizontal: 27,
                    padding: 10,
                    // alignItems: "center"
                }}>
                <Text style={{
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: color.button,
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: fontSize.fontWeight
                }}>
                    Đăng nhập
                </Text>
            </TouchableOpacity>
            <View style={{
                paddingTop: 10,
            }}>
                <Text style={{
                    textAlign: "center",
                    color: color.text
                }}>
                    Quên mật khẩu
                </Text>
            </View>
        </View>
        <View style={{
            flex: 20,
            paddingHorizontal: 27,
        }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Register')
                }}>
                <Text
                    style={{
                        padding: 15,
                        textAlign: "center",
                        fontSize: fontSize.h5,
                        color: color.button,
                        fontWeight: fontSize.fontWeight,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: color.button,
                    }}>
                    Đăng kí tài khoản
                </Text>
            </TouchableOpacity>
            <Text style={{
                textAlign: 'center',
                paddingTop: 10,
                fontSize: fontSize.h6,
                color: color.black
            }}>
                Bằng cách sử dụng ứng dụng, bạn đồng ý với điều kiện và điều khoản của chúng tôi
            </Text>
        </View>
    </View >
}
export default Login 