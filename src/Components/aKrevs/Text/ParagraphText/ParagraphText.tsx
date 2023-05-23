import React from 'react';
import classes from './ParagraphText.module.css'

interface ParagraphTextProps {
    text: string,
    type: 'classic',
}

const ParagraphText = ({ text, type }: ParagraphTextProps) => {

    let myType;

    if (type === 'classic') {
        myType = classes.classic;
    }

    return (
        <p className={myType}>
            {text}
        </p>
    );
};

export default ParagraphText;