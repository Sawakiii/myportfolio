import React from "react"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const About = () => {
    const data = [
        {
            left: "氏名",
            right: "澤木愛輝"
        },
        {
            left: "自己紹介",
            right: "現在フロントエンドエンジニアのインターンを探しています。千葉大学国際教養学部、休学中。"
        },
        {
            left: "経歴",
            right: "大学1-2年時に都内で役者活動を行う。大学3年次からビジネスサロンに通った後、営業のインターン、プログラミング講師を経て2020年にハーブティーブランドFlavor Colorを立ち上げる。"
        },
        {
            left: "スキルセット",
            right: "html/css/javascript, React, node.js, MERN(Mongo/Express/React/Node.js)環境開発, python"
        }
    ]
    return (
        <>
        <h1>About</h1>
        <TableContainer>
            <Table style={{width: "50%", margin: "0 auto",backgroundColor: "#F5F5F5"}}  component={Paper}>
                <TableBody>
                    {
                        data.map((data)=>
                        <TableRow>
                            <TableCell style={{minWidth: "100px"}}>{data.left}</TableCell>
                            <TableCell>{data.right}</TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default About
