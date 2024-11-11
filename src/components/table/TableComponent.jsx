import React, { useContext } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
// ============= theme contain ==================
import { ThemeContext } from '../../theme/ThemeContext'; 
// ======= style ===============
import { tableContainerStyle, titleStyle, tableHeaderStyle, tableRowStyle } from './style'; 
//=============== UI DATA ==============
import {tableData} from "../../uidata/DashboardData"

function TableComponent() {
  const { darkMode } = useContext(ThemeContext); 
  
  return (
    <Box sx={tableContainerStyle(darkMode)} >
      <Typography sx={titleStyle(darkMode)}>
        Top Selling Products
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={tableHeaderStyle(darkMode)}>Name</TableCell>
            <TableCell sx={tableHeaderStyle(darkMode)}>Price</TableCell>
            <TableCell sx={tableHeaderStyle(darkMode)}>Quantity</TableCell>
            <TableCell sx={tableHeaderStyle(darkMode)}>Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={tableRowStyle(darkMode)}>{row.name}</TableCell>
              <TableCell sx={tableRowStyle(darkMode)}>{row.price}</TableCell>
              <TableCell sx={tableRowStyle(darkMode)}>{row.quantity}</TableCell>
              <TableCell sx={tableRowStyle(darkMode)}>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default TableComponent;
