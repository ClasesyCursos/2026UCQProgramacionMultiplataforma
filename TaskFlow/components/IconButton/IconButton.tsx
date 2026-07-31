import { Pressable } from 'react-native'
import { theme } from '@/theme'
import Icon from '../Icon'
import { styles } from './IconButton.styles'
import { IconButtonProps } from './IconButton.types'

export default function IconButton({
    icon,
    onPress,
    size=theme.sizes.icon.md,
    color=theme.colors.primary,
    style
}:IconButtonProps){

    return(

        <Pressable
            onPress={onPress}
            style={[styles.button,style]}
        >

            <Icon
                name={icon}
                size={size}
                color={color}
            />

        </Pressable>

    )

}