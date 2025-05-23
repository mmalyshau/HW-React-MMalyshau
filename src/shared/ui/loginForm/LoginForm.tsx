import React, { FormEvent } from 'react';
import style from './loginForm.module.scss';

import { Input, Button } from '@ui'; 
import { useForm } from '@hooks';
import { useValidation } from '@hooks';

import { auth } from '@config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const email = useForm('');
    const emailValidation = useValidation(email.value, { isEmpty: true, isEmail: true });

    const password = useForm('');
    const passwordValidation = useValidation(password.value, { isEmpty: true });

    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (emailValidation.isValid && passwordValidation.isValid) {
            try {
                await signInWithEmailAndPassword(auth, email.value, password.value);
                navigate('/menu');
            } catch (err) {
                console.error('Login error:', err);
            }
        } else {
            console.error('Validation failed');
        }
    };

    const handleCancel = () => {
        email.reset();
        password.reset();
    };

    return (
        <form className={style.loginForm} onSubmit={handleSubmit} noValidate>
            <div className={style.loginForm__content}>
                <div className={style.loginForm__rows}>
                    <div className={style.loginForm__row}>
                        <label className={style.loginForm__label}>
                            User Name
                            <Input
                                type="email"
                                name="email"
                                size="large"
                                value={email.value}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
                                onBlur={(e: React.FocusEvent<HTMLInputElement>) => email.onBlur(e)}
                                required
                            />
                        </label>
                        {email.isDirty && emailValidation.isEmpty && (
                            <span className={style.loginForm__error}>Email cannot be empty</span>
                        )}
                        {email.isDirty && !emailValidation.isEmail && !emailValidation.isEmpty && (
                            <span className={style.loginForm__error}>Email is not valid</span>
                        )}
                    </div>

                    <div className={style.loginForm__row}>
                        <label className={style.loginForm__label}>
                            Password
                            <Input
                                type="password"
                                name="password"
                                size="large"
                                value={password.value}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => password.onChange(e)}
                                onBlur={(e: React.FocusEvent<HTMLInputElement>) => password.onBlur(e)}
                                required
                            />
                        </label>

                        {password.isDirty && passwordValidation.isEmpty && (
                            <span className={style.loginForm__error}>Password cannot be empty</span>
                        )}
                    </div>
                </div>

                <div className={style.loginForm__buttons}>
                    <Button type="submit" size="large">Submit</Button>
                    <Button type="button" variant="secondary" size="large" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
