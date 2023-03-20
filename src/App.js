import React, { useState, useEffect } from 'react';
import { BrowserRouter as Switch, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Repositories from './components/repositories';
import DetailsPage from "./components/details";

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
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await clients.getAllRepositories();
      setDados(response);
    }

    fetchData();
  }, []);

  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Switch>
              <Route path="/" exact>
                <h1>Lista de repositórios</h1>
                <div className="App">
                  <Repositories dados={dados} />
                </div>
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




