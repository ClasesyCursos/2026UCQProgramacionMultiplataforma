import { StyleSheet } from 'react-native'
import { theme } from '@/theme'

export const styles=StyleSheet.create({

    chip:{
        paddingHorizontal:theme.spacing.md,
        paddingVertical:theme.spacing.sm,

        borderRadius:theme.radius.full,

        borderWidth:1,
        borderColor:theme.colors.border,

        alignSelf:'flex-start'
    }

})