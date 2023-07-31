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
import { UserCredential } from "firebase/auth";
import {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    firebaseSet,
    firebaseDatabaseRef,
    sendEmailVerification
} from '../../firebase/Firebase'
import { isValidEmail, isValidName, isValidPassword, isValidRePassword } from "../../utilies/Validation";

const InformationRegister = (props) => {
    //
    const { navigation, route } = props;
    const { navigate, goback } = navigation

    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);
    const [visible, setVisible] = useState(true);
    const [visible1, setVisible1] = useState(false)
    //
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //error
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorRePassword, setErrorRePassword] = useState('');
    //
    const [show2, setShow2] = useState('');
    const handlePasswordMatch = () => {
        if (password !== confirmPassword) {
            setErrorRePassword('Mật khẩu xác nhận không giống mật khẩu');
        } else {
            setErrorRePassword('');
        }
    };
    const isValidiattionOK = () => name.length > 0 &&
        email.length > 0 &&
        password.length > 0 &&
        password == re_password &&
        name(email) == true &&
        isValidEmail(email) == true &&
        isValidPassword(password) == true;
    return <View style={{
        flex: 1
    }}>
        <View style={{
            height: 50,
            justifyContent: 'center',
            alignItems: "center",
            flexDirection: 'row',
            paddingTop:20
        }}>
            <TouchableOpacity onPress={() => navigate('Login')}>
            <Icon name="arrowleft" size={fontSize.h2} style={{
                position: "relative",
                paddingRight: "84%"
            }} />
            </TouchableOpacity>
            <Text style={{
                fontSize: fontSize.h4,
                position: "absolute",
                color: color.black,
                fontWeight: fontSize.fontWeight,
                top: 30
            }}>
                Đăng kí tài khoản
            </Text>
        </View>
        <View style={{
            paddingHorizontal: 27,
        }}>
            <View>
                <TextInput
                    placeholder="Họ tên"
                    onChangeText={text => {
                        setErrorName(
                            isValidName(text) == true
                                ? '' : 'Vui lòng nhập tên của bạn'
                        );
                        setName(text)
                    }}
                    style={{
                        backgroundColor: color.textInput,
                        borderRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 40,
                        marginTop: 10,
                        marginBottom: 5
                    }}
                />

                {errorName && <Text
                    style={{
                        color: color.error,
                        fontSize: fontSize.h5,
                        paddingLeft: 15
                    }}>
                    {errorName}
                </Text>}
            </View>

            <View>
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
                        onBlur = { handlePasswordMatch }
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
                        paddingRight: 20,
                    }} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    justifyContent: "center"
                }}>
                <TextInput
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={!visible1}
                    onChangeText={text => setConfirmPassword(text)}
                    onBlur={handlePasswordMatch}
                    style={{
                        backgroundColor: color.textInput,
                        borderRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 40,
                        marginTop: 5,
                        marginBottom: 5
                    }}
                />
                {errorRePassword && <Text
                    style={{
                        color: color.error,
                        fontSize: fontSize.h5,
                        paddingLeft: 15
                    }}>
                    {errorRePassword}
                </Text>}

                <TouchableOpacity
                    onPress={() => {
                        setVisible1(!visible1)
                        setShow1(!show1)
                    }}
                    style={{
                        position: "absolute",
                        alignSelf: "flex-end"
                    }}>
                    <Icon2 name={show1 === false ? "eye-slash" : "eye"} size={20} style={{
                        paddingRight: 20
                    }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            // disabled = {isValidiattionOK() = false}
            onPress={() => {
                createUserWithEmailAndPassword(auth, email, password, name).then((userCredential) => {
                    const user = userCredential.user
                    sendEmailVerification(user).then(() => {
                        console.log('Email ok')
                    })
                    firebaseSet(firebaseDatabaseRef(
                        firebaseDatabase,
                        `users/${user.uid}`
                    ), {
                        email: user.email,
                        emailVerified: user.emailVerified,
                        accessToken: user.accessToken
                    })
                    navigate('home')
                }).catch((error)=> {
                    alert(`cannot signin, error: ${error.message}`)
                })
            }}
            >
                <Text style={{
                    fontSize: fontSize.h4,
                    padding: 15,
                    backgroundColor: color.button,
                    marginTop: 10,
                    borderRadius: 10,
                    justifyContent: "center",
                    textAlign: "center",
                    color: 'white'
                }}>
                    Đăng ký
                </Text>
            </TouchableOpacity>
        </View>
    </View>
}
export default InformationRegister