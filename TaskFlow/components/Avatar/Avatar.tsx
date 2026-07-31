import { View } from 'react-native'
import AppText from '../Text'
import { theme } from '@/theme'
import { AvatarProps } from './Avatar.types'

export default function Avatar({
    name,
    size=theme.sizes.avatar.md
}:AvatarProps){
    const initials=name
        .split(' ')
        .map(item=>item[0])
        .slice(0,2)
        .join('')
        .toUpperCase()

    return(
        <View
            style={{
                width:size,
                height:size,
                borderRadius:size/2,

                justifyContent:'center',
                alignItems:'center',

                backgroundColor:theme.colors.primary
            }}
        >

            <AppText
                color={theme.colors.white}
            >
                {initials}
            </AppText>

        </View>

    )

}