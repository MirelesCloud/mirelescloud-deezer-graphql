import React from 'react'
import styled from '@emotion/styled/macro'

const TableRow = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;

  @media screen and (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
`
const TableHeader = styled.th`
  padding: .625em;
  text-align: center;

  @media screen and (max-width: 600px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px; 
  }
`

const TableCell = styled.td`
padding: .625em;
text-align: center;
  @media screen and (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;

    &:before {
      content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`

const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  @media screen and (max-width: 600px) {
    border: 0;
  }
`
const TableTest = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader scope="col">Account</TableHeader>
          <TableHeader scope="col">Date</TableHeader>
          <TableHeader scope="col">Amount</TableHeader>
          <TableHeader scope="col">Period</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell data-label="Account">Visa</TableCell>
          <TableCell data-label="Date">04/04/2003</TableCell>
          <TableCell data-label="Amount">$3,000</TableCell>
          <TableCell data-label="Period">30days</TableCell>

        </TableRow>
        <TableRow>
          <TableCell data-label="Account">Visa</TableCell>
          <TableCell data-label="Date">04/04/2003</TableCell>
          <TableCell data-label="Amount">$3,000</TableCell>
          <TableCell data-label="Period">30days</TableCell>

        </TableRow>
        <TableRow>
          <TableCell data-label="Account">Visa</TableCell>
          <TableCell data-label="Date">04/04/2003</TableCell>
          <TableCell data-label="Amount">$3,000</TableCell>
          <TableCell data-label="Period">30days</TableCell>

        </TableRow>
      </tbody>

    </Table>
  )
}

export default TableTest