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
    //console.log(day+"/"+mount+"/"+years);
   
    if (Difference_In_Days >-1 && Difference_In_Days <1) {
      const set = {
        text: item.type+" "+item.id_cattle+"(วันนี้)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate: new Date(years, mount, day, 23, 59),
        alertTypeID: 3,
        linktype:item.type
       
      };

      data.push(set)
    }
    if (Difference_In_Days <=-1 && Difference_In_Days >-2) {
      const set = {
        text: item.type+" "+item.id_cattle+"(อีก1วัน)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate: new Date(years, mount, day, 23, 59),
        alertTypeID: 2,
        linktype:item.type
      };
      data.push(set)
    }
    if (Difference_In_Days <= -2 && Difference_In_Days >= -3) {
      const set = {
        text: item.type+" "+item.id_cattle+"(อีก2วัน)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate:new Date(years, mount, day, 23, 59),
        alertTypeID: 1,
        linktype:item.type
      };
      data.push(set)
    }
    if (Difference_In_Days < -3 && Difference_In_Days > -365) {
      const set = {
        text: item.type+" "+item.id_cattle+"(ยังไม่ถึงกำหนด)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate:new Date(years, mount, day, 23, 59),
        alertTypeID: 5,
        linktype:item.type
      };
      data.push(set)
    }
    if (Difference_In_Days >= 1) {
      const set = {
        text: item.type+" "+item.id_cattle+"(เลยกำหนด)",
        startDate: new Date( years, mount, day, 0, 0),
        endDate: new Date(years, mount, day, 23, 59),
        alertTypeID: 4,
        linktype:item.type
      };
      data.push(set)
    }
  });
  return(data)
};
