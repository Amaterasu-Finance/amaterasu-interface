import React from 'react'
import { Avatar, AvatarGroup } from "@chakra-ui/react";

export const DoubleCurrencyLogo = () => {
  return (
    <AvatarGroup size={'lg'} max={2}>
      <Avatar src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/foxswap-circle_05.svg' />
      <Avatar src='https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/foxswap-circle_03.svg' />
    </AvatarGroup>
  )
}
