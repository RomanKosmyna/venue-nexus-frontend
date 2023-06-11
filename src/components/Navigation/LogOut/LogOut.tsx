import {useRouter} from "next/navigation";
import {deleteCookie, hasCookie} from "cookies-next";

const LogOut = () => {
    const router = useRouter();

    const logout = () => {
        if (hasCookie("accessToken")) {
            deleteCookie("accessToken");
        }
        if (hasCookie("refreshToken")) {
            deleteCookie("refreshToken");
        }

        router.push("/login");
    };

    return (
        <>
            <button onClick={logout}>Log Out</button>
        </>
    );
};

export default LogOut;