import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles=StyleSheet.create({

    badge:{
        paddingHorizontal:theme.spacing.md,
        paddingVertical:theme.spacing.xs,

        borderRadius:theme.radius.full,

        backgroundColor:theme.colors.primary,
    }

})