import React from "react";
import {Table,TableBody,Button,FormGroup,Select,FormControl,TextField, Paper,TableRow,TableHead, TableContainer,TableCell,Dialog} from "@material-ui/core";
import update from "immutability-helper";
import axios from "axios";
export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [numberCalf, setNumberClaf] = React.useState([]);
  const [UID, setUID] = React.useState("");
  const [dateofClave, setDateofClave] = React.useState("");
  const [timeClave, setTimeClave] = React.useState("");
  const [dateHeal, setDateHeal] = React.useState("");
  const [dateFatten, setDateFatten] = React.useState("");
  const [recorder, setRecorder] = React.useState("");
  const [oparator, setOparator] = React.useState("");
  const [node, setNode] = React.useState("");
  const [keysDateNotiCattle, setKeysDateNotiCattle] = React.useState([]);
  const [Rows, setRows] = React.useState([]); //ข้อมูลโค
  const [keycattle, setKeycattle] = React.useState([]);
  const [selectedIndexMom, setSelectefIndexMom] = React.useState(null);
  const [Count_calf, setCount_calf] = React.useState(null);
  const [dam_id, setDam_id] = React.useState("");
  const [sire_id, setSir_id] = React.useState("");
  const [dataNoti, setDataNoti] = React.useState([]);
  /*const handleClickOpen = () => {
    setOpen(true);
  };*/

  const handleClose = () => {
    props.BackFormdialog(false);
    setOpen(false);
  };
  React.useEffect(() => {
    setOpen(props.OPEN);
    setNumberClaf(props.NUMBERCALF);
    setUID(props.UID);
    setDateofClave(props.dateOfClave);
    setTimeClave(props.timeClave);
    setDateHeal(props.dateHeal);
    setDateFatten(props.dateFatten);
    setRecorder(props.recorder);
    setOparator(props.oparator);
    setNode(props.node);
    setKeysDateNotiCattle(props.keysDateNotiCattle);
    setRows(props.Rows);
    setKeycattle(props.keycattle);
    setSelectefIndexMom(props.indexOfmom);
    setCount_calf(props.countCalf);
    setDam_id(props.damOfclaf);
    setSir_id(props.sirOfclaf);
    setDataNoti(props.dataNoti);
  }, [props]);

  const recordDataOfCalf = (event, i) => {
    const v = event.target.value;
    const key = event.target.id;
    const collection = numberCalf; //[{key:value,key:value},{key:value,key:value},{key:value,key:value}]
    const Indexcollection = collection[i]; //[index]:{key:value,key:value}
    const newObj = update(Indexcollection, { [key]: { $set: v } });
    const newCollection = update(collection, { $splice: [[i, 1, newObj]] });
    setNumberClaf(newCollection);
  };

  const saveData = () => {
    axios
      .post(
        "http://localhost:4000/cattle/status/" +
          UID +
          "/" +
          keycattle[selectedIndexMom],
        { status: "คลอดแล้ว", process_date: dateofClave } //ไม่มีปัญหา
      )
      .then(() => {
        axios.post("http://localhost:4000/history/" + UID, {
          dam_id: Rows[selectedIndexMom].cattle_id, //Rows[selectedIndexMom].id_cattle ไม่มา
          date: dateofClave,
          type: "คลอดแล้ว"
        });
      })
      .then(() => {
        axios.post("http://localhost:4000/delivery/" + UID, {
          count_calf: Count_calf,
          dam_id: dam_id,
          date: dateofClave,
          operator: oparator,
          recoder: recorder,
          sire_id: sire_id,
          time: timeClave,
          node: node
        });
      })
      .then(() => {
        axios.post(
          "http://localhost:4000/notification/" + UID + "/" + dateFatten,
          {
            date: dateFatten,
            id_cattle: Rows[selectedIndexMom].cattle_id, //ไม่มา
            type: "บำรุงแม่พันธุ์"
          }
        );
      })
      .then(() => {
        axios.post(
          "http://localhost:4000/notification/" + UID + "/" + dateHeal,
          {
            date: dateHeal,
            id_cattle: Rows[selectedIndexMom].cattle_id, //ไม่มา
            type: "รักษาหลังคลอด"
          }
        );
      })
      .then(() => {
        axios.delete(
          "http://localhost:4000/notification/delete/" +
            UID +
            "/" +
            dataNoti[selectedIndexMom].date +
            "/" +
            keysDateNotiCattle[selectedIndexMom]
        );
      })
      .then(async () => {
        //ลงทะเบียนลูกโค
        for (let i = 0; i < numberCalf.length; i++) {
          await axios.post("http://localhost:4000/user/calf/registorCalf/" + UID,numberCalf[i]);
          await axios.post("http://localhost:4000/branding/" + UID,  { birth_id:numberCalf[i].birth_id,dam_id:numberCalf[i].dam_id , datebran: "",note: "",operator: "", recoder: "",wid: "",})
          await axios.post("http://localhost:4000/dishorn/" + UID, {birth_id:numberCalf[i].birth_id,dam_id:numberCalf[i].dam_id,datedishorn: "",method: "",note: "",operator: "",recoder: "",})
          await  axios.post("http://localhost:4000/wean/" + UID,{ birth_id:numberCalf[i].birth_id,dam_id:numberCalf[i].dam_id,datewean: "",note: "",operator: "",recoder: "",wean_chest_head_ratio: "",wean_hip_hight: "",weanweight: "",
          })
        }
      }).then(()=>{
        alert("บันทึกสำเร็จ");
        window.location.reload();
      });
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      <Paper elevation={0} style={{ marginTop: "20px", textAlign: "center" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">ตัวที่</TableCell>
                <TableCell align="center">หมายเลขโคแรกเกิด</TableCell>
                <TableCell align="center">เพศ</TableCell>
                <TableCell align="center">สายพันธุ์</TableCell>
                <TableCell align="center">สี</TableCell>
                <TableCell align="center">น้ำหนักแรกเกิด(Kg.)</TableCell>
                <TableCell align="center">แม่พันธุ์</TableCell>
                <TableCell align="center">พ่อพันธุ์</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {numberCalf.map((number, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      <TextField
                        value={numberCalf[index].birth_id}
                        onChange={event => recordDataOfCalf(event, index)}
                        id="birth_id"
                        variant="outlined"
                        size="small"
                        style={{ width: "170px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <FormGroup>
                        <FormControl
                          value={numberCalf[index].sex}
                          onChange={event => recordDataOfCalf(event, index)}
                          size="small"
                        >
                          <Select id="sex" variant="outlined" native>
                            <option value=" ">เลือก</option>
                            <option value="BULL">ผู้</option>
                            <option value="MISS">เมีย</option>
                          </Select>
                        </FormControl>
                      </FormGroup>
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        id="breed"
                        value={numberCalf[index].breed}
                        onChange={event => recordDataOfCalf(event, index)}
                        variant="outlined"
                        size="small"
                        style={{ width: "170px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        id="color"
                        value={numberCalf[index].color}
                        onChange={event => recordDataOfCalf(event, index)}
                        
                        variant="outlined"
                        size="small"
                        style={{ width: "170px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        id="birth_weight"
                        value={numberCalf[index].birth_weight}
                        onChange={event => recordDataOfCalf(event, index)}
                        variant="outlined"
                        size="small"
                        style={{ width: "170px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        id="dam_id"
                        value={numberCalf[index].dam_id}
                        onChange={event => recordDataOfCalf(event, index)}
                        variant="outlined"
                        size="small"
                        style={{ width: "170px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        id="sire_id"
                        value={numberCalf[index].sire_id}
                        onChange={event => recordDataOfCalf(event, index)}
                        variant="outlined"
                        size="small"
                        style={{ width: "170px" }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "150px", outline: "none", margin: "10px" }}
          onClick={() => saveData()}
        >
          บันทึก
        </Button>{" "}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ width: "150px", outline: "none", margin: "10px" }}
          onClick={() => handleClose()}
        >
          ยกเลิก
        </Button>
      </Paper>
    </Dialog>
  );
}
