import React from 'react';
const newDate= new Date();
newDate.setHours(1, 0, 0)//

class DataCell extends React.PureComponent {

  render() {
    const { data: {  text } } = this.props;

  
    return (
   
        <div  style={{fontSize:"22px",color:"#1b76b0"}}>
          {text}
        </div>
      
    );
  }
}

export default DataCell;