import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function SuccessPayment() {
    const preorderInfos = useSelector((state) => state.preorderInfos.value);

    useEffect(() => { //à tester sans le useEffect pour voir s'il ajoute 1 ou 2 documents à la database
        console.log('preorderInfo :', preorderInfos)
        console.log(preorderInfos.artist)

        fetch(`http://localhost:3000/preorder/${preorderInfos.artist}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(preorderInfos),
        })
        .then((response) => {
            response.json()
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [])

    window.onbeforeunload = function() {
        localStorage.clear();
    }

    return (
        <div>successpayment</div>
    )
}

export default SuccessPayment;