import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import { Route, Switch, Redirect } from "react-router-dom";
import Assignments from "./pages/assignments";
import Perfomance from './pages/perfomance'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar
}));

function App(props) {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Switch>
          <Route path="/assignments" component={Assignments} />
          <Route path="/perfomance" component={Perfomance} />
          <Route path="/" component={Assignments}/>
          {/* handling unkown routes on frontend */}
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}


export default App;