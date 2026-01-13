import { useState, useRef, useEffect } from 'react'
import {Chatbot} from 'supersimpledev'
import RobotProfileImage from './assets/robot.jpg'
import UserProfileImage from './assets/user.png'
import './App.css'

          function ChatBox({chatMessage, sendChatMessage}) {
                const[saveInput, setSaveInput] = useState('');
                 function saveInputText(event) {
                    setSaveInput(event.target.value)
                 }
                  function sendMessage() {
                     const newChatMessages = [
                  ...chatMessage,
                  {
                    message: saveInput,
                    sender: 'user',
                    id: crypto.randomUUID()
                        }
                      ]
                    sendChatMessage(newChatMessages);

                    const response = Chatbot.getResponse(saveInput);
                    sendChatMessage([
                  ...newChatMessages,
                  {
                    message: response,
                    sender: 'robot',
                    id: crypto.randomUUID()
                        }
                      ]);                 
                    
                    setSaveInput('');
                  }

                return(
                <div className="chat-input-container">
                    <input 
                      placeholder = "Write  a message to Chatbox" 
                      size = "30"
                      onChange = {saveInputText}
                      value={saveInput}
                      className= "chat-input"
                    />
                    <button
                      onClick={sendMessage}
                      className="send-button"
                    >send</button>
                </div>
                )
            }

        function ChatMessage({message, sender}) {
             //const message = props.message
             //const sender = props.sender
             //const {message, sender} = props;
            return(
               <div className={
                sender==='user' 
                ?'chat-message-user'
                :'chat-message-robot'}>
                 {sender === "robot" && (
                    <img src = {RobotProfileImage}
                    className= "chat-message-profile"/>
                )} 
                  <div className= "chat-message-text">
                       {message}
                  </div>
                  {sender === "user" && (
                    <img src = {UserProfileImage}
                    className= "chat-message-profile"/>
                  )}
                </div>
            )
        }

  function ChatMessages({
      chatMessage}) {
        const chatMessagesRef = useRef(null);
 
        useEffect(() => {
          const containerElem = chatMessagesRef.current;
           if (containerElem) {
             containerElem.scrollTop = containerElem.
             scrollHeight;
           }
        }, [chatMessage]); 
    return(
       <div className= "chat-messages-container" ref= 
       {chatMessagesRef}>
           {chatMessage.map((chatMessage) => {
              return(
                <ChatMessage 
                    message = {chatMessage.message}
                    sender = {chatMessage.sender}
                    key = {chatMessage.id}
                />
              )
           })}
       </div>
    )
};
     function App() {
            const [chatMessage, sendChatMessage] = useState([{
                message: 'Hello Chatbox', 
                sender: 'user',
                id: 'id1' 
          }, 
          {
                message: 'Hello! How May i help?',
                sender: 'robot',
                id: 'id2' 
          },
        {
               message: 'Can you get me todays date?',
               sender: 'user',
               id: 'id3'
        },
    {
            message: 'Today is Semptember 27',
            sender: 'robot',
            id: 'id4'
    }])

    // const [chatMessage, sendChatMessage] = array
    //const chatMessage = array[0]
    //const sendChatMessage = array[1];
          return(
            <div className="app-container">
              <ChatMessages 
              chatMessage={chatMessage}
              />

              <ChatBox 
              chatMessage={chatMessage} 
              sendChatMessage={sendChatMessage}/>
          </div>
    )
        }

export default App
