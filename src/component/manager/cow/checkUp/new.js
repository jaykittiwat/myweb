
 /* const saveDataClave = (daysync,dayClave, beforeDayClave, afterDayClave) => {
    const x = selected.length;
    for (let a = 0; a < x; a++) {
      axios
        .post(
          "http://localhost:4000/cattle/status/" + UID + "/" + selected[a],
          { status: "ตรวจท้องแล้ว", process_date: dateCheckup }
        )
        .then(() => {
          axios.post(
            "http://localhost:4000/notification/" + UID + "/" + beforeDayClave[a],
            {
              date: beforeDayClave[a],
              id_cattle:beforeDayClave[a],
              type: "วันคลอด"
            }
          );
        }).then(()=>{
          axios.delete(
            "http://localhost:4000/notification/delete/" +
              UID +
              "/" +
              dateNoti[a].date +
              "/" +
              keyDateNoti[a]
          ).then(()=>{
            axios.post("http://localhost:4000/history/" + UID, {
              dam_id: selectedDamId[a],
              date: selectedDate,
              type: "ตรวจท้อง"
            });
          }).then(()=>{
            axios.post("http://localhost:4000/abdominal/" + UID, {
              alert_after_7D: beforeDayClave[a] ,
              alert_befor_7D:afterDayClave[a] ,
              alert_sync:daysync,   
              calve_date:dayClave[a] ,  
              dam_id: selectedDamId[a],   
              dateabd: dateNoti[a].date ,      //วันที่ท้อง
              not_pregnant_noti:Number_daySync ,  //18วันถ้าไม่ท้อง         
              note:note ,           
              operator:operator ,             
              pregnant_noti:Number_dayClave ,  //198วันคลอด          
              recoder:recoder ,            
              result:theCheckUp ,
              timeabd: time,
            })
          })
        })
    }
  };

  const saveDataNoClave = (daysync,dayClave, beforeDayClave, afterDayClave) => {
    const x = selected.length;
    for (let a = 0; a < x; a++) {
      axios.post(
        "http://localhost:4000/cattle/status/" + UID + "/" + selected[a],
        { status: "ตรวจท้องแล้ว", process_date: dateCheckup }
      );
    }
  };
*/