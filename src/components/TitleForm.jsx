import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function TitleForm({ onTitleSubmit }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setInvalid(true);
      setMessage('Enter a movie or series title first.');
      inputRef.current.focus();
      return;
    }
    onTitleSubmit(cleanTitle);
    setTitle('');
    setInvalid(false);
    setMessage(`Sent “${cleanTitle}” to the console.`);
    inputRef.current.focus();
  }

  function handleChange(event) {
    setTitle(event.target.value);
    setInvalid(false);
    setMessage('');
  }

  return (
    <form className="title-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="movie-title">Movie or series title</label>
      <div className="form-row">
        <input id="movie-title" name="title" type="text" required autoComplete="off"
          ref={inputRef} value={title} onChange={handleChange} placeholder="e.g., Jurassic Park"
          aria-invalid={invalid} aria-describedby="form-help form-message" />
        <button type="submit">Submit title <ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <p id="form-help" className="form-help">This prototype sends each title to the browser console.</p>
      <p id="form-message" className={invalid ? 'form-message error' : 'form-message'} role="status">{message}</p>
    </form>
  );
}
