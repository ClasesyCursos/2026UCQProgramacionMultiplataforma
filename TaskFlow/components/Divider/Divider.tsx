import { View } from 'react-native'
import { theme } from '@/theme'

export default function Divider() {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: theme.colors.divider,
      }}
    />
  )
}