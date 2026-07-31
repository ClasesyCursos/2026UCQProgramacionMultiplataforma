import { MaterialIcons } from '@expo/vector-icons'
import { theme } from '@/theme'
import { IconProps } from './Icon.types'

export default function Icon({
  name,
  size = theme.sizes.icon.md,
  color = theme.colors.textPrimary,
}: IconProps) {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={color}
    />
  )
}