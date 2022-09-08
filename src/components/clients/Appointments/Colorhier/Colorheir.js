import React, { useState } from "react";
import DatePicker from "react-datepicker";
import colorhier from '../../../Images/colorhier.jpg'
import "react-datepicker/dist/react-datepicker.css";
// import Calendar from "react-calendar";
export default function Colorheir() {
    // const [startDate, setStartDate] = useState(new Date());
    // const [andDate, setEndDate] = useState(new Date());

     const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    // const [endDate, setEndDate] = useState(new Date("2014/02/10"));

    function getValue(e){
        
        console.log(e);
        setStartDate(e)
    }

    return (

        <div>
            <p>החלקה לשיער </p>
            <p>החלקה שמשקמת את השיער ומביאה ברק ולחות</p>
            <p> </p>
            <A setStartDate={getValue} startDate={startDate} />

            {/* <Calendar onClickDay={(e) => { }}></Calendar> */}
            <br></br><br></br>
            <button className="button"> לקביעת תור</button>
            
        </div>
    )
}

const A = (props) => {
    let times=["13:30:00","14:00:00"]
    const { startDate, setStartDate } = props
let dates=[new Date(2022,09,12)]
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
value={dates}
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            // startDate={startDate}
            // endDate={endDate}

        />
    );
};











