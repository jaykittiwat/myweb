export const setPicker = (props) => {
  const newDate = new Date();
  const data = [];
  props.map((item) => {
    let setDate = new Date(item.date);
    let day = setDate.getDate();
    let mount = setDate.getMonth();
    let years = setDate.getFullYear();
    let Difference_In_Time = newDate.getTime() - setDate.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    //console.log(item); //ติดไม่ลบคือยังไม่ถึงกำหนด
    if (Difference_In_Days === 0) {
      const set = {
        text: item.type,
        startDate: new Date( years, mount, day, 0, 0),
        endDate: new Date(years, mount, day, 23, 59),
        alertTypeID: 3,
      };
      data.push(set)
    }
    if (Difference_In_Days < 0 && Difference_In_Days >= -1) {
      const set = {
        text: item.type+"(อีก1วัน)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate: new Date(years, mount, day, 23, 59),
        alertTypeID: 2,
      };
      data.push(set)
    }
    if (Difference_In_Days < -1 && Difference_In_Days <= -2) {
      const set = {
        text: item.type+"(อีก2วัน)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate:new Date(years, mount, day, 23, 59),
        alertTypeID: 1,
      };
      data.push(set)
    }
    if (Difference_In_Days > 0) {
      const set = {
        text: item.type+"(เลยกำหนด)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate: new Date(years, mount, day, 23, 59),
        alertTypeID: 4,
      };
      data.push(set)
    }
  });
  return(data)
};
