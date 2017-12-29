// import React from 'react';

// import {
//   Keyboard,
//   Dimensions,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   AppRegistry
// } from 'react-native';

// var {height, width} = Dimensions.get('window');
// var _keyboardWillShowSubscription;
// var _keyboardWillHideSubscription;
// height = height - 20;

// export default class Login extends React.Component {
//   constructor(props) {
//  		super(props);
//  		this.state = {
// 			height: height,
// 		};
// 	}
// 	componentDidMount() {
// 		_keyboardWillShowSubscription = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardWillShow(e));
// 		_keyboardWillHideSubscription = Keyboard.addListener('keyboardDidHide', (e) => this._keyboardWillHide(e));
// 	}
// 	componentWillUnmount() {
// 		_keyboardWillShowSubscription.remove();
// 		_keyboardWillHideSubscription.remove();
// 	}
// 	_keyboardWillShow(e) {
//         console.log(e)
// 		this.setState({height: height - e.endCoordinates.height});
// 	}
// 	_keyboardWillHide(e) {
//         console.log(e)
// 		this.setState({height: height});
// 	}
//   render() {
//       console.log(this.state.height)
//     return (
// 		<View style={{height: this.state.height}}>	
// 			<View style={{backgroundColor: 'blue',flex:1}} />
// 			<View style={styles.fieldBox}>
// 				<TextInput 
// 					style={styles.field}
// 					placeholder={'hello'}
// 					autoCapitalize={'none'}
// 					placeholderTextColor={'#afbccc'}
// 					blurOnSubmit={false}
// 					autoCorrect={false}
// 					ref={'textinput'}
// 					onChangeText={(data) => this.setState({message: data})} />
// 			</View>
// 		</View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   field: {
// 		color:'black',
// 		fontWeight:'bold',
// 		fontSize:18,
// 		marginHorizontal: 10
// 	},
// });
import React from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, Animated, Keyboard, KeyboardAvoidingView, } from 'react-native'
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from "./style";
import strings from './strings'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
       // UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
    }
    componentWillMount() {
        _keyboardWillShowSubscription = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardWillShow(e));
        _keyboardWillHideSubscription = Keyboard.addListener('keyboardDidHide', (e) => this._keyboardWillHide(e));
    }
    componentWillUnmount() {
        _keyboardWillShowSubscription.remove();
        _keyboardWillHideSubscription.remove();
    }
    _keyboardWillShow(e) {
        Animated.timing(this.imageHeight, {
            duration: 250,
            toValue: IMAGE_HEIGHT_SMALL,
        }).start();
        console.log(this.imageHeight)
    }
    _keyboardWillHide(e) {
        console.log(e)
        Animated.timing(this.imageHeight, {
            duration: 250,
            toValue: IMAGE_HEIGHT,
        }).start();
        console.log(this.imageHeight)
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
            >
                <Animated.Image
                    style={[styles.logo, { height: this.imageHeight}]}
                    source={require('../assets/logo.png')}
                />
                <View>
                    <TextInput
                        placeholder={strings.email}
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        returnKeyType='next'
                        spellCheck={false}
                    />
                    <TextInput
                        placeholder={strings.password}
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        returnKeyType='go'
                        spellCheck={false}
                    />
                    <TextInput
                        placeholder={strings.password}
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        returnKeyType='go'
                        spellCheck={false}
                    />
                    <TextInput
                        placeholder={strings.password}
                        style={styles.input}
                        autoCorrect={false}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        returnKeyType='go'
                        spellCheck={false}
                    />
                </View>
                {/* <TouchableOpacity
                            activeOpacity={.5}
                            style={styles.submitWrapper}
                        >
                            <Text style={styles.submitText}>{strings.signIn}</Text>
                        </TouchableOpacity>
                        <View style={styles.controlWrapper}>
                            <TouchableOpacity>
                                <Text>{strings.signUp}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text>{strings.forgot}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textWrapper}>
                            <View style={styles.saperator} />
                            <Text style={styles.socialText}>{strings.orSocialSignin}</Text>
                            <View style={styles.saperator} />
                        </View>

                        <View style={styles.socialWrapper}>
                            <TouchableOpacity activeOpacity={.5}>
                                <Image
                                    style={styles.socialButton}
                                    source={require('../assets/socials/facebook.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={.5}>
                                <Image
                                    style={styles.socialButton}
                                    source={require('../assets/socials/twitter.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={.5}>
                                <Image
                                    style={styles.socialButton}
                                    source={require('../assets/socials/strava.png')}
                                />
                            </TouchableOpacity>
                        </View> */}
            </KeyboardAvoidingView>
        )
    }
}