import { useState } from 'react';
import './EmailField.css';

export default function EmailField() {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  // Função para validar o formato do email
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      console.log("Email enviado com sucesso:", email);
    }
  };

  return (
    <form className='email-container' onSubmit={handleSubmit} noValidate>
      <input 
        type="email" 
        className={`email-input ${isInvalid ? 'input-error' : ''}`} 
        name="email" 
        id="email" 
        placeholder='Email Address'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (isInvalid) setIsInvalid(false);
        }}
      />
      {isInvalid && <img className='error-icon' src='/icon-error.svg' alt='error' />}
      <button type="submit">
        <img src="/icon-arrow.svg" alt="submit" />
      </button>
      {isInvalid && <p className='error-mensage'>Please provide a valid email</p>}
    </form>
  );
};