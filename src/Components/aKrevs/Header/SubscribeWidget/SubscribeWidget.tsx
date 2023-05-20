import React from 'react';
import classes from './SubscribeWidget.module.css';
import WidgetAnimationContainer from './AnimationContainer/WidgetAnimationContainer';
import RectangleBtn from '../../Buttons/RectangleBtn/RectangleBtn';

const SubscribeWidget = () => {

    let thisBtnIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>;


    let btnTextRU = 'Смотреть на SmartTV';
    let btnTextENG = 'Look on SmartTV';

    let currentText = btnTextRU;

    return (
        <div className={classes.mainContainer}>

            <WidgetAnimationContainer />

            <RectangleBtn color='light' text={currentText} icon={thisBtnIcon} />
        </div>
    );
};

export default SubscribeWidget;