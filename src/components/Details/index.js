import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import clients from '../../clients';
import Loading from '../Loading';

const DetailsPage = () => {
  const { id } = useParams();

  const [data, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await clients.getRepositoryById(id);
      setDados(response);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const renderRow = (key, value) => {
    if (Array.isArray(value)) {
      return (
        <TableRow key={key}>
          <TableCell component="th" scope="row">
            {key}
          </TableCell>
          <TableCell>{value.join(", ")}</TableCell>
        </TableRow>
      );
    }
    if (typeof value === "object" && value !== null) {
      return Object.entries(value).map(([subKey, subValue]) =>
        renderRow(`${key}.${subKey}`, subValue)
      );
    }

    return (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {key}
        </TableCell>
        <TableCell>{typeof value === 'boolean' ? (
          value ? 'Sim' : 'Não'
        ) : (
          value
        )}</TableCell>
      </TableRow>
    );
  };

  return (<>
    <div>

      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <Button sx={{ marginTop: '1%' }}
            variant="contained"
            size="small"
            href={`/`}>Voltar
          </Button>
          <h1>{`Nome: ${data.name}`}</h1>
          <h2>{`Nome completo: ${data.full_name}`}</h2>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Propriedades</TableCell>
                  <TableCell>Valor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(data).map(([key, value]) => renderRow(key, value))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>

  </>);

}
export default DetailsPage;
