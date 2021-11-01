import React, { useEffect, useState } from 'react'
import ShiftBox from '../Components/ShiftBox'
import '../Styles/Shifts.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'


export default function Shifts() {

    const [info,setInfo] = useState(0)

    const [page,setPage] = useState(0)

    const [pages,setPages] = useState(0)

    const [dates, setDates] = useState("loading...")

    const fetchData = () =>  {
        axios("http://localhost:5000/")
        .then((response => {
            setInfo(response.data)
            setPages(response.data.available.length -1)
            setDates(response.data.dates)
            console.log(response.data.available.length -1)
        }))
    }

    const handleClickForward= () => {
        console.log(page,pages)
        if(page + 1 <= pages){
            setPage(page + 1)
        }
        console.log(page,pages)
    }

    const handleClickBackward= () => {
        console.log(page,pages)
        if(page - 1 >=0){
            setPage(page - 1)
        }
        console.log(page,pages)
    }



    useEffect(() => {
        fetchData();
        
      }, []);

    return (
        <div>
            <div className="shiftText">
                <h1 className>Shifts</h1>
                <p>You've been invited</p>
            </div>
            {info.invites?
                info.invites.map(job => (
                    <ShiftBox decline={true} info={job}></ShiftBox>
                ))
              :<div/>}
            
            <div className="dateArrow">
                <ArrowBackIosIcon onClick={handleClickBackward}></ArrowBackIosIcon>
                <p>{dates[page]}</p>
                <ArrowForwardIosIcon onClick={handleClickForward}></ArrowForwardIosIcon>
            </div>
            <div className="shiftItem">
            {info.available?
                info.available[page].map(job => (
                    <ShiftBox decline={false} info={job}></ShiftBox>
                ))
              :<div/>}
            </div>

        </div>
    )
}
