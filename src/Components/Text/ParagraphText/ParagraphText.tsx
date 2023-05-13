import React from 'react';
import classes from './ParagraphText.module.css'

interface ParagraphTextProps {
    text: string,
    type: string,
}

const ParagraphText = ({ text, type }: ParagraphTextProps) => {

    console.log(type)

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