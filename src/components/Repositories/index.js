import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Repositories({ dados }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Linguagem</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dados.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.language}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  href={`details/${item.id}`}>Detalhes
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Repositories;
