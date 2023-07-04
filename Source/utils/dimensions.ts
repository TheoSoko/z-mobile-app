import { Dimensions } from 'react-native';

const win = Dimensions.get('window').width
export const percentOfWindow = (n: number) => (win / 100) * n

const screen = Dimensions.get('screen').width
export const percentOfScreen = (n: number) => (screen / 100) * n
