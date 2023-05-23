import React from 'react';
import classes from './TitleText.module.css'

interface TitleTextProps {
    text: string,
    type: 'big' | 'medium' | 'small',
}



const TitleText = ({ text, type }: TitleTextProps) => {

    let myType;

    if (type === 'big') {
        myType = classes.typeBig
    } else if (type === 'medium') {
        myType = classes.typeMedium
    } else if (type === 'small') {
        myType = classes.typeSmall
    }

    return (
        <div className={myType}>
            {text}
        </div>
    );
};

export default TitleText;