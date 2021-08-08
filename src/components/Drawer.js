import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import {Divider}  from '@material-ui/core';
import {Link} from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  link:{
    textDecoration:'none',
    color: 'inherit'
  }
}));

const Drawer = () =>  {
  const classes = useStyles();
  const teacherDashboard =  [
    {text: 'Assignment', icon:<MailIcon/>,to:"/assignments"},
    {text: 'Perfomance', icon: <MailIcon/>,to:"/perfomance"},
    {text: 'study material', icon: <MailIcon/>,to:"/study-materials"},
  ];
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {
          teacherDashboard.map((routerItem) => (
            <Link className={classes.link} to={routerItem.to}>
                <ListItem button key={routerItem.text}>

                  <ListItemIcon>{routerItem.icon}</ListItemIcon>
                  <Typography>
                    {routerItem.text}
                  </Typography>
                </ListItem>
            </Link>
            ))
        }
      </List>
      <Divider />
      <List>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
      </List>
    </div>
  );
};
export default Drawer;