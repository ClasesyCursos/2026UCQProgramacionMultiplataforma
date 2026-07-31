import { Pressable } from 'react-native'
import AppText from '../Text'
import { theme } from '@/theme'
import { styles } from './Chip.styles'
import { ChipProps } from './Chip.types'

export default function Chip({
    label,
    selected=false
}:ChipProps){

    return(

        <Pressable
            style={[
                styles.chip,
                selected && {
                    backgroundColor:theme.colors.primary
                }
            ]}
        >

            <AppText
                color={
                    selected
                    ? theme.colors.white
                    : theme.colors.textPrimary
                }
            >
                {label}
            </AppText>

        </Pressable>

    )

}