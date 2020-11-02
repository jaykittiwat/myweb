import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Icondoor from '@material-ui/icons/MeetingRoom';
import firebase from "./backEnd/firebase/index";
import {Avatar, ListItemText,ListItemIcon,MenuItem,Menu} from "@material-ui/core";
import Iconreoder from "@material-ui/icons/Reorder";

import { Link } from "react-router-dom";
const logout = e => {
    firebase.auth().signOut();
  };
  
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
const [currentUser,setcurrentUser]=React.useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
React.useEffect(() => {
   setcurrentUser(props.currentUser)
}, [props]);
  return (
    <div>
      <Iconreoder
      style={{color:"#fff",outline:"none"}}
    fontSize="large"
        onClick={handleClick}
     />
        
     
      <StyledMenu
    
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
          <Avatar style={{backgroundColor:"#ff5722"}}>{currentUser.substring(0,1)}</Avatar> 
          </ListItemIcon>
          <ListItemText primary={currentUser} />
        </StyledMenuItem>
        <StyledMenuItem onClick={()=>logout()}>
          <ListItemIcon>
            <Icondoor  />
          </ListItemIcon>
          <Link to="/" style={{textDecoration:'none'}}  >  <ListItemText primary="ออกจากระบบ" /></Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
