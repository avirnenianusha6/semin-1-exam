import React, { useState } from 'react';
import axios from 'axios';

function AddPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
      setMessage('Post submitted!');
      console.log(res.data);
    } catch (err) {
      setMessage('Error submitting post.');
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" required />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPost;
