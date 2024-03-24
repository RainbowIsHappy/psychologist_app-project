// import React from 'react'
// export default function Home() {
//   return (
//         <>
//             <h1>Welcome</h1>
//             <div>You are at home!</div>
//         </>
//     );
// }

import React from "react";
import {Link, useLoaderData  } from "react-router-dom"; 
import "../App.css";


export default function Home() {

  const article = useLoaderData()

  const list = article.map((e) => (
    <Link key={e.id} to={`/article/${e.id}`}>
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
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css?family=Inder" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet" />
        <title>HEARTMINDFUL</title>
      </head>
      <body>
        <div className="header">
          <Link to={`/`}>
              <div id="logo">
                <div className="logoback"></div>
                <img className="logopic" src="../img/logo.png" alt="logo" />HEARTMINDFUL
              </div>
          </Link>
        </div>

        <div className="slider">
          <div className="myslide">
            <img src="./img/pic1.jpg" style={{ transform: "translate(0%, 0%)" }} alt="slide" />
          </div>
        </div>

        <div class="home-header">บทความที่น่าสนใจจากนักจิตวิทยา</div>
      </body>

      {article.length ? (
              <>
                <div class="card-container-3rdpage">{list}</div>
              </>
            ) : (
                <div>ไม่มีข้อมูลนักจิตวิทยา !</div>
      )}
      
      <footer class="foot"></footer>
    </>
  );
}

export const articleLoader = async () => {
	// const res = await getProducts();
	const res = await fetch('/api/')
	if (!res.ok) {
		throw Error('Could not fetch the articles')
	}
	return res.json()
}
