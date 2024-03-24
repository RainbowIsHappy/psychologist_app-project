import React, {  } from 'react'
import {Link, redirect, useParams, useLoaderData } from "react-router-dom"; 

async function updatePsycho(psycholist) {
        try {
            const { id, ...Psycholist } = psycholist;
            const response = await fetch(`/api/psychologist/${id}/confirm`, {
			method: 'GET',
			body: JSON.stringify(psycholist),
			headers: Headers({ 'Content-Type': 'application/json' }),
		}).then((res) => {
			if (!res.ok) {
                throw Error({
                    error: `Could not get your list ${Psycholist.name}`
                });
            }
			return res.json()
		})
		return response
	} catch (error) {
		console.error('Error:', error)
	}
}

export async function updating({ request, params }) {
	const formData = await request.formData()

	let product = Object.fromEntries(formData)
	if (!product) {
		throw new Error('Error in editing this product')
	}

    const updatedPsycho = await updatePsycho({ id: params.id, ...product });
    return redirect(`/psychologist/${updatedPsycho.id}/confirm`);
}

export default function ConfirmPage() {

    const detail_confirm = useLoaderData();
    
    const { id } = useParams();
    console.log('----------id:' + id)
    console.log('----------id:' + detail_confirm['img2'])
    
    // const data = Array.isArray(detail_confirm) ? detail_confirm.find(item => item.id === id) : detail_confirm.id;
   
    return (
        <>
            <body>
                <div className="header">
                    <Link to={`/`}>
                        <div id="logo">
                            <div className="logoback"></div>
                            <img className="logopic" src="/img/logo.png" alt="logo" />HEARTMINDFUL
                        </div>
                    </Link>
                </div>
            </body>
            <div className="item">
                {detail_confirm ? (
                    <>
                        <div class="card-container-7ndpage">
                            <div class="card-7ndpage">
                                <img src={ detail_confirm['img2']} alt=""/>
                                <div class="container-7ndpage">
                                    <h2>ท่านนัดหมายสำเร็จ!</h2>
                                    <h3>ข้อมูลการนัดหมาย<br/>
                                    นักจิตวิทยา : { detail_confirm['name'] }<br/>
                                    วัน - เวลา : {detail_confirm['valueDate']} {detail_confirm['valueTime']} <br/>
                                    </h3>
                                    <h4>
                                    ก่อนหน้าวันนัดจะมีลิ้งค์เพื่อเข้าในโปรแกรม ZOOM<br/>
                                    กรุณามาก่อนเวลานัด 5 นาทีโดยระยะเวลาการปรึกษา 30 นาที<br/>
                                    หากเลยเวลาที่กำหนดอาจมีค่าใช้จ่ายเพิ่มเติม<br/>
                                    </h4>
                                    <Link to={`/`}>
                                        <button class="back">
                                            <a class="actback">กลับสู่หน้าแรก</a>
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
    )
}




export const confirmLoader = async ({ params }) => {

    const { id } = params
    console.log(id)
	// const res = await fetch(`/psychologists/${id}`)
    const res = await fetch(`/api/psychologist/${id}/confirm`)
    console.log(id)
	let psychologist = await res.json()
	if (!res.ok) {
		throw Error(psychologist.error)
	}
	return psychologist //res.json()


}
