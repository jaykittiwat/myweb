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
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import update from "immutability-helper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import axios from 'axios'
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
export default function Prosync(props) {
  const [medic, setMedic] = React.useState([
    {
      num_day: "0",
      item: "",
      time: "",
    },
  ]);
  const [open, setOpen] = React.useState(false);
  const [openIndex, setOpenIndex] = React.useState(null);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [indexForDelete, setIndexforDelete] = React.useState(null);
  const [pro_sync,setpro_sync]= React.useState("");
 
  const classes = useStyles();

  React.useEffect(() => {
    console.log(props);
  }, [props]);
  const handleClickOpen = (index) => {
    setOpenIndex(index);
    setOpen(true);
  };
  const handleClickOpenDelete = (index) => {
    setOpenDelete(true);
    setIndexforDelete(index);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const addtable = () => {
    setMedic([
      ...medic,
      {
        num_day: "0",
        item: "",
        time: "",
      },
    ]);
  };
  const deleteItem = (index) => {
    const result = medic.filter((results) => results !== medic[index]);
    setMedic(result);
  };

  const setDetaisync = (event, index) => {
    const v = event.target.value;
    const ID = event.target.id;
    const collection = medic;
    const newObj = update(collection, { [index]: { [ID]: { $set: v } } });
    setMedic(newObj);
  };
  const saveIntoDataBase = () => {
  if(pro_sync!==""){  axios
    .post(
      "https://aipcattle.herokuapp.com/settingprogram_sync/program_sync/" +
        props.UID,
      {
        pro_sync:pro_sync,
        note:"",
        medic:medic
      }
    )
    .then(() => {
      alert("บันทึกสำเร็จ");
      window.location.reload();
    });}
  else{
    alert("กรุณากรอกข้อมูลให้ครบ");
  }
  
  };
  const DeleteData = () => {
    axios
    .delete(
      "https://aipcattle.herokuapp.com/settingprogram_sync/program_sync/" +
        props.UID +
        "/" +
        props.keydrug[indexForDelete]
    )
    .then((res) => {
      alert("สำเร็จ");
      setOpenDelete(false);
      window.location.reload();
    });
  };
  

  return (
    <div style={{ marginTop: "10px" }}>
      <Paper
        square
        variant="outlined"
        style={{ backgroundColor: "#FFF", padding: "10px", marginLeft: "15%" }}
        className={classes.sizeTable}
      >
        <Paper
          square
          variant="outlined"
          style={{
            backgroundColor: "#DCDCDC",
            padding: "10px",

            textAlign: "center",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              md={12}
              xs={12}
              style={{ fontSize: "20px", textAlign: "center" }}
            >
              ชื่อโปรแกรมการเหนี่ยวนำ
              <TextField
              value={pro_sync}
              onChange={e=>setpro_sync(e.target.value)}
                size="small"
                variant="outlined"
                placeholder="กรอกชื่อโปรแกรมการเหนี่ยวนำ"
                style={{
                  backgroundColor: "#FFF",
                  width: "50%",
                  marginLeft: "10px",
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TableContainer style={{ marginTop: "10px" }}>
                <Table>
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#FFF" }}>
                      <TableCell
                        align="center"
                        className={classes.tableRightBorder}
                        style={{ fontSize: "18px", width: "10%" }}
                      >
                        รายการที่
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.tableRightBorder}
                        style={{ fontSize: "18px", width: "7%" }}
                      >
                        วัน
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.tableRightBorder}
                        style={{ fontSize: "18px", width: "62%" }}
                      >
                        รายละเอียด
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.tableRightBorder}
                        style={{ fontSize: "18px", width: "10%" }}
                      >
                        เวลา
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.tableRightBorder}
                        style={{ fontSize: "18px", width: "15%" }}
                      >
                        ลบ
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {medic.map((i, index) => {
                      return (
                        <TableRow
                          key={index}
                          style={{ backgroundColor: "#FFF", margin: "0" }}
                        >
                          <TableCell
                            align="center"
                            className={classes.tableRightBorder}
                          >
                            <strong>{index + 1 + "."}</strong>
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
                            <TextField
                              id="num_day"
                              onChange={(event)=> setDetaisync(event,index)}
                              value={i.num_day}
                           
                              size="small"
                              style={{ width: "100%", margin: "0" }}
                              variant="outlined"
                            />
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
                            <TextField
                              id="item"
                              onChange={(event)=> setDetaisync(event,index)}
                           
                              size="small"
                              style={{ width: "100%", margin: "0" }}
                              variant="outlined"
                              placeholder="รายละเอียด"
                            />
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
                            <TextField
                              id="time"
                              onChange={(event) => setDetaisync(event, index)}
                              size="small"
                              style={{ width: "100%", margin: "0" }}
                              variant="outlined"
                              type="time"
                            />
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
                            {" "}
                            <IconButton
                              style={{ outline: "none", margin: "0" }}
                              onClick={() => deleteItem(index)}
                            >
                              <DeleteIcon
                                fontSize="small"
                                style={{ color: "red" }}
                              />
                            </IconButton>{" "}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Paper
                variant="outlined"
                square
                style={{
                  textAlign: "right",
                  margin: "0",
                  padding: "2px",
                  backgroundColor: "#F8F8F8",
                }}
              >
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "#1A9803",
                    fontSize: "18px",
                    margin: "5px",
                    outline: "none",
                  }}
                  onClick={() => addtable()}
                >
                  เพิ่ม
                </Button>
              </Paper>
            </Grid>
            <Grid item md={12} xs={12}>
              {" "}
              <Button
                onClick={() => saveIntoDataBase()}
                variant="contained"
                style={{
                  backgroundColor: "#251CA6",
                  color: "#fff",
                  fontSize: "18px",
                  width: "150px",
                }}
              >
                บันทึก
              </Button>
            </Grid>
          </Grid>
        </Paper>
        {props.loading ? (
          <div
            className="container-fluid text-center"
            style={{ padding: "10px" }}
          >
            <CircularProgress size={30} />
          </div>
        ) : (
          <TableContainer style={{ marginTop: "10px" }}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#FFF" }}>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "15%" }}
                  >
                    รายการที่
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "55%" }}
                  >
                    ชื่อโปรแกรมการเหนี่ยวนำ
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "15%" }}
                  >
                    รายละเอียด
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "15%" }}
                  >
                    ลบ
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.map((i, index) => {
                  return (
                    <TableRow key={index} style={{ backgroundColor: "#ffff" }}>
                      <TableCell
                        style={{
                          fontSize: "16px",
                          margin: "0",
                          padding: "5px",
                        }}
                        className={classes.tableRightBorder}
                        align="center"
                      >
                        {index + 1 + "."}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "16px",
                          margin: "0",
                          padding: "5px",
                        }}
                        className={classes.tableRightBorder}
                        align="center"
                      >
                        {i.pro_sync}
                      </TableCell>

                      <TableCell
                        style={{
                          fontSize: "16px",
                          margin: "0",
                          padding: "5px",
                        }}
                        className={classes.tableRightBorder}
                        align="center"
                      >
                        <IconButton
                          onClick={() => handleClickOpen(index)}
                          style={{ outline: "none", color: "yellow" }}
                        >
                          <FolderOpenIcon size="small" />
                        </IconButton>{" "}
                      </TableCell>

                      <TableCell
                        style={{
                          fontSize: "16px",
                          margin: "0",
                          padding: "5px",
                        }}
                        className={classes.tableRightBorder}
                        align="center"
                      >
                        <IconButton
                          style={{ outline: "none" }}
                          onClick={() => handleClickOpenDelete(index)}
                        >
                          <DeleteIcon
                            fontSize="small"
                            style={{ color: "red" }}
                          />
                        </IconButton>
                      </TableCell>

                      <Dialog
                        fullWidth={true}
                        maxWidth="md"
                        open={index === openIndex ? open : false}
                        onClose={handleClose}
                      >
                        <DialogTitle>
                          <strong>รายละเอียดโปรแกรมการเหนี่ยวนำ :</strong>
                          {i.pro_sync}
                        </DialogTitle>
                        <DialogContent>
                          <Grid container spacing={3}>
                            <Grid item xs={2} style={{ textAlign: "center" }}>
                              <strong>วันที่ดำเนินการ</strong>
                            </Grid>
                            <Grid item xs={8} style={{ textAlign: "center" }}>
                              <strong>รายละเอียด</strong>
                            </Grid>
                            <Grid item xs={2} style={{ textAlign: "center" }}>
                              <strong>เวลา</strong>
                            </Grid>
                            <Grid item xs={12}>
                              {i.medic.map((item, index2) => {
                                return (
                                  <Grid container spacing={3} key={index2}>
                                    <Grid
                                      item
                                      xs={2}
                                      style={{ textAlign: "center" }}
                                    >
                                      {item.num_day}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={8}
                                      style={{ textAlign: "center" }}
                                    >
                                      {item.item}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={2}
                                      style={{ textAlign: "center" }}
                                    >
                                      {item.time || "-"}
                                    </Grid>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </Grid>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={handleClose}
                            variant="contained"
                            style={{
                              backgroundColor: "#251CA6",
                              color: "#fff",
                              outline: "none",
                            }}
                          >
                            ตกลง
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
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
