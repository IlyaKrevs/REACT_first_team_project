import React from 'react';
import classes from './FilterSuggestItem.module.css';
import { useSelector } from 'react-redux';


interface FilterSuggestItemProps {
    globalValue: any,
    title: {
        nameRU: string,
        nameEN: string,
    },
    findArr: {
        id: number,
        nameRU: string,
        nameEN: string,
    }[],
    professionId: number,
    callback: (arg: {
        idMember: number | null,
        idProfession: number | null,
    } | []) => void,
}

type desiredArr = {
    id: number,
    nameRU: string,
    nameEN: string,
}

const FilterSuggestItem = ({ globalValue, title, findArr, professionId, callback }: FilterSuggestItemProps) => {

    let isRussian = useSelector((state: any) => state.LanguageSwitch.isRussian);

    const { useState, useEffect } = React;




    let [currentInputValue, setCurrentInputValue] = useState('');
    let [showStatus, setShowStatus] = useState(false);


    let myArr: desiredArr[] = [];

    let [resultArr, setResultArr] = useState(myArr);

    let myIdNumber: number = 0;
    let [chosenItem, setChosenItem] = useState(myIdNumber)


    useEffect(() => {
        if (globalValue.length === 0 && currentInputValue !== '') {
            setCurrentInputValue('')
        }
    }, [globalValue])




    useEffect(() => {
        if (!currentInputValue) {
            setShowStatus(false)
        }

        let myTemp: desiredArr[] = findArr.filter(item => {
            if (item.nameRU && item.nameRU.toLocaleLowerCase().startsWith(currentInputValue.toLowerCase())) {
                return true
            }
            if (item.nameEN && item.nameEN.toLocaleLowerCase().startsWith(currentInputValue.toLowerCase())) {
                return true
            }
        })

        setResultArr(myTemp)



    }, [currentInputValue])



    useEffect(() => {
        if (currentInputValue === '') {
            callback([])
        } else {
            callback({
                idMember: chosenItem,
                idProfession: professionId,
            })
        }
    }, [chosenItem, currentInputValue])

    return (
        <div className={classes.mainContainer}>
            <div className={classes.titleContainer}>
                {isRussian ? title.nameRU : title.nameEN}
            </div>
            <div className={classes.inputContainer}>
                <input className={classes.inputStyle}
                    type="text"
                    value={currentInputValue}
                    onChange={(e) => {
                        setCurrentInputValue(e.target.value)
                        setShowStatus(true)
                    }}
                    onKeyDown={(e) => e.key === 'Enter' ? setShowStatus(false) : null}
                />
            </div>
            <div className={classes.dropDownContainer}>
                {showStatus && resultArr.map((item, index) => {
                    if (index < 5) {
                        return <div className={classes.dropDownItem}
                            onClick={() => {
                                setCurrentInputValue(item.nameRU || item.nameEN)
                                setChosenItem(item.id)
                                setShowStatus(false)
                            }}
                        >
                            <div className={classes.nameRUContainer}>
                                {item.nameRU}
                            </div>
                            <div className={classes.nameENContainer}>
                                {item.nameEN}
                            </div>
                        </div>
                    }
                })}
            </div>
        </div >
    );
};

export default FilterSuggestItem;