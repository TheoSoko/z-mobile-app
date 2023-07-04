import {StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function StatusBarCustom(){
    const dark = useColorScheme() === 'dark' // Dark Mode
    const backgroundStyle = { backgroundColor: dark ? Colors.darker : Colors.lighter}

    return (
        <StatusBar 
            barStyle={dark ? 'light-content' : 'dark-content'} 
            backgroundColor={backgroundStyle.backgroundColor}
        />
    )
}