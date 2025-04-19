import './App.css'
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [jobs , setJobs] = useState([])

  const onInput = (event) => {
    setInputValue(event.target.value);
  };

  const onAddJob = (e) => {
    e.preventDefault();
    jobs.push(inputValue)
    setInputValue('') 
    const newJobs = [...jobs]
    setJobs(newJobs)
  }

  const removeE = (indexE) => {
  const updatedJobs = jobs.filter((job, index) => index !== indexE);
  setJobs(updatedJobs);
};

  return (
    <>
        <div className="App">
            <div className="TodoWrapper">
                <h1>Get Things Done !</h1>
                <form className="TodoForm"  onSubmit={onAddJob}>
                    <input type="text" className="todo-input" placeholder="What is the task today?" onInput={onInput} value={inputValue} />
                    <button type='submit' className="todo-btn">Add Task</button>
                </form>
                {
                  jobs.map((job, index) => {
                    return (
                      <div key={index} className="Todo">
                        <p>{job}</p>
                        <button onClick={() => removeE(index)} className='delete'>Delete</button>
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </>
  )
}

export default App
