import './Login.css';
import { useState } from 'react';
export default function Login({ onLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({email, password});
    }

    return (
        <main className="login">
            <form className="login__form" name="login" onSubmit={handleSubmit}>
                <div className="login__form-container">
                    <h1 className="login__title">Рады видеть!</h1>
                    <div className="login__labels-container">
                        <label className="login__label">
                            <span className="login__label-text">E-mail</span>
                            <input
                                value={email}
                                name="email"
                                className='login__input login__input_type_email'
                                type="email"
                                onChange={handleEmailChange}
                                required
                            />
                            <span className="login__error login__error_hidden"></span>
                        </label>
                        <label className="login__label">
                            <span className="login__label-text">Пароль</span>
                            <input
                                value={password}
                                name="password"
                                className='login__input'
                                type="password"
                                onChange={handlePasswordChange}
                                required
                            />
                            <span className="login__error login__error_hidden"></span>
                        </label>
                    </div>
                </div>
                <div className="login__button-container">
                    <button type="submit" className='login__button'>Войти</button>
                </div>
            </form>
        </main>
    )
}