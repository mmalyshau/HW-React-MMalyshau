import style from './loginPage.module.scss'

import { LoginForm } from "@ui";

const LoginPage = () => {
    return (
        <section className={style.loginPage}>
            <div className={style.loginPage__wrapper}>
                <h1 className="h1">Log in</h1>
                <LoginForm  />
            </div>
        </section>
    );
}

export default LoginPage;