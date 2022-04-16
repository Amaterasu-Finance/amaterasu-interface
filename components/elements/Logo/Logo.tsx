import { Box, chakra, HTMLChakraProps, Image } from '@chakra-ui/react'
import SunLogo from '../../../public/assets/sun-logo.png'
export const Logo = (): React.ReactElement => {
  return <Image src={SunLogo.src} h={57} />
}
