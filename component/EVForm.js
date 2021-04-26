import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('');
  };

  return (
    <form className="ev-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update"
            value={input}
            name="text"
            className="ev-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="ev-button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="new todo"
            value={input}
            name="text"
            className="ev-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="ev-button">追加</button>
        </>
      )}
    </form>
  )
}

export default TodoForm
