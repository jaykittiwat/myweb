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
  TextareaAutosize,
  Dialog,
  DialogActions,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
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
export default function Promaintain(props) {
  const [maintain, setMaintain] = React.useState("");
  const [note, setnote] = React.useState("");
  const [openDelete, setOpenDelete] = React.useState(false);
  const [indexForDelete, setIndexforDelete] = React.useState(null);
  const classes = useStyles();

  const handleClickOpenDelete = (index) => {
    setOpenDelete(true);
    setIndexforDelete(index);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const saveIntoDataBase = () => {
    if(maintain!==""){  
      axios
      .post(
        "https://aipcattle.herokuapp.com/settingprogram_maintain/program_maintain/" +
          props.UID,
        {
          pro_maintain: maintain,
          note: note,
        }
      )
      .then(() => {
        alert("บันทึกสำเร็จ");
        window.location.reload();
      });
    }
      else{
        alert("กรูณากรอกข้อมูลให้ครบ")
      }
  
  };
  const DeleteData = () => {
    axios
      .delete(
        "https://aipcattle.herokuapp.com/settingprogram_maintain/program_maintain/" +
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
        style={{
          backgroundColor: "#FFF",
          padding: "10px",
          marginLeft: "15%",
        }}
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
          <Paper
            square
            variant="outlined"
            style={{
              backgroundColor: "#FFF",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                md={3}
                xs={12}
                style={{ fontSize: "20px", textAlign: "left" }}
              >
                ชื่อโปรแกรมการบำรุง
              </Grid>
              <Grid
                item
                md={9}
                xs={12}
                style={{ fontSize: "20px", textAlign: "center" }}
              >
                <TextField
                  value={maintain}
                  onChange={(e) => setMaintain(e.target.value)}
                  size="small"
                  variant="outlined"
                  placeholder="กรอกชื่อโปรแกรมการบำรุง"
                  style={{
                    backgroundColor: "#FFF",
                    width: "100%",
                  }}
                />
              </Grid>

              <Grid
                item
                md={3}
                xs={12}
                style={{ fontSize: "20px", textAlign: "left" }}
              >
                รายละเอียดหรือหมายเหตุ
              </Grid>
              <Grid item md={9} xs={12} style={{ textAlign: "center" }}>
                <TextareaAutosize
                  rowsMin={3}
                  style={{ width: "100%" }}
                  onChange={(e) => setnote(e.target.value)}
                  value={note}
                />
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
                      style={{ fontSize: "18px", width: "20%" }}
                    >
                      ชื่อโปรแกรมการบำรุง
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "18px", width: "55%" }}
                    >
                      รายละเอียด
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "18px", width: "10%" }}
                    >
                      ลบ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.data.map((i, index) => {
                    return (
                      <TableRow
                        key={index}
                        style={{ backgroundColor: "#ffff" }}
                      >
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
                          {i.pro_maintain || ""}
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
                          {i.note || ""}
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
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
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
