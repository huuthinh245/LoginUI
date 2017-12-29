import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios'

export default _dims = {
    ios,
    width,
    height,
    navHeight: 50,
    tabBarIconSize: 20
}