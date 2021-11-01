import React from 'react'
import './ShiftBox.css'
import Button from '@mui/material/Button';



function ShiftBox(props) {
    return (
        <div style={{}} className="container">
            <div className="rowOne">
                <p className = "date">{props.info.date}</p>
                <div className="details">
                    <p>{props.info.time}</p>
                    <p>{props.info.department}</p>
                </div>
                <p className = "pay">{props.info.pay}/hr</p>
            </div>
            <div className="rowTwo">
                <p className="hospital">{props.info.hospital}</p>
                <p className="rating">{props.info.rating}</p>
                <div className="address">
                    <p>{props.info.address1}</p>
                    <p>{props.info.address2}</p>
                </div>
                
            </div>
            <div className="buttons">
            {/* checks wheter decline button should be displayed*/}
              {props.decline?
                <Button style = {{borderWidth: "2px" ,borderColor: "#29334f", color:"#29334f", fontWeight:"bold"}}variant="outlined">Decline</Button>
              :<div/>}
                <Button style = {{backgroundColor: "#29334f", fontWeight:"bold"}}variant="contained">Apply</Button>
            </div>
        </div>
    )
}

export default ShiftBox
