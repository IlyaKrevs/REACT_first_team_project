import React from 'react';

import classes from './ExpandCollapse.module.css'

interface ExpandCollapseProps {
    status: boolean,
    onClick: () => void;
}

const ExpandCollapse = ({ status, onClick }: ExpandCollapseProps) => {

    let textRU = {
        show: 'Развернуть',
        hide: 'Свернуть',
    }

    let textENG = {
        show: 'Expand',
        hide: 'Collapse',
    }

    let currentText = textRU;



    return (
        <div onClick={onClick} className={classes.toggle}>
            {status ? currentText.show : currentText.hide}
        </div>
    );
};

export default ExpandCollapse;