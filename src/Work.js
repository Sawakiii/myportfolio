import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import image1 from "./img/flavorcolor.PNG"
import image2 from "./img/isara.PNG"
import image3 from "./img/CRM.PNG"
import image4 from "./img/codevillage.PNG"
import image5 from "./img/blog.PNG"
import image6 from "./img/portfolio.PNG"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      backgroundColor: "#F5F5F5"
    },
  }));

const tileData = [
    {
        // img: "./img/flavorcolor.PNG",
        img: image1,
        title: "Flavor Color LP",
        skill: "企画/デザイン/html, css, javascript/webpack/レスポンシブ対応",
        url: "https://flavorcolor.net/",
        codeUrl: true,
    },
    {
        img: image4,
        title: "模擬LPコーディング",
        skill: "html, css, javascript/レスポンシブ対応",
        url: "https://sawakiii.github.io/responsive-code-village-copied-page/",
        codeUrl: "https://github.com/sawakiii/responsive-code-village-copied-page/",
    },
    {
        img: image2,
        title: "iSaraの模写コーディング",
        skill: "html, css, javascript",
        url: "https://sawakiii.github.io/iSaraCopiedPage/",
        codeUrl: true,
    },
    {
        img: image5,
        title: "ブログレイアウトコーディング",
        skill: "html, css",
        url: "https://sawakiii.github.io/blog-practice/",
        codeUrl: "https://github.com/sawakiii/blog-practice/",
    },
    {
        img: image3,
        title: "顧客管理アプリ(CRUD機能付き)",
        skill: "MongoDB/Express/React/Node.js + Heroku",
        url: "https://infinite-dusk-61757.herokuapp.com/",
        codeUrl: "https://github.com/Sawakiii/CRM-app1",
    },
    {
        img: image6,
        title: "Reactで作るサーバレスなポートフォリオサイト(このページ)",
        skill: "React + material-ui + firebase(メールフォームをcloud functions)",
        url: "",
        codeUrl: "https://github.com/sawakiii/myportfolio/",
    },
]

const Work = () => {
    const classes = useStyles()
    return (
        <>
            <h1>Work</h1>
            <p>画像をクリックすると実際のページを確認できます。</p>
            <Grid container spacing={2}>
            {
                tileData.map((tile)=>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <h3>{tile.title}</h3>
                    <p>{tile.skill}</p>
                    <a href={tile.url} target="_blank">
                    {
                        tile.codeUrl === true ? 
                        <img src={tile.img} style={{width: "100%", height: "300px", marginTop: "30px"}} border=""></img>
                        : 
                        <>
                        <a href={tile.codeUrl} target="_blank">ソースコードはこちら</a>
                        <img src={tile.img} style={{width: "100%", height: "300px"}} border=""></img>
                        </>
                    }
                    </a>
                    </Paper>
                </Grid>
                )
            }

            </Grid>
        </>
    )
}

export default Work
