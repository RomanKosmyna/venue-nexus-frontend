import AuthHeadingAbout from "@/src/components/Auth/AuthHeadingAbout/AuthHeadingAbout";
import AuthWebsiteName from "@/src/components/Auth/AuthWebsiteName/AuthWebsiteName";
import AuthPageRedirect from "@/src/components/Auth/AuthNoAccount/AuthPageRedirect";
import AuthForm from "@/src/components/Auth/AuthForm/AuthForm";

import styles from "../../../src/styles/page.module.css";

export default function Registration() {
    return (
        <div className={styles.page}>
            <AuthWebsiteName/>
            <AuthHeadingAbout heading={"Register Account"}/>
            <AuthForm
                buttonText={"Register"}
                api={"registration"}
            />
            <AuthPageRedirect
                link={"login"}
                linkText={"Log In"}
                status={"Account holder?"}
            />
        </div>
    )
}