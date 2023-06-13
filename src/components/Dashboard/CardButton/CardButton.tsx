import Link from "next/link";

import styles from "./CardButton.module.css";

interface IProps {
    id: number;
    text: string;
}

const CardButton = ({id, text}: IProps) => {
    return (
        <>
            <Link href={`/venue/${id}`} className={styles.cardDetailsBtn}>{text}</Link>
        </>
    );
};

export default CardButton;