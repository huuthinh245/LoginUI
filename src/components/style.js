import { StyleSheet } from 'react-native'
import _dims from '../components/_dims'
import _colors from '../components/_colors'

export default styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgb(96, 103, 114)',
        flex: 1,

        //spadding: _dims.ios ? 30 : 10,
        //backgroundColor: 'transparent'
    },
    logo: {
        //height: _dims.height/2,
        marginTop: 10,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 10,
        margin: 5
    },
    submitWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: 'blue',
        borderRadius: 2
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    controlWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-around'
    },
    socialWrapper: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textWrapper: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    saperator: {
        height: 1,
        backgroundColor: 'gray',
        flex: 1
    },
    socialText: {
        margin: 30
    },


})
export const IMAGE_HEIGHT = 200
export const IMAGE_HEIGHT_SMALL = 100