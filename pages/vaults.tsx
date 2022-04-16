import * as React from "react";
import { TableContainer } from "@chakra-ui/react";
import { VaultTable } from "@/components/modules/VaultTable/VaultTable";
import { VaultHeader } from "@/components/modules/VaultHeader/VaultHeader";
import ContentWrapper from '@/components/elements/ContentWrapper/ContentWrapper'

const Vaults = () => {
  return (
    <ContentWrapper>
      <TableContainer>
        <VaultHeader />
        <VaultTable size={'lg'} />
      </TableContainer>
    </ContentWrapper>
  )
}

export default Vaults
