import { Icon } from '@chakra-ui/icons'
import {
  Button,
  Text,
  Divider,
  Flex,
  Stack,
  Box, IconButton
} from '@chakra-ui/react'
import * as React from 'react'
import {
  FiBarChart2,
  FiBook,
  FiHome
} from 'react-icons/fi'

import {
  FaSwimmingPool,
  FaCoins,
  FaLock,
  FaHandsHelping,
  FaCertificate,
  FaLeaf
} from 'react-icons/fa'
import { Logo } from '@/components/elements/Logo/Logo'
import { NavButton } from '@/components/modules/NavButton/NavButton'
import Account from "@/components/modules/Account/Account";
import {useWeb3React} from "@web3-react/core";
import useEagerConnect from "@/hooks/useEagerConnect";
import { formatEtherscanLink } from '../../../util'

// linear-gradient(120deg, #212429, #000000)
export const Sidebar = () => {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  return (
    <Flex as="section" minH="100vh">
      <Flex
        flex="f1"
        overflowY="auto"
        maxW={{ base: 'full', sm: 'xs' }}
        py={{ base: '6', sm: '8' }}
        px={{ base: '4', sm: '10' }}
      >
        <Stack justify="space-between" spacing="1">
          <Stack spacing={{ base: '5', sm: '6' }} shouldWrapChildren>
            <Logo />
            <Account triedToEagerConnect={triedToEagerConnect} />
            <Divider />
            <Stack>
              <NavButton label="Dashboard" icon={FiHome} href="/" />
              <NavButton label="Swap" icon={FaHandsHelping} href="/trade" />
              <NavButton label="Liquidity" icon={FaSwimmingPool} href="/liquidity" />
              <NavButton label="Farms" icon={FaLeaf} href="/pool" />
              <NavButton label="Vaults" icon={FaLock} href="/vaults" />
              <NavButton
                {...{
                  href: "https://docs.amaterasu.finance",
                  target: "_blank",
                  rel: "noopener noreferrer",
                }}
                label="Docs"
                icon={FiBook}
              />
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  )
}