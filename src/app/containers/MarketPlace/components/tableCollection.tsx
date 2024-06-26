import React from 'react'
import { SecondaryButton } from 'app/components/button/secondaryButton'
import { IMAGES } from 'assets/react_asset_gen'
import styled from 'styled-components'
import { TEXT_24_700 } from 'styles/global-typography'
import { ROW_ALIGN_CENTER__SPACE_B } from 'styles/globalStyles'
import { Table } from './table'

export const TableCollection = () => {
  return (
    <Wrapper>
        <Header>
            <Topic>Top Collections</Topic>
            <SecondaryButtons icon={IMAGES.arrowIcon}>view all</SecondaryButtons>
        </Header>
        <Table/>
    </Wrapper>
  )
}

const Wrapper =styled.div`
  margin-bottom: 40px;
`
const Header=styled.div`
  ${ROW_ALIGN_CENTER__SPACE_B}
  border-bottom: 1px solid  rgba(90, 24, 154, 0.1);
`
const Topic=styled.h1`
  ${TEXT_24_700}
  color:#C77DFF;
`
const SecondaryButtons=styled(SecondaryButton)`
    width: 126px;
    height: 60px;
`