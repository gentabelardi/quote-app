'use client'
import React, { useEffect, useState } from 'react'

import { Lora } from 'next/font/google';

const lora = Lora({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
});

type Quote = {
    text: string;
    name: string;
    color: string;
};

const quotes: Quote[] = [
    {
        text: "In the middle of difficulty lies opportunity.",
        name: "Albert Einstein",
        color: "#EDC68A",
    },
    {
        text: "The only way to do great work is to love what you do",
        name: "Steve Jobs",
        color: "#D4CEC2",
    },
    {
        text: "Stay hungry, stay foolish.",
        name: "Steve Jobs",
        color: "#EAE0E1",
    },
];

function Card() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentQuoteIndex((prevIndex) =>
            prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const savedIndex = localStorage.getItem('quoteIndex');
        if (savedIndex !== null && Number(savedIndex) < quotes.length) {
            setCurrentQuoteIndex(Number(savedIndex));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('quoteIndex', String(currentQuoteIndex));
    }, [currentQuoteIndex]);

    return (
        <div className=" space-y-5 w-[300px]  flex flex-col items-center justify-center ">
            <div style={{ backgroundColor: `${quotes[currentQuoteIndex].color}` }} className="flex flex-col h-[400px] items-center justify-center  p-5 rounded-2xl w-full  relative ">
                <p className={`text-center text-[18px] font-bold ${lora.className}`}>{quotes[currentQuoteIndex].text}</p>
                <span className='absolute bottom-5 -translate-x-1/2 left-1/2 text-sm'>- {quotes[currentQuoteIndex].name}</span>
            </div>
            <button onClick={handleNextClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>
            </button>
        </div>
    )
}

export default Card