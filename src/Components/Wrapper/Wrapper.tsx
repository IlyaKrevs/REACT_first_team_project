import { FunctionComponent, PropsWithChildren } from "react";
import styles from './styles.module.css';

interface Props extends PropsWithChildren {
    className?: string;
}

export const Wrapper: FunctionComponent<Props> = ({ className, children }) => (
    <div className={`${styles.wrapper} ${className}`}>
        {children}
    </div>
);


