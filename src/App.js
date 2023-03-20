import React, { useState, useEffect } from 'react';
import { BrowserRouter as Switch, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


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

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const response = await clients.getAllRepositories();
      setData(response);
      setIsLoading(false);
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
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    <h1>Lista de repositórios</h1>
                    <div className="App">
                      <div>
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




