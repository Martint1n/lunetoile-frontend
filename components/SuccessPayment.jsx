import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function SuccessPayment() {

    useEffect(() => {
        const preorderInfos = useSelector((state) => state.preorderInfos.value);

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
            if (!response.ok) {
                throw new Error('Error submitting data');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [])

    return (
        <div>successpayment</div>
    )
}

export default SuccessPayment;