import React from 'react'
import {
	Link,
	useLoaderData,
} from "react-router-dom";

export default function ArticlePage() {

    const article = useLoaderData()

    const list = article.map((e) => (
        <Link key={e.id} to={e.id}>
            <div class="card-3rdpage">
                <img src={e.img} alt=""/>
                <div class="container-3rdpage">
                    <h4><b>{ e.title }</b></h4>
                </div>
            </div>
        </Link>
    ));   

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
            <div class="psychologist-header">บทความที่น่าสนใจจากนักจิตวิทยา</div>
            {article.length ? (
              <>
                <div class="card-container-3rdpage">{list}</div>
              </>
            ) : (
                <div>ไม่มีข้อมูลนักจิตวิทยา !</div>
            )}
        </>
    );
}

export const articlePageLoader = async () => {
	// const res = await getProducts();
	const res = await fetch('/api/article')
	if (!res.ok) {
		throw Error('Could not fetch the articles')
	}
	return res.json()
}


