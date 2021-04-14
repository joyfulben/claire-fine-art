import React, {useState} from 'react';
import '../style/contact.css';
import sanitizeHtml from 'sanitize-html';
import TextFields from '../style/TextInputField';

const Contact = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (value) => {
    if (value.target.name === "body") {
      setBody(sanitizeHtml(value.target.value));
    } else {
      setTitle(sanitizeHtml(value.target.value))
    }

    console.log(body, title);
  }

  return (
    <div className="body-container">
      <h1>Brianna Claire Williamson</h1>
      <h1>Email: claire@artspace.com</h1>
      <TextFields />
      {// <form action={`mailto:benfishernow@gmail.com?subject=${title}&body=${body}`} method="get" encType="application/x-www-form-urlencoded">
      // <input onChange={value => handleChange(value)} type="text" name="title" />
      // <textarea onChange={value=> handleChange(value)} name="body"></textarea>
      // <button onClick={() => console.log(body)} type="submit">Submit email</button>
      // </form>
    }
    </div>
  )
}
export {Contact};
