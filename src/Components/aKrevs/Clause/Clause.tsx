import React from 'react';
import classes from './Clause.module.css'


import TitleText from '../Text/TitleText/TitleText';
import ParagraphText from '../Text/ParagraphText/ParagraphText';

import ExpandCollapse from './ExpandCollapse/ExpandCollapse';

interface ClauseProps {
    title?: {
        text: string,
        type: 'big' | 'medium' | 'small',
    },
    description: {
        text: (string | any)[],
        type: 'classic'
    },
    showStyle: 'homePage',
}

const Clause = ({ title, description, showStyle }: ClauseProps) => {

    let showLength;
    let widthStyle;

    if (showStyle === 'homePage') {
        showLength = 230;
        widthStyle = classes.homeWidth;
    }



    const { useState } = React;
    let [ellipsisStatus, setEllipsisStatus] = useState(true);

    let basicContent = description.text;
    let ellipsisContent = [description.text[0].slice(0, showLength) + '...'];
    let showContent;

    if (ellipsisStatus) {
        showContent = ellipsisContent;
    } else {
        showContent = basicContent;
    }



    return (
        <div className={[classes.clauseContainer, widthStyle].join(' ')}>
            {title && <TitleText text={title.text} type={title.type} />}


            <div className={classes.clauseStyle}>
                {showContent.map((item, index) => {
                    if (typeof item === 'string') {
                        return <ParagraphText key={index} text={item} type={description.type} />
                    } else {
                        return item;
                    }
                })}
            </div>

            <ExpandCollapse status={ellipsisStatus} onClick={() => setEllipsisStatus(item => !item)} />
        </div>
    );
};

export default Clause;