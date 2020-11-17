import React from "react";
import {
  Paper,
  Grid,
  Button,
  TextField,
  TableContainer,
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  HeaderTable: {
    height: "49px",
    color: "#fff",
    backgroundColor: "#251CA6",
    fontSize: "24px",
    paddingTop: "5px",
    paddingLeft: "10px",
  },
  sizeTable: {
    width: "70%",
  },
  tableRightBorder: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
  },
  tableRightBorderBody: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
  },
});
export default function Bigcorral(props) {
  console.log(props);
  const classes = useStyles();
  const [openDelete, setOpenDelete] = React.useState(false);
  const [indexForDelete, setIndexforDelete] = React.useState(null);
  const [herd,setherd] = React.useState("");
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const saveIntoDataBase = () => {
    if(herd!==""){  axios
      .post(
        "https://aipcattle.herokuapp.com/settingherd_num/herd_num/" +
          props.UID,
        {
          herd_num:herd,
        }
      )
      .then(() => {
        alert("บันทึกสำเร็จ");
        window.location.reload();
      });}
    else{
      alert("กรุณากรอกข้อมูลให้ครับ");
    }
    
    };
  const DeleteData = () => {
    axios
      .delete(
        "https://aipcattle.herokuapp.com/settingherd_num/herd_num/" +
          props.UID +
          "/" +
          props.keys[indexForDelete]
      )
      .then((res) => {
        alert("สำเร็จ");
        setOpenDelete(false);
        window.location.reload();
      });
  };
  const alertDelete = (index) => {
    setIndexforDelete(index);
    setOpenDelete(true);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Paper variant="outlined">
        <Grid container spacing={3} style={{ marginTop: "15px" }}>
          <Grid item xs={4} style={{ textAlign: "right", fontSize: "20px" }}>
            ชื่อฝุง
          </Grid>
          <Grid item xs={4}>
            <TextField
            value={herd}
            onChange={e=>setherd(e.target.value)}
              placeholder="กรอกชื่อฝุง"
              variant="outlined"
              size="small"
              style={{ width: "100%", margin: "0" }}
            />
          </Grid>
          <Grid item xs={4} style={{ textAlign: "left" }}>
            <Button
            onClick={()=>saveIntoDataBase()}
              variant="contained"
              style={{
                backgroundColor: "#1A911E",
                color: "#fff",
                fontSize: "20px",
                width: "100px",
                height: "40px",
                outline: "none",
              }}
            >
              เพิ่ม
            </Button>
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          style={{
            paddingLeft: "10%",
            paddingRight: "10%",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {props.loading ? 
          <div
            className="container-fluid text-center"
            style={{ padding: "10px" }}
          >
            <CircularProgress size={30} />
          </div>
         : <TableContainer>
         <Table>
           <TableHead>
             <TableRow style={{ backgroundColor: "#FFF" }}>
               <TableCell
                 align="center"
                 className={classes.tableRightBorder}
                 style={{ fontSize: "18px", width: "20%", padding: "10px" }}
               >
                 รายการที่
               </TableCell>
               <TableCell
                 align="center"
                 className={classes.tableRightBorder}
                 style={{ fontSize: "18px", width: "60%", padding: "10px" }}
               >
                 ชื่อฝุง
               </TableCell>
               <TableCell
                 align="center"
                 className={classes.tableRightBorder}
                 style={{ fontSize: "18px", width: "20%", padding: "10px" }}
               >
                 จัดการ
               </TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {props.data.map((i, index) => {
               return (
                 <TableRow key={index}>
                   <TableCell
                     className={classes.tableRightBorder}
                     align="center"
                     style={{
                       fontSize: "18px",
                       margin: "0",
                       padding: "5px",
                     }}
                   >
                     {index + 1}
                   </TableCell>
                   <TableCell
                     align="center"
                     style={{
                       fontSize: "18px",
                       margin: "0",
                       padding: "5px",
                     }}
                     className={classes.tableRightBorder}
                   >
                     {i.herd_num}
                   </TableCell>
                   <TableCell
                     align="center"
                     className={classes.tableRightBorder}
                     style={{
                       fontSize: "18px",
                       margin: "0",
                       padding: "5px",
                     }}
                   >
                     <Button
                       variant="contained"
                       style={{
                         color: "#fff",
                         backgroundColor: "red",
                         outline: "none",
                       }}
                       onClick={() => alertDelete(index)}
                     >
                       ลบ
                     </Button>
                   </TableCell>
                 </TableRow>
               );
             })}
           </TableBody>
         </Table>
       </TableContainer>}
         
        </Paper>
      </Paper>
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle id="alert-dialog-title">
          {"คุณต้องการลบหรือไม่?"}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => DeleteData()}
            color="primary"
            variant="contained"
            style={{ outline: "none" }}
          >
            ตกลง
          </Button>
          <Button
            onClick={() => handleCloseDelete()}
            color="secondary"
            variant="contained"
            style={{ outline: "none" }}
          >
            ยกเลิก
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
