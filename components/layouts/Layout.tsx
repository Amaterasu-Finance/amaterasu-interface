import {Box, Container, Flex, useBreakpointValue} from "@chakra-ui/react";
import {Sidebar} from "@/components/modules/Sidebar/Sidebar";
import {Navbar} from "@/components/modules/Navbar/Navbar";

const Layout = ({ children }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      bg="linear-gradient(
          80deg,
          #FF6600 60%,
          #ffcc00 100%
        )"      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      <Box
        as="main"
        bg="linear-gradient(
          80deg,
          #FF6600 60%,
          #ffcc00 100%
        )"
        pt={{ base: '0', lg: '3' }}
        flex="1"
        height="full"
      >

        {children}
      </Box>
    </Flex>
  )
}

export default Layout