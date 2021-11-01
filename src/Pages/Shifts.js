import React, { useEffect, useState } from 'react'
import ShiftBox from '../Components/ShiftBox'
import '../Styles/Shifts.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios'


export default function Shifts() {

    //stores the fetched job details
    const [info,setInfo] = useState(0)

    //Stores current page number
    const [page,setPage] = useState(0)

    //Stores total number of pages
    const [pages,setPages] = useState(0)

    //text for current date 
    const [dates, setDates] = useState("loading...")

    //Fetches data from the server
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

    //fetches data onload
    useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
            <div className="shiftText">
                <h1 className>Shifts</h1>
                <p>You've been invited</p>
            </div>
            {/* maps through invites and the displays them */}
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
            {/* maps through available jobs and the displays them */}
            {info.available?
                info.available[page].map(job => (
                    <ShiftBox decline={false} info={job}></ShiftBox>
                ))
              :<div/>}
            </div>

        </div>
    )
}
