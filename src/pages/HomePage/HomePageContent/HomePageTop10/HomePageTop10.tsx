import React from 'react';
import Carousel from '../../../../Components/aKrevs/Carousel/Carousel';
import Top10Item from '../../../../Components/aKrevs/Top10Item/Top10Item';

import orangeCow from '../../../../assets/img/orange_cow.jpg';

import number1 from '../../../../assets/img/top10/number1.svg';
import number2 from '../../../../assets/img/top10/number2.svg';
import number3 from '../../../../assets/img/top10/number3.svg';
import number4 from '../../../../assets/img/top10/number4.svg';
import number5 from '../../../../assets/img/top10/number5.svg';
import number6 from '../../../../assets/img/top10/number6.svg';
import number7 from '../../../../assets/img/top10/number7.svg';
import number8 from '../../../../assets/img/top10/number8.svg';
import number9 from '../../../../assets/img/top10/number9.svg';
import number0 from '../../../../assets/img/top10/number0.svg';




const HomePageTop10 = () => {

    let bodyAsk =
    {
        "part": 1,
        "typeSorting": "rating",
    }


    const { useState, useEffect } = React;

    let emptyArr: any = [];
    let [top10Arr, setTop10Arr] = useState(emptyArr);

    let giveMeTop10FilmsArr = () => {
        fetch('http://localhost:12120/api/films/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyAsk)
        })
            .then(response => response.json())
            .then(data => {
                setTop10Arr(data)
            })
            .catch(err => console.log(`Error msg: ${err}`))
    };

    useEffect(() => {
        giveMeTop10FilmsArr()

    }, [])






    let numberArr = [number1, number2, number3, number4, number5, number6, number7, number8, number9, number0]


    function createTop10ItemsObject() {
        let myTemp = null;
        let myNumber;
        let myArr = [];
        let maxLength = 10;


        for (let i = 0; i < maxLength; i++) {
            myNumber = numberArr[i];
            if (i === (maxLength - 1)) {
                myTemp = number0;
                myNumber = number1;
            };

            myArr.push({
                image: top10Arr[i].imageName,
                firstNumber: myNumber,
                secondNumber: myTemp,
            })
        }

        return myArr;
    }

    function make10itemsArr() {

        let myArr: React.ReactNode[] = [];

        createTop10ItemsObject().map((item, index) => {
            myArr.push(<Top10Item key={index} image={item.image} firstNumber={item.firstNumber} secondNumber={item.secondNumber} />)
        })

        return myArr;
    }


    return (
        <>
            <Carousel type='top10'>
                {top10Arr.length && make10itemsArr()}
            </Carousel>
        </>
    );
};

export default HomePageTop10;