import styles from "./VenueTag.module.css";

interface IProps {
    tag: string;
    index: number;
}

type IColor = Record<number, string>;

const colorMapping: IColor = {
    0: "purple",
    1: "green",
    2: "orange",
    3: "blue"
};

const VenueTag = ({tag, index}: IProps) => {
    const colorIndex = index % Object.keys(colorMapping).length;

    return (
        <span className={`${styles.venueTag} ${styles[colorMapping[colorIndex]]}`}>
            {tag}
        </span>
    );
};

export default VenueTag;