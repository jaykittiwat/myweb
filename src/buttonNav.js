import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";

export function B1() {
  return (
    <div>
      <Link to="/login" style={{textDecoration:'none'}}>
        {" "}
        <Button
          style={{
            width: "150px",
            color: "white",
            fontSize: "20px",
            outline: "none",
            
          }}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          หน้าหลัก
        </Button>
      </Link>
    </div>
  );
}
export function B2() {
  return (
    <div>
      <Link to="/regiscow" style={{textDecoration:'none'}}>
        <Button
          style={{
            width: "150px",
            color: "white",
            fontSize: "20px",
            outline: "none"
          }}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          ลงทะเบียนโค
        </Button>
      </Link>
    </div>
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
          width: "150px",
          color: "white",
          fontSize: "20px",
          outline: "none"
        }}
        aria-controls="customized-menu"
        aria-haspopup="true"
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
            <ListItemText primary="บันทึกหารผสม" />
          </StyledMenuItem>
        </Link>

        <Link to="/checkup" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกการตรวจท้อง" />
          </StyledMenuItem>
        </Link>

        <Link to="/calve" style={{textDecoration:'none'}}>
          <StyledMenuItem>
            <ListItemText primary="บันทึกวันคลอด" />
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
            width: "150px",
            color: "white",
            fontSize: "20px",
            outline: "none"
          }}
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
          width: "150px",
          color: "white",
          fontSize: "20px",
          outline: "none"
        }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        ออกรายงาน
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
            <ListItemText primary="ตรวจสอบข้อมูล" />
          </StyledMenuItem>
        </Link>
        <Link to="/report" style={{textDecoration:'none'}}>
          {" "}
          <StyledMenuItem>
            <ListItemText primary="กราฟสถิติ" />
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
          width: "150px",
          color: "white",
          fontSize: "20px",
          outline: "none"
        }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        ตั้งค่าฟาร์ม
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
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          คู่มือการใช้งาน
        </Button>
      </Link>
    </div>
  );
}