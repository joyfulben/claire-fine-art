import React, {useState} from 'react';
import '../style/contact.css';
import sanitizeHtml from 'sanitize-html';
import TextFields from '../style/TextInputField';

// NOTE: Breadcrumbs: App.js

const Contact = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  
  const handleChange = (value) => {
    if (value.target.name === "body") {
      setBody(sanitizeHtml(value.target.value));
    } else {
      setTitle(sanitizeHtml(value.target.value))
    }
  }

  return (
    <div className="contact-container">
      <h2>Email Form</h2>
      <TextFields handleChange={handleChange} body={body} title={title} setBody={setBody} setTitle={setTitle}/>
    </div>
  )
}
export {Contact};
