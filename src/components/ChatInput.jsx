import { useState} from 'react'
import {Chatbot} from 'supersimpledev' 

export function ChatBox({chatMessage, sendChatMessage}) {
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