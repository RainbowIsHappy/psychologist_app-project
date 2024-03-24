import React from 'react'
import { Outlet } from "react-router-dom";

export default function ArticleLayout() {
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
                <Outlet />
                <footer class="foot"></footer>
            </>
        );
}
