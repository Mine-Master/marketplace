import React from 'react';
import styled from '@emotion/styled';
import { IMAGES } from 'assets/react_asset_gen'
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { TEXT_12_700, TEXT_16_700 } from 'styles/global-typography';
import { ROW_JUSTIFY_END__ALIGN_CENTER } from 'styles/globalStyles';


interface BadgeProps {
  icon: string;
  title: string;
  subtitle: string;
}

interface TableRowData {
  rank: number;
  collection: BadgeProps;
  floorPrice: number;
}

const data: TableRowData[] = [
  {
    rank: 1,
    collection: { icon: `${IMAGES.bits}`, title: 'Facebook', subtitle: '356 items' },
    floorPrice: 0.100 ,
  },
  {
    rank: 2,
    collection: { icon: `${IMAGES.bits}`, title: 'Macdonalds', subtitle: '356 items' },
    floorPrice: 0.200 ,
  },
  {
    rank: 3,
    collection: { icon: `${IMAGES.bits}`, title: 'MasterCard', subtitle: '356 items' },
    floorPrice: 0.300 ,
  },
  {
    rank: 4,
    collection: { icon: `${IMAGES.bits}`, title: 'Louis Vuitton', subtitle: '356 items' },
    floorPrice: 0.400 ,
  },
  {
    rank: 5,
    collection: { icon: `${IMAGES.bits}`, title: 'Ferrari', subtitle: '356 items' },
    floorPrice: 0.500 ,
  },
  {
    rank: 6,
    collection: { icon: `${IMAGES.bits}`, title: 'Star box', subtitle: '356 items' },
    floorPrice: 0.600 ,
  },
  {
    rank: 7,
    collection: { icon: `${IMAGES.bits}`, title: 'pinoo', subtitle: '356 items' },
    floorPrice: 0.700 ,
  },
  {
    rank: 8,
    collection: { icon: `${IMAGES.bits}`, title: 'push village', subtitle: '356 items' },
    floorPrice: 0.800 ,
  },
];

const Badge: React.FC<BadgeProps> = ({ icon, title, subtitle }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <IconStyle src={icon} alt={title} />
    <BadgeText>
      <BadgeTitle>{title}</BadgeTitle>
      <BadgeSubTitle>{subtitle}</BadgeSubTitle>
    </BadgeText>
  </div>
);

const CustomTable: React.FC<{ data: TableRowData[] }> = ({ data }) => (
  <StyledTable>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Rank</TableHeaderCell>
        <TableHeaderCell>Collection</TableHeaderCell>
        <TableHeaderCellLast>Floor Price</TableHeaderCellLast>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.rank}>
          <TableCellRank>{row.rank}</TableCellRank>
          <TableCellBadge>
            <Badge icon={row.collection.icon} title={row.collection.title} subtitle={row.collection.subtitle} />
          </TableCellBadge>
          <FloorPriceCell>
            <FloorPriceIcon src={IMAGES.priceiconxcn} alt="Price Icon" />
            {row.floorPrice} XCN
          </FloorPriceCell>
        </TableRow>
      ))}
    </TableBody>
  </StyledTable>
);


export const Table: React.FC = () => {
    // Split data into two arrays for two tables
    const firstTableData = data.slice(0, 4);
    const secondTableData = data.slice(4);
  
    return (
      <TableContainerWrapper>
        <TableContainer component="div" style={{width:'50%'}}>
          <CustomTable data={firstTableData} />
        </TableContainer>
        <TableContainer component="div" style={{width:'50%'}}>
          <CustomTable data={secondTableData} />
        </TableContainer>
      </TableContainerWrapper>
    );
  };
  
const IconStyle = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const BadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BadgeTitle = styled.span`
${TEXT_16_700}
  color: #C77DFF;
`;

const BadgeSubTitle = styled.span`
   ${TEXT_12_700}
  color: #C77DFF;
`;

const StyledTable = styled(MuiTable)`
  margin: 16px;
`;

const TableContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TableHeaderCell = styled(TableCell)`
    ${TEXT_16_700}
    color:var(--primary);
    border-bottom:1px solid  rgba(90, 24, 154, 0.5);
`;

const TableCellRank=styled(TableCell)`
    color:#C77DFF;
    ${TEXT_16_700}
    border:none;
`
const TableCellBadge=styled(TableCell)`
    border:none;
`
const FloorPriceCell = styled(TableCell)`
   ${ROW_JUSTIFY_END__ALIGN_CENTER}
    ${TEXT_16_700}
    color:var(--text);
    border:none;
`;

const FloorPriceIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
const TableHeaderCellLast=styled(TableHeaderCell)`
    text-align: right;
`