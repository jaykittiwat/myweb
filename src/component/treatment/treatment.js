//โมดูลการรักษา
import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from "./../../demo";
import TableTeatment from "./tableTreatment";
import axios from "axios";
import firebase from "../../backEnd/firebase";
class Treatment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading: false,
      cattle_id: [],
      calf_id: [],
      Allcow: [],
      setAllcow: [],
      drug: [],
    fname:""
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        axios
          .get("https://aipcattle.herokuapp.com/user/logIn/" + user.email)
          .then((res) => {
            this.setState({ ...this.state,  UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm,fname:res.data[0].fname });
          })
          .then(() => {
            axios
              .get("https://aipcattle.herokuapp.com/cattle/showAll/" + this.state.UID)
              .then((res) => {
                this.setState({ ...this.state, cattle_id: res.data[1] });
              })
              .then(() => {
                axios
                  .get(
                    "https://aipcattle.herokuapp.com/calf/calfshowAll/" + this.state.UID
                  )
                  .then((res) => {
                    this.setState({ ...this.state, calf_id: res.data[1] });
                  })
                  .then(() => {
                    const children = this.state.cattle_id.concat(
                      this.state.calf_id
                    );
                    this.setState({ ...this.state, Allcow: children });
                  })
                  .then(() => {
                    const setId = [];
                    this.state.Allcow.map((item) => {
                      const validKeys = ["cattle_id", "birth_id"];
                      Object.keys(item).forEach(
                        (key) => validKeys.includes(key) || delete item[key]
                      );
                      const key = "birth_id";
                      item["cattle_id"] = item[key]
                        ? item[key]
                        : item["cattle_id"];
                      delete item[key];
                     return setId.push(item);
                    });
                    this.setState({ ...this.state, setAllcow: setId });
                  })
                  .then(async() => {
                    const dr = await axios.get(
                      "https://aipcattle.herokuapp.com/settingdrug/drug/" +
                        this.state.UID
                    );
                    const vac = await axios.get(
                      "https://aipcattle.herokuapp.com/settingvaccine/vaccine/" + this.state.UID
                    );
                    const children = dr.data[1].concat(vac.data[1])
                    const Medicname = [];
                    children.map((item) => {
                      const validKeys = ["common_drug", "common_vaccine"];
                      Object.keys(item).forEach(
                        (key) => validKeys.includes(key) || delete item[key]
                      );
                      const key = "common_drug";
                      item["drugId"] = item[key]? item[key]: item["common_vaccine"];
                      item[key]?delete item[key]: delete item["common_vaccine"]
                      delete item[key];
                   return   Medicname.push(item);
                    });
                    this.setState({...this.state,drug:Medicname,loading:false})
                  })
              });
          });
      }
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <HeaderLogin />
        </div>
        <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>
        <TableTeatment posts={this.state} />
      </div>
    );
  }
}
export default Treatment;
