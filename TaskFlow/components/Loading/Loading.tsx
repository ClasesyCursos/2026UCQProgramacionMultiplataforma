import { ActivityIndicator, View } from 'react-native'
import { theme } from '@/theme'

export default function Loading(){

    return(

        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >

            <ActivityIndicator
                size='large'
                color={theme.colors.primary}
            />

        </View>

    )

}