import React from 'react'
import { Link, useLoaderData, useParams} from "react-router-dom"; 

export default function ArticleDetailPage() {

    const article_detail = useLoaderData()
    const { id } = useParams();
    console.log('+++++++id:' + id)

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
            <div>
                {article_detail ? (
                    <>
                        <div class="article-container">
                            <img src={ article_detail['img']} alt="" />
                            <h4><b>{article_detail['title']}</b></h4>
                            <p>โดย {article_detail['author']} <br />
                               วันที่ {article_detail['date']} 
                            </p>
                            <h1 class="content">
                            {article_detail['content'].split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}</h1>
                        </div>
                    </>
                ) : (
                    <div>ไม่มีข้อมูลบาทความ !</div>
                )} 
            </div>
        </>
    );
}


export const articleDetailPageLoader = async ({ params }) => {
    const { id } = params
    console.log("@@@@@@@@@@@"+id)
	const res = await fetch('/api/article/' + id)
	let psychologist = await res.json()
	if (!res.ok) {
		throw Error(psychologist.error)
	}
	return psychologist //res.json()
    // return redirect(`/psychologist/${id}`);
}