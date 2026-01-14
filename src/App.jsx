import { useState } from 'react'
import { ChatBox } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

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
