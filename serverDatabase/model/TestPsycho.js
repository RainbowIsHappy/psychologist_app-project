// file: /model/TestProducts.js
import Data from "./PsychoDB.js";
import mongooseDbConnect from "../config/dbConnect.js";

mongooseDbConnect();
var psycholist = [
    {
        id: '01',
        name: 'ครูพีซ—พราวพิมล เกียรตินาวาปกรณ์',
        edu: 'Ph.D.Counseling Psychology จุฬาลงกรณ์มหาวิทยาลัย',
        work: 'Acceptance and Commitment Therapy (ACT)',
        exp: 'ความสัมพันธ์ การทำงาน/การเรียน การพัฒนาตัวเอง',
        img1: '/img/psychologist1.png',
        img2: '/img/psychologist1Cut.png',
        valueDate: '',
        valueTime: '',

    },
    {
        id: '02',
        name: 'ดร. เจสสิกา เทเลอร์',
        edu: 'Ph.D.Counseling Psychology จุฬาลงกรณ์มหาวิทยาลัย',
        work: 'Acceptance and Commitment Therapy (ACT)',
        exp: 'ความสัมพันธ์ การทำงาน/การเรียน การพัฒนาตัวเอง',
        img1: '/img/psychologist2.png',
        img2: '/img/psychologist2Cut.png',
        valueDate: '',
        valueTime: '',
},
];
//console.log(JSON.stringify(products));
Data.insertMany(psycholist)
    .then(function (docs) {
        console.log("Successfully insert to DB");
        docs.forEach((e) => console.log(JSON.stringify(e, null, "\t")));
        console.log("done!!"); process.kill(process.pid, "SIGINT");
    })
    .catch(function (err) {
        console.log(err);
    });