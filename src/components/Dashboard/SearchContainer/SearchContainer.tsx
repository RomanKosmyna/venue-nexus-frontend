import styles from "./SearchContainer.module.css";
import Image from "next/image";

const SearchContainer = () => {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
                <span className={styles.loopSvg}>
                    <Image
                        src={"img/search.svg"}
                        alt={"Search loop"}
                        fill={true}
                    />
                </span>
                <input
                    type="search"
                    aria-label={"Search"}
                    autoComplete={"off"}
                    autoCorrect={"off"}
                    placeholder={"Search..."}
                    className={styles.input}
                />
            </div>
        </div>
    );
};

export default SearchContainer;