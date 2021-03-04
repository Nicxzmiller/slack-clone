import React, {useRef, useState} from "react";
import styled from "styled-components"
import {Button} from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";

function ChatInput ({channelName, channelId}) {
    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault(); //prevents refresh

        if(!channelId){
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Nicholas Markus',
            userImage: 'https://media-exp1.licdn.com/dms/image/C4D03AQFD_UH4wjP02Q/profile-displayphoto-shrink_800_800/0/1607811742063?e=1620259200&v=beta&t=9_jCt0Tr9iDWsdDP22yfZrXqRMaBhHcxEHg66uAfESw'
        });

        setInput('');

    };
    return(
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #ROOM`}/>
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 30px;
    padding: 15px;
    outline: none;
  }
  
  > form > button {
    display: none !important;
  }
`