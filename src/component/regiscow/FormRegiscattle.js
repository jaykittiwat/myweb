import React from "react";
import {
  Paper,
  FormGroup,
  FormLabel,
  TextField,
  Button,
  FormHelperText,Grid
} from "@material-ui/core";
import ImageUploader from "react-images-upload";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import firebase from "../../backEnd/firebase";
import axios from "axios";
const startStatecalf = {
  name_cow: "", //ชื่อ
  birth_chest_head_ratio: "", //รอบอกเกิด*
  birth_date: "", //วันเกิด*
  birth_weight: "", //น้ำหนักเกิด*
  breed: "", //พันธุ์*
  breed_method: "", //วิธีผสม*
  breeder: "", //เจ้าของ---
  cattle_id: "", //เลขโค*
  color: "", //สี*
  bigcorral: "", //โณงเรือน
  corral: "", //คอก*
  dam_id: "", //id แม่*
  herd_no: "", //ฝูง*
  number_of_breeding: 0, //จำนวนการผสมพันธุ์*
  owner: "", //เจ้าของ//เซดเอง//ชื่อนามกสุลของUID--
  process_date: "", //น่าจะวันที่บีันทึก--
  sex: "", //เพศ//BULLผู้/MISSเมีย*
  sire_id: "", //id พ่อ*
  status: " ", //สถานะ//ระบบเซต--
  wean_weight: "", //น้ำหนักล่าสุดsหลังอย่านม*
  wean_chest_head_ratio: "", //รอบออกล่าสุดหลังอย่านม
  wean_date: "", //วันอย่านม
  year_hip_hight: "", //ความสูงสะโพก1ปี
  year_weight: "", //น้ำหนักอายุ1ปี
};

export default function FormRegiscalf(props) {
  const [UID, setUID] = React.useState("");
  const [dataCattle, setDataCattle] = React.useState(startStatecalf);
  const [pictures, setpictures] = React.useState([]);
  const [picturesURL, setpicturesURL] = React.useState([
    "https://www.flaticon.com/svg/static/icons/svg/685/685686.svg",
  ]);
  const [color, setColor] = React.useState([]);
  const [strian, setStrian] = React.useState([]);
  const [bigcorral, setbigcorral] = React.useState([]);
  const [corral, setcorral] = React.useState([]);
  const [herd_no, setherd_no] = React.useState([]);
const [checkAge,setCheckAge] =React.useState("cattle")
const [dataCalf,setDataCalf]=React.useState({birth_weight:""})
const [ageShow,setAgeShow]=React.useState("")
  React.useEffect(() => {
    setUID(props.posts.UID);
    setColor(props.posts.color);
    setStrian(props.posts.strian);
    setbigcorral(props.posts.bigcorral)
    setcorral(props.posts.corral)
    setherd_no(props.posts.herd_no)
  }, [props]);

  const onDrop = (pictureFile, pictureDataURLs) => {
    setpictures(pictureFile);
    setpicturesURL(pictureDataURLs);
   
  };

  const saveDataCattleToDatabase = () => {
   
    if (pictures === []) {
      axios
        .post("http://localhost:4000/user/cow/registor/" + UID, dataCattle)
        .then(() => {
          alert("บันทึกสำเร็จ");
        })
        .then(() => {
          setDataCattle(startStatecalf);
        });
    }
    if (pictures !== []) {
      firebase
        .storage()
        .ref("Photo/" + UID + "/pedigree/")
        .child(dataCattle.cattle_id)
        .put(pictures[0])
        .then(() => {
          axios.post(
            "http://localhost:4000/user/cow/registor/" + UID,
            dataCattle
          );
        })
        .then(() => {
          alert("บันทึกสำเร็จ");
        })
        .then(() => {
          window.location.reload();
        });
    }
  };

  const saveDataCalfToDatabase = () => {
    if (pictures === []) {
      axios
        .post("http://localhost:4000/user/calf/registorCalf/" + UID, {
          birth_id: dataCattle.cattle_id,
          birth_weight: dataCattle.birth_weight,
          branding: false,
          breed: dataCattle.breed,
          color:dataCattle.color,
          dam_id: dataCattle.dam_id,
          horndetering: false,
          name_cattle: dataCattle.name_cow,
          sex: dataCattle.sex,
          wean: false,
          sire_id:dataCattle.sire_id,
        }
        ).then(() => {
          const setBranding = {
            birth_id: dataCattle.name_cow,
            dam_id: dataCattle.dam_id,
            datebran: "",
            note: "",
            operator: "",
            recoder: "",
            wid: "",
          };
          axios
            .post("http://localhost:4000/branding/" + UID, setBranding)
            .then(() => {
              const setHorndetering = {
                birth_id:dataCattle.name_cow,
                dam_id: dataCattle.dam_id,
                datedishorn: "",
                method: "",
                note: "",
                operator: "",
                recoder: "",
              };
              axios
                .post("http://localhost:4000/dishorn/" + UID, setHorndetering)
                .then(() => {
                 
                  const setWean = {
                    birth_id: dataCattle.name_cow,
                    dam_id: dataCattle.dam_id,
                    datewean: "",
                    note: "",
                    operator: "",
                    recoder: "",
                    wean_chest_head_ratio: "",
                    wean_hip_hight: "",
                    weanweight: "",
                  }
                  axios
                    .post("http://localhost:4000/wean/" + UID, setWean)
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
        .child(dataCattle.name_cow!==""?dataCattle.name_cow:dataCattle.cattle_id)
        .put(pictures[0])
        .then(() => {
          axios.post(
            "http://localhost:4000/user/calf/registorCalf/" + UID,{ birth_id: dataCattle.cattle_id,
            birth_weight: dataCattle.birth_weight,
            branding: false,
            breed: dataCattle.breed_method,
            color:dataCattle.color,
            dam_id: dataCattle.dam_id,
            horndetering: false,
            name_cattle: dataCattle.name_cow,
            sex: dataCattle.sex,
            wean: false,
            sire_id:dataCattle.sire_id,}
          ).then(() => {
            const setBranding = {
              birth_id: dataCattle.name_cow,
              dam_id: dataCattle.dam_id,
              datebran: "",
              note: "",
              operator: "",
              recoder: "",
              wid: "",
            };
            axios
              .post("http://localhost:4000/branding/" + UID, setBranding)
              .then(() => {
                const setHorndetering = {
                  birth_id:dataCattle.name_cow,
                  dam_id: dataCattle.dam_id,
                  datedishorn: "",
                  method: "",
                  note: "",
                  operator: "",
                  recoder: "",
                };
                axios
                  .post("http://localhost:4000/dishorn/" + UID, setHorndetering)
                  .then(() => {
                    const setWean = {
                      birth_id: dataCattle.name_cow,
                    dam_id: dataCattle.dam_id,
                    datewean: "",
                    note: "",
                    operator: "",
                    recoder: "",
                    wean_chest_head_ratio: "",
                    wean_hip_hight: "",
                    weanweight: "",
                    };
                    axios
                      .post("http://localhost:4000/wean/" + UID, setWean)
                      .then(() => {
                        setDataCattle(startStatecalf);
                      })
                      .then(() => {
                        alert("บันทึกสำเร็จ");
                      })
                      .then(() => {
                        setpictures([]);
                        setpicturesURL(["https://www.flaticon.com/svg/static/icons/svg/685/685686.svg",]);
                        setDataCattle(startStatecalf);
                      });
                  });
              });
          });
        })
        
    }
  };
  const save=()=>{
    if(checkAge==="cattle"){
      saveDataCattleToDatabase()
    }
    if(checkAge==="calf"){
      saveDataCalfToDatabase()
    }
    
  }

  const cattleAge= (e) =>{
    setDataCattle({ ...dataCattle,   birth_date: e.target.value })

    const today = new Date().getTime();
    const birthday = new Date( e.target.value ).getTime();
    const age_mili = Math.abs(today - birthday);

    let days = Math.floor(age_mili / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days -= years * 365;
    let months = Math.floor(days / 31);
    days -= months * 31;
  
    if(years<=1&&months<4){
      setCheckAge("calf")
      setAgeShow(years+"ปี "+months+"เดือน "+days+"วัน")
    }
    if(years>=1&&months>=4)
    {
      setCheckAge("cattle")
      setAgeShow(years+"ปี "+months+"เดือน "+days+"วัน")
    }

  }
  const calfState=()=>{
    return(<>     
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
        style={{ width: "250px", height: "250px" }}
      />
    </Paper>

    <ImageUploader
      withIcon={false}
      buttonText="อัปโหลดใบพันธุ์ประวัติ"
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    /></>)
  }
  const cattleState=()=>{
  return(<Grid container spacing={3}>
    <Grid item xs={12} md={6}>
   <FormGroup>
   
   <FormLabel style={{ color: "#000" }}>
     น้ำหนักตอนเกิด
   </FormLabel>
   <TextField
     onChange={(e) =>
       setDataCattle({ ...dataCattle, birth_weight: e.target.value })
     }
     value={dataCalf.birth_weight}
     variant="outlined"
     placeholder="กรอกน้ำหนัก"
     size="small"
   />
 </FormGroup>
 </Grid>
  <Grid item xs={12} md={6}> <FormGroup>
        <FormLabel style={{ color: "#000"}}>
        น้ำหนักอย่านม (กก.)
        </FormLabel>
        <TextField
          value={dataCattle.wean_weight}
          onChange={(e) =>setDataCattle({ ...dataCattle, wean_weight: e.target.value }) }
          variant="outlined"
          placeholder="กรอกน้ำหนัก"
          size="small"
        />
      </FormGroup></Grid>
  <Grid item xs={12} md={6}> <FormGroup>
        <FormLabel style={{ color: "#000" }}>
        น้ำหนักอายุ 1ปี (กก.)
        </FormLabel>
        <TextField
          onChange={(e) =>setDataCattle({ ...dataCattle,year_weight: e.target.value }) }
          value={dataCattle.year_weight}
          variant="outlined"
          placeholder="กรอกน้ำหนัก"
          size="small"
        />
      </FormGroup></Grid>
  <Grid item xs={12} md={6}>  <FormGroup>
        <FormLabel style={{ color: "#000"}}>
        ความสูงโพก 1ปี (ซม.)
        </FormLabel>
        <TextField
        onChange={(e) =>setDataCattle({ ...dataCattle,year_hip_hight: e.target.value }) }
        value={dataCattle.year_hip_hight}
          variant="outlined"
          placeholder="กรอกความสูง"
          size="small"
        />
      </FormGroup></Grid>
  <Grid item xs={12} md={6}>   <FormGroup>
        <FormLabel style={{ color: "#000"}}>
        ขนาดรอบอกตอนเกิด (ซม.) 
        </FormLabel>
        <TextField
           onChange={(e) =>setDataCattle({ ...dataCattle, birth_chest_head_ratio: e.target.value }) }
           value={dataCattle.birth_chest_head_ratio}
          variant="outlined"
          placeholder="กรอกขนาด"
          size="small"
        />
      </FormGroup></Grid>
  
      <Grid item xs={12} md={6}><FormGroup>
        <FormLabel style={{ color: "#000"}}>
        ขนาดรอบอกหลังอย่านม (ซม.)
        </FormLabel>
        <TextField
         onChange={(e) =>setDataCattle({ ...dataCattle, wean_chest_head_ratio: e.target.value }) }
         value={dataCattle.wean_chest_head_ratio}
          variant="outlined"
          placeholder="กรอกขนาด"
          size="small"
        />
      </FormGroup>  </Grid>
      <Grid item xs={12} md={6}> <FormGroup>
        <FormLabel style={{ color: "#000"}}>
          วันที่หย่านม
        </FormLabel>
        <TextField
        onChange={(e) =>setDataCattle({ ...dataCattle, wean_date: e.target.value }) }
        value={dataCattle.wean_date}
          type="date"
          variant="outlined"
          size="small"
        />
      </FormGroup> </Grid>
      <Grid item xs={12} md={6}>    <FormGroup>
        <FormControl size="small" style={{ minWidth: "100%" }}>
          <FormLabel style={{ color: "#000" }}>
            โรงเรือน
          </FormLabel>
          <Select variant="outlined" native    
          onChange={(e) =>setDataCattle({ ...dataCattle, bigcorral: e.target.value }) }
        value={dataCattle.bigcorral}>
            <option value="">เลือก</option>
            {bigcorral.map((item, index) => (
              <option key={index}>{item.bigcorral}</option>
            ))}
          </Select>
        
        </FormControl>
      </FormGroup>
 </Grid>
      <Grid item xs={12} md={6}>  <FormGroup>
        <FormControl size="small" style={{ minWidth: "100%" }}>
          <FormLabel style={{ color: "#000" }}>
            คอก
          </FormLabel>
          <Select variant="outlined" native onChange={(e) =>setDataCattle({ ...dataCattle, corral: e.target.value }) }
        value={dataCattle.corral}>
            <option value="">เลือก</option>
            {corral.map((item, index) => (
              <option key={index}>{item.corral}</option>
            ))}
          </Select>
     
        </FormControl>
      </FormGroup> </Grid>
     
      <Grid item xs={12} md={6}> <FormGroup>
        <FormControl size="small" style={{ minWidth: "100%" }}>
          <FormLabel style={{ color: "#000"}}>
            ฝูง
          </FormLabel>
          <Select variant="outlined"  native onChange={(e) =>setDataCattle({ ...dataCattle, herd_no: e.target.value }) }
        value={dataCattle.herd_no}>
            <option value="">เลือก</option>
            {herd_no.map((item, index) => (
              <option key={index}>{item.herd_num}</option>
            ))}
          </Select>
        </FormControl>
      </FormGroup> </Grid> 
      <Paper
        style={{ width: "100%", textAlign: "center" }}
        elevation={0}
      >
        <img
          src={picturesURL}
          alt="imgpedigree"
          style={{ width: "250px", height: "250px" }}
        />
      </Paper>

      <ImageUploader
        withIcon={false}
        buttonText="อัปโหลดใบพันธุ์ประวัติ"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
  </Grid>)
  }
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
        ลงทะเบียนโค
      </Paper>


      <Grid container spacing={3}>
  <Grid item xs={12} md={6}>  <FormGroup>
        <FormLabel style={{ color: "#000", marginTop: "20px" }}>
          ชื่อโค
        </FormLabel>
        <TextField 
        value={dataCattle.name_cow}
        variant="outlined" 
        placeholder="กรอกชื่อโค" 
        size="small"  
        onChange={(e) =>setDataCattle({ ...dataCattle, name_cow: e.target.value }) }
        />
      </FormGroup></Grid>
  <Grid item xs={12}md={6}>  <FormGroup>
        <FormLabel style={{ color: "#000" ,marginTop: "20px" }}>
          หมายเลขประจำตัวสัตว์ เช่น(์NID/RFID/Microchip/เบอร์หู)
        
        </FormLabel>
        <TextField
        value={dataCattle.cattle_id}
          variant="outlined"
          placeholder="กรอกหมายเลขโค"
          size="small"
          onChange={(e) =>setDataCattle({ ...dataCattle, cattle_id: e.target.value.replace(/[/]/gi, ' ') }) }
        />
      </FormGroup>
</Grid>

  <Grid item xs={12} md={6}> <FormGroup>
        <FormControl size="small" style={{ minWidth: "100%" }}>
          <FormLabel style={{ color: "#000" }}>
            เพศ
          </FormLabel>
       
          <Select value={dataCattle.sex} variant="outlined" native   onChange={(e) =>setDataCattle({ ...dataCattle, sex: e.target.value }) } >
            <option value="">เลือก</option>
            <option value="BULL">ผู้</option>
            <option value="MISS">เมีย</option>
          </Select>
        </FormControl>
      </FormGroup></Grid>
  <Grid item xs={12} md={6}>   <FormGroup>
        <FormControl size="small" style={{ minWidth: "100%" }}>
          <FormLabel style={{ color: "#000"}}>
            วิธีผสม
          </FormLabel>
          <Select variant="outlined" native onChange={(e) =>setDataCattle({ ...dataCattle,  breed_method: e.target.value }) }>
            <option value="ไม่ระบุ">เลือก </option>
            <option value="AI">น้ำเชื้อ</option>
            <option value="NT">พ่อพันธุ์</option>
            <option>ฝากถ่ายตัวอ่อน</option>
         

          </Select>
        </FormControl>
      </FormGroup></Grid>
  <Grid item xs={12} md={6}>
      <FormGroup>
        <FormControl size="small" style={{ minWidth: "100%" }}>
          <FormLabel style={{ color: "#000" }}>
            สี{" "}
          </FormLabel>
          <Select value={dataCattle.color} variant="outlined" native onChange={(e) =>setDataCattle({ ...dataCattle,  color: e.target.value }) } >
            <option value="">เลือก</option>
            {color.map((item, index) => (
              <option key={index}>{item.color}</option>
            ))}
          </Select>
       
        </FormControl>
      </FormGroup>
</Grid>
  <Grid item xs={12} md={6}> <FormGroup>
        <FormControl size="small" style={{ minWidth: "100%" }}>
          <FormLabel style={{ color: "#000"}}>
            สายพันธุ์
          </FormLabel>
          <Select variant="outlined" native onChange={(e) =>setDataCattle({ ...dataCattle,  breed: e.target.value }) }>
            <option value="">เลือก</option>
            {strian.map((item, index) => (
              <option key={index}>{item.strian}</option>
            ))}
          </Select>
        
        </FormControl>
      </FormGroup>

    </Grid>
    <Grid item xs={12} md={6}>
      <FormGroup>
        <FormLabel style={{ color: "#000",}}>
          พ่อพันธุ์
        </FormLabel>
        <TextField
        value={dataCattle.sire_id}
        onChange={(e) =>setDataCattle({ ...dataCattle, sire_id: e.target.value }) }
          variant="outlined"
          placeholder="กรอกหมายเลขโค"
          size="small"
        />
      </FormGroup></Grid>
    <Grid item xs={12} md={6}>  <FormGroup>
        <FormLabel style={{ color: "#000" }}>
          แม่พันธุ์
        </FormLabel>
        <TextField
         value={dataCattle.dam_id}
         onChange={(e) =>setDataCattle({ ...dataCattle, dam_id: e.target.value }) }
          variant="outlined"
          placeholder="กรอกหมายเลขโค"
          size="small"
        />
      </FormGroup></Grid>
    <Grid item xs={12} md={6}>
      <FormGroup>
        <FormLabel style={{ color: "#000" }}>
        ชื่อผู้ผสมพันธุ์
        </FormLabel>
        <TextField
        value={dataCattle.breeder}
        onChange={(e) =>setDataCattle({ ...dataCattle, breeder: e.target.value }) }
          variant="outlined"
          placeholder="กรอกชื่อ"
          size="small"
        />
      </FormGroup></Grid>
      <Grid item xs={12} md={6}>  <FormGroup>
        <FormLabel style={{ color: "#000" }}>
          วันที่เกิด
        </FormLabel>
        <TextField
        type="date"
          variant="outlined"
          size="small"
          onChange={(e) =>cattleAge(e) }
        />
      </FormGroup>
 </Grid>
</Grid>


    

    
     

   

     


    

    







     {checkAge===""?"":checkAge==="cattle"?cattleState():calfState()}
      <Paper
        elevation={0}
        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "250px", margin: "10px", outline: "none" }}
          onClick={()=>save()}
        >
          บันทึก
        </Button>
      </Paper>
    </Paper>
  );
}
