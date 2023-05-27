import React from 'react';
import classes from './CrumbsContainer.module.css';
import CrumbsItem from './CrumbsItem/CrumbsItem';
import TitleText from '../Text/TitleText/TitleText';

interface CrumbsContainerProps {

}

const CrumbsContainer = () => {


    let myArr = ['Мой Иви', 'Фильмы', 'Казино', 'Блекджек',];

    let myArr2 = ['Все жанры', 'Все страны', 'Все годы',]

    let mapArr = [];

    for (let i = 0; i < myArr.length; i++) {
        mapArr.push({
            text: myArr[i],
            link: myArr[i],
        })

    }


    return (
        <div className={classes.mainContainer}>
            <ul className={classes.crumbsUL}>
                {mapArr.map(item => {
                    return <CrumbsItem text={item.text} link={item.link} />
                }
                )}
            </ul>

            <div className={classes.filtersTitle}>
                <TitleText type='moviePage' text='Фильмы' />
                <div className={classes.paramsContainer}>
                    {myArr2.map(item => {
                        return <div className={classes.paramsItem}>
                            {item}
                        </div>
                    })}
                </div>
            </div>
        </div >
    );
};

export default CrumbsContainer;