import React, { useState,} from 'react'
import { Link, useLoaderData, useParams  } from "react-router-dom"; 


export default function AppointmentPage() {

    const detail = useLoaderData()
    const { id } = useParams();
    console.log('id:'+id)
    // const data = detail.find(item => item.id === id);
    const data = Array.isArray(detail) ? detail.find(item => item.id === id) : detail.id;

    const [currentButton, setCurrentButton] = useState(null);
    const [resetColorTime, setResetColorTime] = useState(false);
    const [currentTimeButton, setCurrentTimeButton] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    const handleButtonClick = (button) => {        
        if (currentButton === button) {
            button.style.backgroundColor = "";
            setCurrentButton(null);
            document.getElementById("date-container").style.display = "none";
            setResetColorTime(true);

        } else if (!currentButton) {
            button.style.backgroundColor = "rgba(2, 178, 135, 0.45)";
            setCurrentButton(button);

            if (button.style.backgroundColor === "rgba(2, 178, 135, 0.45)") {
                document.getElementById("date-container").style.display = "block";
                setResetColorTime(false);
            }
        } else {
            currentButton.style.backgroundColor = "";
            button.style.backgroundColor = "rgba(2, 178, 135, 0.45)";
            setCurrentButton(button);

            if (button.style.backgroundColor === "rgba(2, 178, 135, 0.45)") {
                document.getElementById("date-container").style.display = "block";
                setResetColorTime(false);
            }
        }
        if (resetColorTime) {
            document.querySelectorAll(".date-button").forEach((button) => {
            if (button.style.backgroundColor === "rgba(2, 178, 135, 0.45)") {
                button.style.backgroundColor = "";
                }
            });
        }
        
            const valueDate = button.value;
            console.log(valueDate);
            fetch(`/api/psychologist/${id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ valueDate })
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error));
    }
    

    const handleTimeButtonClick = (timeButton) => {
        if (currentTimeButton === timeButton) {
            timeButton.style.backgroundColor = "";
            setCurrentTimeButton(null);
        } else if (!currentTimeButton) {
            timeButton.style.backgroundColor = "rgba(2, 178, 135, 0.45)";
            setCurrentTimeButton(timeButton);
        } else {
            currentTimeButton.style.backgroundColor = "";
            timeButton.style.backgroundColor = "rgba(2, 178, 135, 0.45)";
            setCurrentTimeButton(timeButton);
        }
        setSelectedTime(timeButton.value);

        const valueTime = timeButton.value;
        console.log(valueTime);
        fetch(`/api/psychologist/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ valueTime })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
        
    };


    return (
        <>
            <body>
                <div className="header">
                    <Link to={`/`}>
                        <div id="logo">
                            <div className="logoback"></div>
                            <img className="logopic" src="../img/logo.png" alt="logo" />HEARTMINDFUL
                        </div>
                    </Link>
                </div>
            </body>
            <div class="psychologist-header">จองเวลาเพื่อนัดปรึกษานักจิตวิทยา</div>
            <div className="item" replace method="put" >
                {detail ? (
                    <>
                        <div class="card-container-5ndpage">
                            <div class="card-5ndpage">
                                <div class="card-container-4ndpage">
                                    <div class="card-4ndpage">
                                        <img src={ detail['img2'] } height="0.3%" alt=""/>
                                        <div class="container-4ndpage">
                                            <h4><b>{ detail['name'] }</b></h4>
                                            <h2 class="content1">ความเชี่ยวชาญ</h2>
                                            <h1 class="content2">{ detail['exp'] }</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-5ndpage">
                                    <h2 class="content1">วันที่จอง</h2>
                                    <h1 class="content2">กุมภาพันธ์ 2566</h1>

                                    <div class="bt-container">
                                        {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
                                            <button class="btUnactive" id={num} value={`วันที่ ${num} กุมภาพันธ์ 2566`}>{num}</button>
                                            
                                        ))}
                                        <button class="bt" id="4" onClick={(e) => handleButtonClick(e.target)} value={`วันที่ 4 กุมภาพันธ์ 2566`}>4</button>
                                        {Array.from({ length: 3 }, (_, i) => i + 5).map((num) => (
                                            <button class="btUnactive" id={num} value={`วันที่ ${num} กุมภาพันธ์ 2566`}>{num}</button>
                                        ))}
                                        <button class="bt" id="8" onClick={(e) => handleButtonClick(e.target)} value={`วันที่ 8 กุมภาพันธ์ 2566`}>8</button>
                                        {Array.from({ length: 1 }, (_, i) => i + 9).map((num) => (
                                            <button class="btUnactive" id={num} value={`วันที่ ${num} กุมภาพันธ์ 2566`}>{num}</button>
                                        ))}
                                        <button class="bt" id="10" onClick={(e) => handleButtonClick(e.target)} value={`วันที่ 10 กุมภาพันธ์ 2566`}>10</button>
                                    </div>
                                                                        
                                    <div class="bt-container">
                                        {Array.from({ length: 10 }, (_, i) => i + 11).map((num) => (
                                            <button class="bt" id={num} onClick={(e) => handleButtonClick(e.target)} value={`วันที่ ${num} กุมภาพันธ์ 2566`}>{num}</button>
                                        ))}
                                    </div>

                                    <div class="bt-container">
                                        {Array.from({ length: 8 }, (_, i) => i + 21).map((num) => (
                                            <button class="bt" id={num} onClick={(e) => handleButtonClick(e.target)} value={`วันที่ ${num} กุมภาพันธ์ 2566`}>{num}</button>
                                        ))}
                                    </div>
                                </div>
                               

                            </div>
                        </div>
                    

                        <div class="container-6ndpage" style={{ display: 'none' }} id="date-container">
                            <div class="card-container-6ndpage">
                                <div class="card-6ndpage">
                                    <h2 class="content1">เวลาที่จอง</h2>
                                    <h1 class="content2">ระยะเวลาในการพูดคุยปรึกษานักจิตวิทยา 30 นาที ให้ท่านกดเลือกเวลาที่ต้องการด้านล่าง</h1>
                                    <div class="date-container" id="button-date1" style={{ display: 'block' }}>
                                        <button class="date-buttonRed" id="t1" value={`เวลา 11:00 น.`}>11 : 00 น.</button>
                                        <button class="date-buttonRed" id="t2" value={`เวลา 11:30 น.`}>11 : 30 น.</button>
                                        <button class="date-button" id="t3" onClick={(e) => handleTimeButtonClick(e.target)} value={`เวลา 12:00 น.`}>12 : 00 น.</button>
                                        <button class="date-button" id="t4" onClick={(e) => handleTimeButtonClick(e.target)} value={`เวลา 12:30 น.`}>12 : 30 น.</button>
                                        <button class="date-button" id="t5" onClick={(e) => handleTimeButtonClick(e.target)} value={`เวลา 13:00 น.`}>13 : 00 น.</button>
                                    </div>
                        
                                    <div class="date-container" id="button-date2" style={{ display: 'block' }}>
                                        <button class="date-button" id="t6" onClick={(e) => handleTimeButtonClick(e.target)} value={`เวลา 13:30 น.`}>13 : 30 น.</button>
                                        <button class="date-button" id="t7" onClick={(e) => handleTimeButtonClick(e.target)} value={`เวลา 14:00 น.`}>14 : 00 น.</button>
                                        <button class="date-button" id="t8" onClick={(e) => handleTimeButtonClick(e.target)} value={`เวลา 14:30 น.`}>14 : 30 น.</button>
                                        <button class="date-buttonRed" id="t9" value={`เวลา 15:00 น.`}>15 : 00 น.</button>
                                        <button class="date-buttonRed" id="t10" value={`เวลา 15:30 น.`}>15 : 30 น.</button>
                                    </div>
                                            

                                    <Link to={`/psychologist/${id}/confirm`}>
                                    <button class="cf-appoint" type="submit" >
                                        <a class="cf-actappoint">ยืนยันการจอง</a>
                                    </button>
                                    </Link>

                                </div>
                                
                            </div>
                            
                        </div>
                    </>
                ) : (
                    <div>ไม่มีข้อมูลนักจิตวิทยา !</div>
                )}
            </div>
            
    </>
    );
}

export const appointLoader = async ({ params }) => {
    const { id } = params
    console.log(id)
	const res = await fetch('/api/psychologist/' + id)
	let psychologist = await res.json()
	if (!res.ok) {
		throw Error(psychologist.error)
	}
	return psychologist //res.json()
    // return redirect(`/psychologist/${id}`);
}
