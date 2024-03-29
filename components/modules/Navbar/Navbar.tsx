// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Flex,
//   HStack,
//   IconButton, LinkOverlay,
//   useBreakpointValue
// } from '@chakra-ui/react'
// import * as React from 'react'
// import { FiMenu } from 'react-icons/fi'
// import NextLink from "next/link";
// import Account from "../Account/Account";
// import useEagerConnect from "../../../hooks/useEagerConnect";
// import { useWeb3React } from "@web3-react/core";
//
//

//
// export const Navbar = () => {
//   const { account, library } = useWeb3React();
//   const triedToEagerConnect = useEagerConnect();
//   const isDesktop = useBreakpointValue({ base: false, lg: true })
//   const isConnected = typeof account === "string" && !!library;
//
//   return (
//     <Box as="nav" padding={4} py={{ base: '3', lg: '4' }} bg={'purple.700'} color="on-accent">
//       <Flex justify="space-between">
//         <HStack spacing="4">
//           <FoxLogo />
//           {isDesktop && (
//             <ButtonGroup variant="ghost-on-accent" spacing="1">
//               {navLinks.map((link, index) => {
//                 return (
//                   // eslint-disable-next-line react/jsx-key
//                   <NextLink href={link.path} passHref>
//                     <Button as={LinkOverlay} key={index}>
//                       {link.name}
//                     </Button>
//                   </NextLink>
//                 );
//               })}
//              </ButtonGroup>
//           )}
//         </HStack>
//
//         {isConnected && (
//           <HStack spacing="4">
//             <Account triedToEagerConnect={triedToEagerConnect} />
//           </HStack>
//         )}
//         {!isDesktop &&
//           <IconButton
//             variant="ghost-on-accent"
//             icon={<FiMenu fontSize="1.25rem" />}
//             aria-label="Open Menu"
//           />
//         }
//       </Flex>
//     </Box>
//   )
// }

import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from '@/components/elements/Logo/Logo'
import { Sidebar } from '@/components/modules/Sidebar/Sidebar'
import { ToggleButton } from '@/components/modules/ToggleButton/ToggleButton'
import {useWeb3React} from "@web3-react/core";
import useEagerConnect from "@/hooks/useEagerConnect";
import Account from "@/components/modules/Account/Account";
import {FiMenu} from "react-icons/fi";

export const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const isConnected = typeof account === "string" && !!library;
  return (
    <Box
      py="4"
      px={{ base: '4', md: '8' }}
      bg="transparent"
    >
      <Flex justify="space-between">
        <Box boxSize="3xs" pb={0} maxH={65}>
          <Logo />
        </Box>
        <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          isFullHeight
          preserveScrollBarGap
          // Only disabled for showcase
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Sidebar />
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}