import AuthHeadingAbout from "@/src/components/Auth/AuthHeadingAbout/AuthHeadingAbout";
import AuthWebsiteName from "@/src/components/Auth/AuthWebsiteName/AuthWebsiteName";
import AuthPageRedirect from "@/src/components/Auth/AuthNoAccount/AuthPageRedirect";
import AuthForm from "@/src/components/Auth/AuthForm/AuthForm";

import styles from "../../../src/styles/page.module.css";

export default function Login() {
    return (
        <div className={styles.page}>
            <AuthWebsiteName/>
            <AuthHeadingAbout heading={"Login To Your Account"}/>
            <AuthForm buttonText={"Log In"}/>
            <AuthPageRedirect
            link={"registration"}
            linkText={"Register"}
            status={"New Here?"}
            />
        </div>
    )
}