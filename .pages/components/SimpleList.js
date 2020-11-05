import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import GTranslateOutlinedIcon from '@material-ui/icons/GTranslateOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import FolderSharedOutlinedIcon from '@material-ui/icons/FolderSharedOutlined';
import SourceIcon from './icons/SourceIcon'
import HistoryEduIcon from './icons/HistoryEduIcon'
import FilterAltIcon from './icons/FilterAltIcon'
import CalculateIcon from './icons/CalculateIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    MuiList: {
      width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    },
    
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GTranslateOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Google翻譯" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </>
  );
}
