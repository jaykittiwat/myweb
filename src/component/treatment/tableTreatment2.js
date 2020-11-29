import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
  Select,FormControl
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import update from "immutability-helper";
import axios from "axios"
const useStyles = makeStyles({
  HeaderTable: {
    height: "59px",
    color: "#fff",
    backgroundColor: "#251CA6",
    fontSize: "26px",
    paddingTop: "7px",
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

const dataDefault=new Date()
const newdate = new Date( dataDefault);
let  dd = newdate.getDate();
let  mm = newdate.getMonth() + 1;
let  yyyy = newdate.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
  const   defaultSetDate = yyyy + "-" + mm + "-" + dd;
 
export default function SimpleTable(props) {
  const classes = useStyles();
  const [id, setid] = React.useState("");
  const [sickness, setsickness] = React.useState("");
  const [note, setnote] = React.useState("");
  const [time, settime] = React.useState();
  const [date, setdate] = React.useState(defaultSetDate);
  const [dateCheck, setdateCheck] = React.useState(defaultSetDate);
  const [operator, setOperator] = React.useState("");
  const [recorder, setRecoder] = React.useState("");
  const [top100Films, settop100Films] = React.useState([]);
  const [medicID, setMedicid] = React.useState([]);
  const [rows, setRows] = React.useState([
    { medic: "", typeuse: "", value: "",medicNote:"",medicGroup:"" },
  ]);


  const setSelectId = (newValue) => {
    setid(newValue);
  };
 

  React.useEffect(() => {
    setOperator(props.posts.fname);
    setRecoder(props.posts.fname);
    setMedicid(props.posts.drug);
    settop100Films(props.posts.setAllcow);
  }, [props]);

 const updataRows=(event,index)=>{
  const v = event.target.value;
  const ID = event.target.id;
  const collection = rows; 
  const newObj = update(collection, { [index]: { [ID]: { $set: v } } });
  setRows(newObj);
 }
  const AddTable = () => {
    return rows.map((i, index) => (
      <TableRow key={index} style={{ backgroundColor: "#FFF", margin: "0" }}>
        <TableCell
          align="center"
          className={classes.tableRightBorder}
          style={{ fontSize: "18px", width: "10%" }}
        >
          {index + 1 + "."}
        </TableCell>
        <TableCell
          align="center"
          className={classes.tableRightBorder}
          style={{
            fontSize: "18px",
            width: "20%",
            margin: "0",
            padding: "5px",
          }}
        >
         <FormControl size="small"   style={{ width: "100%", margin: "0" }}>
           <Select
                   id="medicGroup"
                  variant="outlined"
                  native
                  onChange={(event) => updataRows(event,index)}
                  value={i.medicGroup}
                >
                  <option value="">เลือก</option>
                  <option >ยาแก้ติดเชื้อหรือยาปฏิชีวนะ</option>
                  <option >ยาลดการอักเสบหรือยาแก้ไข</option>
                  <option >ยากำจัดพยาธิภายนอกหรือภายใน</option>
                  <option >ยากลุ่มฮอร์โมน</option>
                  <option >ยาสลบ</option>
                  <option >วิตามินแร่ธาต</option>
                  <option >ยาฆ่าเชื้อ</option>
                  <option >ยาทายาใช้ภายนอก</option>
                  <option >วัคซีนหรือสมุนไพร</option>
                </Select>
                </FormControl>
        </TableCell>
        <TableCell
          align="center"
          className={classes.tableRightBorder}
          style={{
            fontSize: "18px",
            width: "20%",
            margin: "0",
            padding: "5px",
          }}
        >
          <FormControl size="small"   style={{ width: "100%", margin: "0" }}>
           <Select
                   id="medic"
                  variant="outlined"
                  native
                  onChange={(event) => updataRows(event,index)}
                  value={i.medic}
                >
                  <option value="">เลือก</option>
                    {medicID.map((i,index)=>{return <option key={index}>{i.drugId}</option>})}
                </Select>
                </FormControl>
        </TableCell>
        <TableCell
          align="center"
          className={classes.tableRightBorder}
          style={{
            fontSize: "18px",
            width: "20%",
            margin: "0",
            padding: "5px",
          }}
        >
         <FormControl size="small"   style={{ width: "100%", margin: "0" }}>
           <Select
                   id="typeuse"
                  variant="outlined"
                  native
                  onChange={(event) => updataRows(event,index)}
                  value={i.typeuse}
                >
                  <option value="">เลือก</option>
                  <option >ฉีดใต้ผิว</option>
                  <option >ฉีดเข้ากล้ามเนื้อ</option>
                  <option >ทา</option>
                  <option >ราด</option>
                  <option >กิน</option>
                  <option >สอด</option>
                </Select>
                </FormControl>
        </TableCell>
        <TableCell
          align="center"
          className={classes.tableRightBorder}
          style={{
            fontSize: "18px",
            width: "10%",
            margin: "0",
            padding: "5px",
          }}
        >
          <TextField
          id="value"
            placeholder="กรอกปรืมาณยา"
            variant="outlined"
            onChange={(event) => updataRows(event,index)}
            value={i.value}
            size="small"
            style={{ width: "100%", margin: "0" }}
          />
        </TableCell>
        <TableCell
          align="center"
          className={classes.tableRightBorder}
          style={{
            fontSize: "18px",
            width: "20%",
            margin: "0",
            padding: "5px",
          }}
        >
        <TextField
          id="medicNote"
            placeholder="หมายเหตุ"
            variant="outlined"
            onChange={(event) => updataRows(event,index)}
            value={i.medicNote}
            size="small"
            style={{ width: "100%", margin: "0" }}
          />
           </TableCell>
      </TableRow>
    ));
  };


  const SaveData = () => {
    axios.post("https://aipcattle.herokuapp.com/treatment/" + props.posts.UID, {
      datediagnose: date||"",
      id:id||"",
      noti_treatment: 1,
      number_of_treatment: 0,
      operator: operator||"",
      recoder: recorder||"",
      sickness: sickness||"",
      timediagnose: time||"",
      drug: rows||"",
      note:note||""
    }).then(()=>{
      axios.post("https://aipcattle.herokuapp.com/treatment/noti/" + props.posts.UID+"/"+dateCheck, {
        date: dateCheck,id_cattle:id,type: "ติดตามการรักษา",
      }).then(()=>{
        alert("บันทึกสำเร็จ")
        window.location.reload();
      })
    })
  };

  const setItem = () => {
    setRows([...rows, { medic: "", typeuse: "", value: "",medicNote:"",medicGroup:"" }]);
  };



  return (
    <div  style={{ marginTop: "20px" }}>
      <Paper
        square
        className={classes.sizeTable}
        style={{ backgroundColor: "#F8F8F8",marginLeft:"15%" }}
      >
        <Paper variant="outlined" square className={classes.HeaderTable}>
          บันทึกการรักษา
        </Paper>
        <Paper
          style={{ padding: "20px", margin: "20px" }}
          variant="outlined"
          square
        >
          <Paper
            square
            elevation={0}
            style={{
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
                หมายเลขโค
              </Grid>{" "}
              <Grid item xs={12} md={4}>
                {" "}
                <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              getOptionSelected={(option, value) =>
                option.cattle_id === value.cattle_id
              }
              onChange={(event, newValue) => setSelectId(newValue)}
              options={top100Films.map((option) => option.cattle_id)}
              renderInput={(params) => (
                <TextField
                  placeholder="กรอกหมายเลขโค"
                  {...params}
                  size="small"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
              </Grid>{" "}
              <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
                วันที่ตรวจ
              </Grid>{" "}
              <Grid item xs={12} md={4}>
                <TextField
                value={date}
                  style={{ width: "100%" }}
                  type="date"
                  placeholder="Placeholder"
                  variant="outlined"
                  size="small"
                  onChange={e=>setdate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}  md={2}style={{ fontSize: "20px" }}>
                เวลา
              </Grid>{" "}
              <Grid item xs={12} md={4}>
                {" "}
                <TextField
              
                 onChange={e=>settime(e.target.value)}
                  placeholder="Placeholder"
                  variant="outlined"
                  size="small"
                  style={{ width: "100%" }}
                  type="time"
                />
              </Grid>{" "}
              <Grid item md={2} xs={12} style={{ fontSize: "20px" }}>
                วันติดตามผล
              </Grid>{" "}
              <Grid item xs={12} md={4}>
                <TextField
                value={dateCheck}
                  style={{ width: "100%" }}
                  type="date"
                  placeholder="Placeholder"
                  variant="outlined"
                  size="small"
                  onChange={e=>setdateCheck(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
                อาการ
              </Grid>{" "}
              <Grid item xs={12} md={4}>
                <TextField
               value={note}
                  placeholder="กรอกอาการ"
                  variant="outlined"
                  size="small"
                  style={{ width: "100%" }}
                  onChange={e=>setnote(e.target.value)}
                />
              </Grid>{" "}
              <Grid item xs={12} md={2}  style={{ fontSize: "20px" }}>
                ผลการวินิจฉัย
              </Grid>{" "}
              <Grid item  xs={12} md={4}>
                <TextField
                 value={sickness}
                
                  placeholder="กรอกชื่อโรค"
                  variant="outlined"
                  size="small"
               
                  onChange={e=>setsickness(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} md={2} style={{ fontSize: "20px" }}>
                ชื่อผู้บันทึก
              </Grid>{" "}
              <Grid item xs={12} md={4}>
                <TextField
                 value={recorder||""}
                  placeholder="กรอกชื่อโรค"
                  variant="outlined"
                  size="small"
                  style={{ width: "100%" }}
                  onChange={(e)=>setRecoder(e.target.value)}
                />
              </Grid>{" "}
              <Grid item xs={12} md={2}  style={{ fontSize: "20px" }}>
               ชื่อผู้วินิจฉัย
              </Grid>{" "}
              <Grid item  xs={12} md={4}>
                <TextField
               value={operator||""}
                  placeholder="กรอกอาการ"
                  variant="outlined"
                  size="small"
                  onChange={(e)=>setOperator(e.target.value)}
                  style={{ width: "100%" }}
                />
              </Grid>
             
            </Grid>
          </Paper>

          <Paper
            square
            style={{
              marginTop: "10px",
              padding: "15px",
              backgroundColor: "#F8F8F8",
            }}
            variant="outlined"
          >
            <Paper
              style={{ textAlign: "center", fontSize: "24px", padding: "10px" }}
              variant="outlined"
              square
            >
              รายการยา
            </Paper>
            <TableContainer style={{ marginTop: "10px" }}>
              <Table>
                <TableHead>
                  <TableRow style={{ backgroundColor: "#FFF" }}>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "20px", width: "10%" }}
                    >
                      รายการที่
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "20px", width: "20%" }}
                    >
                     หมวดหมู่
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "20px", width: "20%" }}
                    >
                      ยาที่ใช้
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "20px", width: "20%" }}
                    >
                      ลักษณะการใช้
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "20px", width: "10%" }}
                    >
                      ปริมาณ
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "20px", width: "20%" }}
                    >
                      หมายเหตุ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{AddTable()}</TableBody>
              </Table>
            </TableContainer>
            <Paper
              square
              elevation={0}
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
                }}
                onClick={() => setItem()}
              >
                เพิ่ม
              </Button>
            </Paper>
          </Paper>
        </Paper>
        <Paper square elevation={0} style={{ margin: "10px",backgroundColor:"#F8F8F8" }}>
          <Button
            style={{
              color: "#fff",
              backgroundColor: "#251CA6",
              fontSize: "20px",
              margin: "10px",
              marginLeft: "45%",
              width: "200px",
            }}
            onClick={() => SaveData()}
          >
            บันทึก
          </Button>
        </Paper>
      </Paper>
    </div>
  );
}

/*"top left bottom right"*/
