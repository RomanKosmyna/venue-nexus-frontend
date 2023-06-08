"use client";

import React, {type FC, useState} from "react";
import {apiService} from "@/src/services";
import {useRouter} from "next/navigation";
import { setCookie } from "cookies-next";
import {urls} from "@/src/configs";

import styles from "./AuthForm.module.css";

interface IProps {
    buttonText: string;
    route?: string;
    api: "login" | "registration";
}

const AuthForm: FC<IProps> = ({buttonText, api}) => {
    const endpoint = `${apiService}${api === "login" ? urls.auth.login : urls.auth.registration}`;
    const [target, setTarget] = useState({
        email: "",
        username: "",
        password: "",
    });
    const router = useRouter();

    const inputFocused = (inputId: string) => {
        setTarget(prevTarget => ({...prevTarget, [inputId]: inputId}));
    };

    const inputNotFocused = (el: React.FocusEvent<HTMLInputElement>) => {
        const field = el.target.id;

        if (el.target.value.length === 0) {
            setTarget(prevTarget => ({...prevTarget, [field]: ""}));
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        const data = {
            email: (event.target as HTMLFormElement).email.value,
            username: (event.target as HTMLFormElement).username.value,
            password: (event.target as HTMLFormElement).password.value,
        }

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (response.status === 200) {
                const {accessToken, refreshToken} = await response.json();
                setCookie("accessToken", accessToken);
                setCookie("refreshToken", refreshToken);
                router.push("/");
            } else if (response.status === 201) {
                router.push("/login");
            }
        } catch (error: Error) {
            console.log(error.message)
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <label
                    htmlFor="email"
                    className={`${styles.inputLabel} 
          ${target.email !== "" ? styles.focusedLabel : styles.notFocusedLabel} `}
                >
                    Email
                </label>
                <input type="text" id={"email"}
                       onFocus={() => {
                           inputFocused("email");
                       }}
                       onBlur={(el) => {
                           inputNotFocused(el);
                       }}
                       required={true}
                       pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}"
                       title="Email should follow and example: example@domain.com"
                />
            </div>
            <div className={styles.inputContainer}>
                <label
                    htmlFor="username"
                    className={`${styles.inputLabel} 
          ${target.username !== "" ? styles.focusedLabel : styles.notFocusedLabel} `}
                >
                    Username
                </label>
                <input type="text" id={"username"}
                       onFocus={() => {
                           inputFocused("username");
                       }}
                       onBlur={(el) => {
                           inputNotFocused(el);
                       }}
                       required={true}
                       pattern="[a-zA-Z0-9]{4,10}"
                       title="Username length should be 4-10 characters.
               It can consist of digits (0 to 9) and alphabets (a to z)."
                />
            </div>
            <div className={styles.inputContainer}>
                <label
                    htmlFor="password"
                    className={`${styles.inputLabel} ${target.password !== "" ?
                        styles.focusedLabel : styles.notFocusedLabel} `}
                >
                    Password
                </label>
                <input type="password" id={"password"}
                       onFocus={() => {
                           inputFocused("password");
                       }}
                       onBlur={(el) => {
                           inputNotFocused(el);
                       }}
                       required={true}
                       pattern="[a-zA-Z0-9!@#$%^&*_+]{6,14}"
                       title="Password length should be 6-14 characters.
               It can consist of digits (0 to 9), alphabets (a to z) and symbols (!@#$%^&*()_+-=)."
                />
            </div>
            <button type={"submit"} className={styles.btn}>
                {buttonText}
            </button>
        </form>
    );
};

export default AuthForm;