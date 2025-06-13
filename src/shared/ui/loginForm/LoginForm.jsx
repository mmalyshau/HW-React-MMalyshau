import style from './loginForm.module.scss';
import { Button } from "@ui/button/Button.jsx";
import { Input } from "@ui/input/Input.jsx";
import { useForm } from "@shared/hooks/useForm.js";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@config/firebase.js";
import { useValidation } from "@shared/hooks/useValidation.js";

export const LoginForm = () => {
    const email = useForm('');
    const password = useForm('');
    const navigate = useNavigate();

    const emailValidation = useValidation(email.value, { isEmpty: true, isEmail: true });
    const passwordValidation = useValidation(password.value, { isEmpty: true});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (emailValidation.isValid && passwordValidation.isValid) {
                await signInWithEmailAndPassword(auth, email.value, password.value);
                navigate('/menu');
            } else {
                console.error("Validation failed");
            }
        } catch (err) {
            console.error(err);
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
                                onChange={email.onChange}
                                required
                            />
                        </label>
                        {emailValidation.isEmpty && (
                            <span className={style.loginForm__error}>
                                Email cannot be empty
                            </span>
                        )}
                        {!emailValidation.isEmail && !emailValidation.isEmpty && (
                            <span className={style.loginForm__error}>
                                Invalid email address
                            </span>
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
                                onChange={password.onChange}
                                required
                            />
                        </label>
                        {passwordValidation.isEmpty && (
                            <span className={style.loginForm__error}>
                                Password cannot be empty
                            </span>
                        )}
                    </div>
                </div>

                <div className={style.loginForm__buttons}>
                    <Button type="submit" size="large">Submit</Button>
                    <Button type="button" variant="secondary" size="large" onClick={handleCancel}>Cancel</Button>
                </div>
            </div>
        </form>
    );
};