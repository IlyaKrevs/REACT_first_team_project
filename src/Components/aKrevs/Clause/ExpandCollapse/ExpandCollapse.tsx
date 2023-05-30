import React from 'react';

import classes from './ExpandCollapse.module.css'
import { useSelector } from 'react-redux';

interface ExpandCollapseProps {
    status: boolean,
    onClick: () => void;
}

const ExpandCollapse = ({ status, onClick }: ExpandCollapseProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian)

    let textRU = {
        show: 'Развернуть',
        hide: 'Свернуть',
    }

    let textENG = {
        show: 'Expand',
        hide: 'Collapse',
    }

    let currentText = isRussian ? textRU : textENG;



    return (
        <div onClick={onClick} className={classes.toggle}>
            {status ? currentText.show : currentText.hide}
        </div>
    );
};

export default ExpandCollapse;