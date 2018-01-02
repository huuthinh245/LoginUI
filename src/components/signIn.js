
import React from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, Animated, Keyboard, KeyboardAvoidingView, UIManager, LayoutAnimation } from 'react-native'
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from "./style";
import strings from './strings'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT)

    }
    componentWillMount() {
        _keyboardWillShowSubscription = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardDidShow(e));
        _keyboardWillHideSubscription = Keyboard.addListener('keyboardDidHide', (e) => this._keyboardDidHide(e));
    }
    componentWillUnmount() {
        _keyboardWillShowSubscription.remove();
        _keyboardWillHideSubscription.remove();
    }
    _keyboardDidShow(e) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        Animated.timing(this.imageHeight, {
            duration: 180,
            toValue: IMAGE_HEIGHT_SMALL,
        }).start();
    }
    _keyboardDidHide(e) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        Animated.timing(this.imageHeight, {
            duration: 180,
            toValue: IMAGE_HEIGHT,
        }).start();
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
            >
                <View style={{ flex: 1 }}>
                    <Animated.Image
                        style={[styles.logo, { height: this.imageHeight }]}
                        source={require('../assets/logo.png')}
                    />
                </View>
                <View style={{ flex: 1}}>
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
                    <TouchableOpacity
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
                </View>
                <View style={{ flex: 1 }}>
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
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}