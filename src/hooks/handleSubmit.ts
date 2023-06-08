import type React from "react";
import { cookies } from 'next/headers';

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, endpoint) => {
    const cookieStore  = cookies();
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
        if (response.ok) {
            console.log(cookieStore);
        }
    } catch (e) {
        console.log(e.message)
    }
};