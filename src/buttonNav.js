import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {Badge,ListItemText,MenuItem,Menu,Button} from "@material-ui/core";
import { Link } from "react-router-dom";
import Iconhome from  "@material-ui/icons/Home";
import Iconadd from  "@material-ui/icons/NoteAdd";
import IconDescription from  "@material-ui/icons/Description";
import IconNote from  "@material-ui/icons/Note";
import IconDrop from  "@material-ui/icons/ArrowDropDown";
import IconHealing from  "@material-ui/icons/Healing";
import Iconnoti from  "@material-ui/icons/NotificationsActive";
import Iconfolder from  "@material-ui/icons/Folder";
import Iconsetting from "@material-ui/icons/Settings"
import IconHowto from  "@material-ui/icons/ImportContacts"
export function B1() {
  return (
    <div>
      <Link to="/login" style={{textDecoration:'none'}}>
        <Button
          style={{
            width: "150px",
            color: "white",
            fontSize: "20px",
            outline: "none",
          }}
         
          startIcon={ <Iconhome />}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          หน้าแรก
        </Button>
      </Link>
    </div>
  );
}
export function B2() {

  return (
    
       <Link to="/regiscattle" style={{textDecoration:'none'}}>
      <Button
        style={{
          width: "190px",
          color: "white",
          fontSize: "20px",
          outline: "none"
        }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        startIcon={<Iconadd/>}      
      >
       ลงทะเบียนโค
      </Button> 
        </Link>

  );
}

export function B3() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5"
    }
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      {...props}
    />
  ));
  const StyledMenuItem = withStyles(theme => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      }
    }
  }))(MenuItem);
  return (
    <div>
      <Button
        style={{
          width: "170px",
          color: "white",
          fontSize: "20px",
          outline: "none"
        }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        startIcon={<IconNote/>}
        endIcon={<IconDrop/>}
        onClick={handleClick}
      >
        จัดการแม่โค
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/fatten" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกการบำรุง" />
          </StyledMenuItem>
        </Link>

        <Link to="/induction" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกการเหนี่ยวนำ" />
          </StyledMenuItem>
        </Link>

        <Link to="/breed" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกการผสม" />
          </StyledMenuItem>
        </Link>

        <Link to="/checkup" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกการตรวจท้อง" />
          </StyledMenuItem>
        </Link>

        <Link to="/calve" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกการคลอด" />
          </StyledMenuItem>
        </Link>

        <Link to="/abortion" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกโคแท้ง" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
export function B4() {
  return (
    <div>
      <Link to="/calfmanage" style={{textDecoration:'none'}}>
        <Button
          style={{
            width: "150px",
            color: "white",
            fontSize: "20px",
            outline: "none"
          }}
        startIcon={<IconDescription/>}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          จัดการลูกโค
        </Button>
      </Link>
    </div>
  );
}
export function B5() {
  return (
    <div>
      <Link to="/treatment" style={{textDecoration:'none'}}>
        <Button
          style={{
            width: "180px",
            color: "white",
            fontSize: "20px",
            outline: "none"
          }}
          startIcon={<IconHealing/>}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          บันทึกการรักษา
        </Button>
      </Link>
    </div>
  );
}

export function B6(props) {
  return (
    <div>
      <Link to="/notification" style={{textDecoration:'none'}}>
        <Button
          style={{
            width: "150px",
            color: "white",
            fontSize: "20px",
            outline: "none"
          }}
          startIcon={<Iconnoti/>}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          <Badge badgeContent={props.alam} color="secondary">
            แจ้งเตือน
          </Badge>
        </Button>
      </Link>
    </div>
  );
}
export function B7() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5"
    }
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles(theme => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      }
    }
  }))(MenuItem);
  return (
    <div>
      <Button
        style={{
          width: "170px",
          color: "white",
          fontSize: "20px",
          outline: "none"
        }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        startIcon={<Iconfolder/>}
        endIcon={<IconDrop/>}
        onClick={handleClick}
      >
        เรียกดูข้อมูล
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/checkinformation" style={{textDecoration:'none'}}>
          {" "}
          <StyledMenuItem>
            <ListItemText primary="กราฟสถิติข้อมูล" />
          </StyledMenuItem>
        </Link>
        <Link to="/report" style={{textDecoration:'none'}}>
          {" "}
          <StyledMenuItem>
            <ListItemText primary="ออกรายงาน" />
          </StyledMenuItem>
        </Link>
       
      </StyledMenu>
    </div>
  );
}

export function B8() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5"
    }
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles(theme => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      }
    }
  }))(MenuItem);
  return (
    <div>
      <Button
        style={{
          width: "160px",
          color: "white",
          fontSize: "20px",
          outline: "none"
        }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        startIcon={<Iconsetting/>}
        endIcon={<IconDrop/>}

        onClick={handleClick}
      >
        ตั้งค่า
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/brandsetting" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="ตั้งค่าแบรนด์" />
          </StyledMenuItem>
        </Link>

        <Link to="/usersetting" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="ตั้งค่าผู้ใช้" />
          </StyledMenuItem>
        </Link>

        <Link to="/farmsetting" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="ตั้งค่าระบบฟาร์ม" />
          </StyledMenuItem>
        </Link>

        <Link to="/drugsetting" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="ตั้งค่าโปรแกรมยา" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}

export function B9() {
  return (
    <div>
      <Link to="/instructionmanual" style={{textDecoration:'none'}}>
        <Button
          style={{
            width: "150px",
            color: "white",
            fontSize: "20px",
            outline: "none"
          }}
          startIcon={<IconHowto/>}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          คู่มือ
        </Button>
      </Link>
    </div>
  );
}
