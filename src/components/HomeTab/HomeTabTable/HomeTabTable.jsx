import EllipsisText from 'react-ellipsis-text';

import { Table, THead, Tr, Th, Td } from './HomeTabTable.styled';

const tooltip = 'true';

const HomeTabTable = ({ data }) => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>Date</Th>
          <Th>Type</Th>
          <Th>Category</Th>
          <Th>Comment</Th>
          <Th>Sum</Th>
          <Th>Balance</Th>
        </Tr>
      </THead>
      <tbody>
        {data.map(item => (
          <Tr border key={item._id}>
            <Td>{item.date}</Td>
            <Td>{item.isIncome ? '+' : '-'}</Td>
            <Td>{item.category}</Td>
            <Td>
              <EllipsisText
                text={item.comment ? item.comment : 'No comment'}
                length={20}
              />
            </Td>
            <Td isIncome={item.isIncome}>{item.sum}</Td>
            <Td>{item.balance}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HomeTabTable;
