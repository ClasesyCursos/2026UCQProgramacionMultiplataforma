import { View } from 'react-native'
import AppText from '../Text'
import { theme } from '@/theme'
import { styles } from './Badge.styles'
import { BadgeProps } from './Badge.types'

export default function Badge({
    label
}:BadgeProps){

    return(

        <View style={styles.badge}>

            <AppText
                variant='caption'
                color={theme.colors.white}
            >
                {label}
            </AppText>

        </View>

    )

}