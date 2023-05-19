import React from 'react';
import TitleText from '../Text/TitleText/TitleText';
import ParagraphText from '../Text/ParagraphText/ParagraphText';

import classes from './Clause.module.css'
import ExpandCollapse from './ExpandCollapse/ExpandCollapse';

interface ClauseProps {
    title?: { text: string, type: string },
    description: { text: (string | any)[], type: string },
}

const Clause = ({ title, description }: ClauseProps) => {

    return (
        <>
            {title && <TitleText text={title.text} type={title.type} />}


            <div className={classes.clauseStyle}>
                {description.text.map(item => {
                    if (typeof item === 'string') {
                        return <ParagraphText text={item} type={description.type} />
                    } else {
                        return item;
                    }
                })}
            </div>

            <ExpandCollapse />
        </>
    );
};

export default Clause;