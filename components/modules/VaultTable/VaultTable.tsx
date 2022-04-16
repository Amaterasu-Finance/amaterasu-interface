import {
  Avatar,
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import * as React from 'react'
import { IoArrowDown } from 'react-icons/io5'
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { DoubleCurrencyLogo } from "../DoubleCurrencyLogo";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import useSWR from "swr";
import { getFoxVaultAddress } from "@/utils/addressHelpers";
import VaultABI from '@/config/abi/autofox.json'
import { isAddress } from "@ethersproject/address";
import { Contract } from "@ethersproject/contracts";


export const VaultTable = (props: TableProps) => {
  // const { account, library } = useWeb3React()
  // const [open, setOpen] = useState(false)
  // const [totalShares, setTotalShares] = useState(null)


  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <HStack spacing="1">
                <Text>Pair</Text>
                <Icon as={IoArrowDown} color="muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th>Status</Th>
          <Th>Yearly</Th>
          <Th>Liquidity</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {/*{members.map((member) => (*/}
        {/*  <Tr key={member.id}>*/}
        {/*    <Td>*/}
        {/*      <DoubleCurrencyLogo />*/}
        {/*    </Td>*/}
        {/*    <Td>*/}
        {/*      <Badge size="sm" colorScheme={member.status === 'active' ? 'green' : 'red'}>*/}
        {/*        {member.status}*/}
        {/*      </Badge>*/}
        {/*    </Td>*/}
        {/*    <Td>*/}
        {/*      <Text color="muted">{member.email}</Text>*/}
        {/*    </Td>*/}
        {/*    <Td>*/}
        {/*      <Text color="muted">{member.role}</Text>*/}
        {/*    </Td>*/}
        {/*    <Td>*/}
        {/*      <HStack spacing="1">*/}
        {/*        <IconButton*/}
        {/*          icon={open ? <TriangleUpIcon fontSize="1.25rem" /> : <TriangleDownIcon fontSize="1.25rem" />}*/}
        {/*          variant="ghost"*/}
        {/*          aria-label="Expand Row"*/}
        {/*          onClick={() => setOpen(!open)}*/}
        {/*        />*/}
        {/*      </HStack>*/}
        {/*    </Td>*/}
        {/*  </Tr>*/}
        {/*))}*/}
      </Tbody>
    </Table>
  )
}