import { View } from 'react-native'
import { theme } from '@/theme'
import Icon from '../Icon'
import AppText from '../Text'
import { EmptyStateProps } from './EmptyState.types'

export default function EmptyState({
    icon,
    title,
    description
}:EmptyStateProps){

    return(
        <View
            style={{
                alignItems:'center',
                justifyContent:'center',

                padding:theme.spacing.xl
            }}
        >

            <Icon
                name={icon}
                size={72}
                color={theme.colors.primary}
            />

            <AppText
                variant='h2'
                align='center'
                style={{
                    marginTop:theme.spacing.md
                }}
            >
                {title}
            </AppText>

            <AppText
                align='center'
                color={theme.colors.textSecondary}
                style={{
                    marginTop:theme.spacing.sm
                }}
            >
                {description}
            </AppText>

        </View>

    )

}