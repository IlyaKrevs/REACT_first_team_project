import React, {AnchorHTMLAttributes, FC} from 'react';
import styles from "./back.module.css";

type IProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Back: FC<IProps> = ({className, children}) => {
    return (
        <button
            className={styles.btn}
        >
            <span>{children}</span>
        </button>
    );
};
export default Back;