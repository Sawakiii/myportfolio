import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import config from "./plugins/firebase"
const firebase = require('firebase');
firebase.initializeApp(config);
require('firebase/functions');

const textFieldStyle = {
    display: "flex",
    width: "300px",
    margin: "20px auto"
}


const Contact = () => {
    const [sended, setSended] = React.useState(false)
    return (
        <>
        <h1>Contact</h1>
        {
            sended ? 
            <h2>問い合わせありがとうございます。2日以内に折り返し連絡させていただきます。</h2>
            :
        <form onSubmit={(e)=>{
            e.preventDefault()
            let data = {
                name: e.target.name.value,
                email: e.target.email.value,
                content: e.target.content.value
            }
            let sendMail = firebase.functions().httpsCallable('sendMail');
            sendMail(data)
            setSended(true)
            console.log("mail sended")
        }} style={{textAlign: "center"}}>
            <TextField name="name" label="お名前" type="text" required style={textFieldStyle}  />
            <TextField name="email" label="メールアドレス" type="mail" required style={textFieldStyle}   />
            <TextField
              required
              name="content"
              label="お問い合わせ内容"
              multiline
              rows="8"
              margin="normal"
              variant="outlined"
              style={textFieldStyle} 
            />
            <Button variant="contained" color="primary" type="submit" style={textFieldStyle} >
              送信
            </Button>
        </form>
        }
        
        </>
    )
}

export default Contact
