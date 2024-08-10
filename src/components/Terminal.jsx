// src/components/Terminal.jsx
import React, { useState } from 'react';
import '../styles/terminal.css';

const Terminal = () => {

  const [input, setInput] = useState('');
  const [dir, setDir] = useState('$ ');
  const [commands, setCommands] = useState([
    {type: "t", content: 'Welcome to my portfolioooo!'}, 
    {type: "t", content: 'Here you can find my projects, skills, and contact information.'}
  ]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newCommands = [...commands, {type: "t", content: `${dir} ${input}`}];

      // Process specific commands
      switch (input.trim()) {
        case 'welcome':
          newCommands = [...newCommands, {type: "t", content: 'Welcome to my portfolioooo!'}, {type: "t", content: 'Here you can find my projects, skills, and contact information.'}];
          break;
        case 'help':
          newCommands = [...newCommands, {type: "t", content: 'Available commands: help, welcome, about, projects, contact, clear.'}];
          break;
        case 'about':
          newCommands = [...newCommands, {type: "t", content: 'I am a passionate Backend Developer with a background in Systems Engineering. I specialize in Elixir, NodeJs, and other modern technologies, and have experience leading development teams and implementing scalable solutions for fintech and educational platforms. My goal is to continuously learn and contribute to the growth of innovative companies, leveraging my problem-solving skills and technical expertise to drive success. Fluent in both Spanish and English, I am always open to new opportunities and challenges.'}];
          break;
        case 'projects':
          newCommands = [...newCommands, {type: "t", content: 'Soon'}];
          break;

        case 'experience':
          newCommands = [...newCommands, {type: "t", content: 'here goes my experience'}];
          break;
        case 'contact':
          newCommands = [...newCommands, 
              {type: "t", content: 'You can find me on:'}, 
              {type: "l", content: 'linkedin', url: "https://www.linkedin.com/in/ismael-sanchez-pem"},
              {type: "l", content: 'github', url: "https://github.com/IsmaelPSY"}
            ];
          break;
        case 'clear':
          newCommands = [];
          break;
        default:
          newCommands = [...newCommands, {type: "t", content: `Command not found: ${input}`}];
          break;
      }
      console.log({newCommands})
      setCommands(newCommands);
      setInput('');
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <div className="title">ismaelpsy@ubuntu: ~</div>
      </div>
      <div className="terminal-body">
        {
          commands.map((command, index) => {
            switch (command.type){
              case 't':
                return(<p className='command-line' key={index}>{command.content}</p>);
                break;
              case 'l':
                return(<a key={index} className='contact-link' rel="noopener noreferrer" target='_blank' href={command.url}>{command.content}</a>);
                break;
            }
          })
        }
        <div className="input-line">
          <span>{dir}</span>
          <input
            id="new_input"
            name="new_input"
            className='input-command'
            type="text"
            value={input}
            placeholder='help'
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
