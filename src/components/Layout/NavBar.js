import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
  listItem: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Início', icon: <HomeIcon /> },
  { id: 2, label: 'Em alta', icon: <Whatshot /> },
  { id: 3, label: 'Inscrições', icon: <Subscriptions /> },
];

const secondaryManu = [
  { id: 1, label: 'Biblioteca', icon: <VideoLibrary /> },
  { id: 2, label: 'Histórico', icon: <History /> },
];

const NavBar = () => {
  const classes = useStyles();

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => (
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryManu.map((item) => (
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtur vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer login
          </Button>
        </Box>
      </Box>
      <Divider />
    </Box>
  );

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
};

export default NavBar;
