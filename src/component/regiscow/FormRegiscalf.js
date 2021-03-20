import React from "react";
import {
  Paper,
  FormGroup,
  FormLabel,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import ImageUploader from "react-images-upload";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import firebase from "../../backEnd/firebase";
import axios from "axios";
import img from"../Img/picture.png"

const startStatecalf = {
  birth_id: "",
  birth_weight: "",
  branding: false,
  breed: "",
  color: "",
  dam_id: "",
  horndetering: false,
  name_cattle: "",
  sex: "",
  wean: false,
  sire_id: "",
};

export default function FormRegiscalf(props) {
  const [UID, setUID] = React.useState("");
  const [dataCalf, setDataCalf] = React.useState(startStatecalf);
  const [pictures, setpictures] = React.useState([]);
  const [picturesURL, setpicturesURL] = React.useState([
    img,
  ]);
  const [color, setColor] = React.useState([]);
  const [strian, setStrian] = React.useState([]);

  React.useEffect(() => {
    setUID(props.posts.UID);
    setColor(props.posts.color);
    setStrian(props.posts.strian);
  }, [props]);

  const onDrop = (pictureFile, pictureDataURLs) => {
    setpictures(pictureFile);
    setpicturesURL(pictureDataURLs);
  };
  const saveDataCalfToDatabase = () => {
    if (pictures === []) {
      axios
        .post("https://aipcattle.herokuapp.com/user/calf/registorCalf/" + UID, dataCalf)
        .then(() => {
          const setBranding = {
            birth_id: dataCalf.birth_id,
            dam_id: dataCalf.dam_id,
            datebran: "",
            note: "",
            operator: "",
            recoder: "",
            wid: "",
          };
          axios
            .post("https://aipcattle.herokuapp.com/branding/" + UID, setBranding)
            .then(() => {
              const setHorndetering = {
                birth_id: dataCalf.birth_id,
                dam_id: dataCalf.dam_id,
                datedishorn: "",
                method: "",
                note: "",
                operator: "",
                recoder: "",
              };
              axios
                .post("https://aipcattle.herokuapp.com/dishorn/" + UID, setHorndetering)
                .then(() => {
                 
                  const setWean = {
                    birth_id: dataCalf.birth_id,
                    dam_id: dataCalf.dam_id,
                    datewean: "",
                    note: "",
                    operator: "",
                    recoder: "",
                    wean_chest_head_ratio: "",
                    wean_hip_hight: "",
                    weanweight: "",
                  }
                  axios
                    .post("https://aipcattle.herokuapp.com/wean/" + UID, setWean)
                    .then(() => {
                      setDataCalf(startStatecalf);
                    })
                    .then(() => {
                      alert("บันทึกสำเร็จ");
                    })
                    .then(() => {
                      setpictures([]);
                      setpicturesURL(["https://www.flaticon.com/svg/static/icons/svg/685/685686.svg",]);
                      setDataCalf(startStatecalf);
                    });
                });
            });
        });
    }
    if (pictures !== []) {
      firebase
        .storage()
        .ref("Photo/" + UID + "/pedigree/")
        .child(dataCalf.birth_id)
        .put(pictures[0])
        .then(() => {
          axios.post(
            "https://aipcattle.herokuapp.com/user/calf/registorCalf/" + UID,dataCalf
          ).then(() => {
            const setBranding = {
              birth_id: dataCalf.birth_id,
              dam_id: dataCalf.dam_id,
              datebran: "",
              note: "",
              operator: "",
              recoder: "",
              wid: "",
            };
            axios
              .post("https://aipcattle.herokuapp.com/branding/" + UID, setBranding)
              .then(() => {
                const setHorndetering = {
                  birth_id: dataCalf.birth_id,
                  dam_id: dataCalf.dam_id,
                  datedishorn: "",
                  method: "",
                  note: "",
                  operator: "",
                  recoder: "",
                };
                axios
                  .post("https://aipcattle.herokuapp.com/dishorn/" + UID, setHorndetering)
                  .then(() => {
                    const setWean = {
                      birth_id: dataCalf.birth_id,
                      dam_id: dataCalf.dam_id,
                      datewean: "",
                      note: "",
                      operator: "",
                      recoder: "",
                      wean_chest_head_ratio: "",
                      wean_hip_hight: "",
                      weanweight: "",
                    };
                    axios
                      .post("https://aipcattle.herokuapp.com/wean/" + UID, setWean)
                      .then(() => {
                        setDataCalf(startStatecalf);
                      })
                      .then(() => {
                        alert("บันทึกสำเร็จ");
                      })
                      .then(() => {
                        setpictures([]);
                        setpicturesURL(["https://www.flaticon.com/svg/static/icons/svg/685/685686.svg",]);
                        setDataCalf(startStatecalf);
                      });
                  });
              });
          });
        })
        
    }
  };

  return (
    <Paper
      className="container"
      style={{ padding: "20px", marginTop: "20px" }}
      elevation={3}
    >
      <Paper
        style={{ width: "100%", textAlign: "center", fontSize: "25px" }}
        elevation={0}
      >
        ลงทะเบียนลูกโค
      </Paper>

      <FormGroup>
        <FormLabel style={{ color: "#000", marginTop: "20px" }}>
          ชื่อโค
        </FormLabel>
        <TextField
          value={dataCalf.name_cattle}
          variant="outlined"
          placeholder="กรอกชื่อโค"
          size="small"
          onChange={(e) =>
            setDataCalf({ ...dataCalf, name_cattle: e.target.value })
          }
        />
      </FormGroup>
      <FormGroup>
        <FormLabel style={{ color: "#000", marginTop: "20px" }}>
          หมายเลขโค
        </FormLabel>
        <TextField
          onChange={(e) =>
            setDataCalf({ ...dataCalf, birth_id: e.target.value })
          }
          value={dataCalf.birth_id}
          variant="outlined"
          placeholder="กรอกหมายเลขโค"
          size="small"
        />
      </FormGroup>
      <FormGroup>
        <FormControl size="small" style={{ minWidth: "95%" }}>
          <FormLabel style={{ color: "#000", marginTop: "20px" }}>
            เพศ
          </FormLabel>
          <Select
            value={dataCalf.sex}
            variant="outlined"
            native
            onChange={(e) => setDataCalf({ ...dataCalf, sex: e.target.value })}
          >
            <option value="">เลือก</option>
            <option value="BULL">ผู้</option>
            <option value="MISS">เมีย</option>
          </Select>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl size="small" style={{ minWidth: "95%" }}>
          <FormLabel style={{ color: "#000", marginTop: "20px" }}>
            สี{" "}
          </FormLabel>
          <Select
            value={dataCalf.color}
            variant="outlined"
            native
            onChange={(e) =>
              setDataCalf({ ...dataCalf, color: e.target.value })
            }
          >
            <option value="">เลือก</option>
            {color.map((item, index) => (
              <option key={index}>{item.color}</option>
            ))}
          </Select>
          <FormHelperText>
            หมายเหตุ:ตั้งค่าสี ไปที่ตั้งค่าฟาร์ม / ไปที่ตั้งค่าระบบฟาร์ม
          </FormHelperText>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormControl size="small" style={{ minWidth: "95%" }}>
          <FormLabel style={{ color: "#000", marginTop: "20px" }}>
            สายพันธุ์
          </FormLabel>
          <Select
            value={dataCalf.breed}
            variant="outlined"
            native
            onChange={(e) =>
              setDataCalf({ ...dataCalf, breed: e.target.value })
            }
          >
            <option value="">เลือก</option>
            {strian.map((item, index) => (
              <option key={index}>{item.strian}</option>
            ))}
          </Select>
          <FormHelperText>
            หมายเหตุ:ตั้งค่าสายพันธุ์ ไปที่ตั้งค่าฟาร์ม / ไปที่ตั้งค่าระบบฟาร์ม
          </FormHelperText>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <FormLabel style={{ color: "#000", marginTop: "20px" }}>
          พ่อพันธุ์
        </FormLabel>
        <TextField
          onChange={(e) =>
            setDataCalf({ ...dataCalf, sire_id: e.target.value })
          }
          value={dataCalf.sire_id}
          variant="outlined"
          placeholder="กรอกหมายเลขโค"
          size="small"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel style={{ color: "#000", marginTop: "20px" }}>
          แม่พันธุ์
        </FormLabel>
        <TextField
          onChange={(e) => setDataCalf({ ...dataCalf, dam_id: e.target.value })}
          value={dataCalf.dam_id}
          variant="outlined"
          placeholder="กรอกหมายเลขโค"
          size="small"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel style={{ color: "#000", marginTop: "20px" }}>
          น้ำหนักตอนเกิด
        </FormLabel>
        <TextField
          onChange={(e) =>
            setDataCalf({ ...dataCalf, birth_weight: e.target.value })
          }
          value={dataCalf.birth_weight}
          variant="outlined"
          placeholder="กรอกน้ำหนัก"
          size="small"
        />
      </FormGroup>
      <Paper
        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
        elevation={0}
      >
        <img
          src={picturesURL}
          alt="imgpedigree"
          style={{ width: "200px", height: "200px" }}
        />
      </Paper>

      <ImageUploader
        withIcon={false}
        buttonText="อัปโหลดใบพันธุ์ประวัติ"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <Paper
        elevation={0}
        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "250px", margin: "10px", outline: "none" }}
          onClick={saveDataCalfToDatabase}
        >
          บันทึก
        </Button>
      </Paper>
    </Paper>
  );
}
