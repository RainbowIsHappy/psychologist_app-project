import React from 'react'
import {
	Link,
	useLoaderData,
} from "react-router-dom";


export default function PsychoPage() {

    const data = useLoaderData()

    const list = data.map((e) => (
        <Link key={e.id} to={e.id}>
            <div class="card-container-2ndpage">
                <div class="card-2ndpage">
                    <img src= {e.img1} alt="" />
                    <div class="container-2ndpage">
                        <h4><b>{ e.name }</b></h4>
                        <h2 class="content1">การศึกษา</h2>
                        <h1 class="content2">{ e.edu }</h1>
                        <h2 class="content3">แนวคิดการทำงาน</h2>
                        <h1 class="content4">{ e.work }</h1>
                        <h2 class="content5">ความเชี่ยวชาญ</h2>
                        <h1 class="content6">{ e.exp }</h1>  
                    </div>
                    <button class="appoint">
                        <a class="actappoint">จองเวลา</a>
                    </button>
                </div>
            </div>
        </Link>
    ));   
    
    console.log('----------id:' + data['img1'])

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
            {data.length ? (
                <ul className="list-item">{list}</ul>
            ) : (
                "Not available"
            )}
        </>
    );
}

export const psychologistsLoader = async () => {
	// const res = await getProducts();
	const res = await fetch('/api/psychologist')
	if (!res.ok) {
		throw Error('Could not fetch the psychologists')
	}
	return res.json()
}
