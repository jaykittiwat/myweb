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
  Select,
  FormControl,
  TextareaAutosize,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
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
/*common_drug: "123", dosage: "123", drug_name: "123", exp_date: "2020-11-02", mfd_date: "2020-11-02" */
export default function Drug(props) {
  const [group, setgroup] = React.useState(""); //กลุมยา
  const [drug_name_buy, setdrug_name_buy] = React.useState(""); //ชื่อการค้า
  const [common_drug, setcommon_drug] = React.useState(""); //สื่อสามัญ
  const [drug_name, setdrug_name] = React.useState(""); //ชื่อยา
  const [exp_date, setexp_date] = React.useState("");
  const [mfd_date, setmfd_date] = React.useState("");
  const [detail, setdetail] = React.useState("");
  const [properties, setproperties] = React.useState("");
  const [method, setmethod] = React.useState("");
  const [warning, setwarning] = React.useState("");
  const [note, setnote] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [openIndex, setOpenIndex] = React.useState(null);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [indexForDelete, setIndexforDelete] = React.useState(null);
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

  const saveIntoDataBase = () => {
    if (
      group !== "" &&
      drug_name_buy !== "" &&
      common_drug !== "" &&
      drug_name !== "" &&
      exp_date !== "" &&
      mfd_date !== ""
    ) {
      axios
        .post("https://aipcattle.herokuapp.com/settingdrug/drug/" + props.UID, {
          group: group,
          drug_name_buy: drug_name_buy,
          common_drug: common_drug,
          dosage: "ไม่ระบุ",
          drug_name: drug_name,
          exp_date: exp_date,
          mfd_date: mfd_date,
          dettail: detail,
          properties: properties,
          method: method,
          warning: warning,
          note: note,
        })
        .then(() => {
          alert("บันทึกสำเร็จ");
          window.location.reload();
        });
    } else {
      alert("กรุณากรอกข้อมูลให้ครบ");
    }
  };

  const DeleteData = () => {
    axios
      .delete(
        "https://aipcattle.herokuapp.com/settingdrug/drug/" +
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

  const classes = useStyles();
  const convertDate = (dateEvent) => {
    var date = new Date(dateEvent);
    var newdate = new Date(date);
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var yyyy = newdate.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }

    return dd + "/" + mm + "/" + yyyy;
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <Paper
        square
        variant="outlined"
        className={classes.sizeTable}
        style={{
          backgroundColor: "#DCDCDC",
          padding: "10px",
          marginLeft: "15%",
        }}
      >
        <Paper
          square
          variant="outlined"
          style={{ backgroundColor: "#FFF", padding: "20px" }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              <span style={{ color: "red" }}>*</span>กลุ่มยา
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <FormControl size="small" style={{ width: "100%", margin: "0" }}>
                <Select
                  id="medicGroup"
                  variant="outlined"
                  native
                  value={group}
                  onChange={(e) => setgroup(e.target.value)}
                >
                  <option value="">เลือก</option>
                  <option>ยาแก้ติดเชื้อหรือยาปฏิชีวนะ</option>
                  <option>ยาลดการอักเสบหรือยาแก้ไข</option>
                  <option>ยากำจัดพยาธิภายนอกหรือภายใน</option>
                  <option>ยากลุ่มฮอร์โมน</option>
                  <option>ยาสลบ</option>
                  <option>วิตามินแร่ธาต</option>
                  <option>ยาฆ่าเชื้อ</option>
                  <option>ยาทายาใช้ภายนอก</option>
                  <option>วัคซีนหรือสมุนไพร</option>
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              <span style={{ color: "red" }}>*</span> ชื่อทางการค้า
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextField
                value={drug_name_buy}
                onChange={(e) => setdrug_name_buy(e.target.value)}
                placeholder="กรอกชื่อทางการค้า"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              <span style={{ color: "red" }}>*</span>ชื่อยา
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextField
                value={drug_name}
                onChange={(e) => setdrug_name(e.target.value)}
                placeholder="กรอกชื่อยา"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              <span style={{ color: "red" }}>*</span>ชื่อสามัญ
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextField
                value={common_drug}
                onChange={(e) => setcommon_drug(e.target.value)}
                placeholder="กรอกชื่อสามัญ"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              <span style={{ color: "red" }}>*</span> วันที่ผลิต
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextField
                value={mfd_date}
                onChange={(e) => setmfd_date(e.target.value)}
                type="date"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              <span style={{ color: "red" }}>*</span> วันหมดอายุ
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextField
                value={exp_date}
                onChange={(e) => setexp_date(e.target.value)}
                type="date"
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </Grid>{" "}
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              ส่วนประกอบ
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextareaAutosize
                value={detail}
                onChange={(e) => setdetail(e.target.value)}
                aria-label="minimum height"
                rowsMin={3}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              สรรพคุณ
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextareaAutosize
                value={properties}
                onChange={(e) => setproperties(e.target.value)}
                aria-label="minimum height"
                rowsMin={3}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              วิธีใช้
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextareaAutosize
                value={method}
                onChange={(e) => setmethod(e.target.value)}
                aria-label="minimum height"
                rowsMin={3}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              ผลค้างเขียง
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextareaAutosize
                value={warning}
                onChange={(e) => setwarning(e.target.value)}
                aria-label="minimum height"
                rowsMin={3}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
              หมายเหตุ
            </Grid>{" "}
            <Grid item xs={12} md={4}>
              <TextareaAutosize
                value={note}
                onChange={(e) => setnote(e.target.value)}
                aria-label="minimum height"
                rowsMin={3}
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Paper
            elevation={0}
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            {" "}
            <Button
              variant="contained"
              style={{
                backgroundColor: "#251CA6",
                color: "#fff",
                fontSize: "18px",
                width: "150px",
              }}
              onClick={() => saveIntoDataBase()}
            >
              บันทึก
            </Button>
          </Paper>
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
                    style={{ fontSize: "18px", width: "10%" }}
                  >
                    รายการที่
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "18%" }}
                  >
                    ชื่อทางการค้า
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "20px", width: "18%" }}
                  >
                    ชื่อยา
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "18%" }}
                  >
                    ชื่อสามัญ
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "10%" }}
                  >
                    วันผลิต
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "12%" }}
                  >
                    วันหมดอายุ
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "7%" }}
                  >
                    รายละเอียด
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "7%" }}
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
                        {i.drug_name_buy || ""}
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
                        {i.drug_name || ""}
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
                        {i.common_drug || ""}
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
                        {convertDate(i.mfd_date) || ""}
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
                        {convertDate(i.exp_date) || ""}
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
                        maxWidth="lg"
                        open={index === openIndex ? open : false}
                        onClose={handleClose}
                      >
                        <DialogTitle>รายละเอียดยา</DialogTitle>
                        <DialogContent>
                          <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                              <strong>กลุ่มยา:</strong>
                              {i.group || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong>ชื่อทางการค้า:</strong>{" "}
                              {i.drug_name_buy || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong>ชื่อยา:</strong>
                              {i.drug_name || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong> ชื่อสามัญ:</strong>
                              {i.common_drug || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong> วันที่ผลิต: </strong>
                              {convertDate(i.mfd_date) || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong>วันหมดอายุ: </strong>
                              {convertDate(i.exp_date) || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong> ส่วนประกอบ:</strong>
                              {i.dettail || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong>สรรพคุณ:</strong>
                              {i.properties || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong> วิธีใช้:</strong>
                              {i.method || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong> ผลค้างเขียง:</strong>
                              {i.warning || ""}
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <strong> หมายเหตุ: </strong> {i.note || ""}
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
