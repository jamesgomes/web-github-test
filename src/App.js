import React, { useState, useEffect } from 'react';
import { BrowserRouter as Switch, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import Repositories from './components/Repositories';
import DetailsPage from "./components/Details";
import Loading from './components/Loading';

import clients from './clients';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Arial',
  },
});

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = React.useState('all');


  const options = [
    { value: 'Go', label: 'Go' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Python', label: 'Python' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'all', label: 'Todas' },
  ];

  const handleChangeFilter = async (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await clients.getRepositoriesByQuery(filter);
      setData(response);
      setIsLoading(false);
    }
    fetchData();
  }, [filter]);

  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Switch>
              <Route path="/" exact>
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    <h1>Lista de repositórios</h1>
                    <div className="App">
                      <div>
                        <Box sx={{ width: 200 }}>
                          <FormControl fullWidth>
                            <InputLabel id="select-filter">Filtro por linguagem</InputLabel>
                            <Select
                              labelId="select-filter"
                              id="select-filter"
                              value={filter}
                              label="Filtro por linguagem"
                              onChange={handleChangeFilter}
                              key="select-filter"
                            >
                              {options.map((option, index) => (
                                <MenuItem key={`${option.value}-${index}`} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>
                        <br />
                        <Repositories data={data} />
                      </div>
                    </div>
                  </>
                )}
              </Route>
              <Route path="/details/:id?" exact render={props => <DetailsPage {...props} />} />
            </Switch>
          </Container>
        </React.Fragment>
      </ThemeProvider >
    </HashRouter>

  );
}

export default App;




