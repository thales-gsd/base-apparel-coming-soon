import { useState } from 'react';
import './EmailField.css';

export default function EmailField() {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <form className='email-container' onSubmit={handleSubmit} noValidate>
      <div className={`email-field ${isInvalid ? 'field-error' : ''}`}>
        <input 
          type="email" 
          className="email-input" 
          placeholder='Email Address'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (isInvalid) setIsInvalid(false);
          }}
        />
        
        {isInvalid && <img className='error-icon' src='/icon-error.svg' alt='' />}
        
        <button type="submit" className="submit-button">
          <img src="/icon-arrow.svg" alt="submit" />
        </button>
      </div>
      
      {isInvalid && <p className='error-message'>Please provide a valid email</p>}
    </form>
  );
};