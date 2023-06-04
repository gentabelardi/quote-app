'use client'
import Link from 'next/link'
import { useState } from 'react'
import ColorSelector from '../ColorSelector'
import Input from '../Input'
import Modal from '../Modal'

const Navbar = () => {
    const [readRules, setReadRules] = useState(false);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [color, setColor] = useState('');
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        const wordCount = inputText.trim().split(/\s+/).length;
        if (wordCount <= 15) {
            setText(inputText);
            setError("");
        } else {
            setError("Maximum 15 words allowed");
        }
    };
    return (
        <nav className="absolute top-0 right-0 w-full lg:px-[50px] px-5 flex items-center h-[70px] justify-between">
            <Link href="/" className='text-black font-bold text-[24px] hover:underline'>
                miiind.
            </Link>
            <div className="flex space-x-2">
                <button className=" text-black h-[38px] font-semibold px-3 rounded-lg">
                    about
                </button>
                <Modal title="Create quote" button={
                    <div className="bg-black text-white h-[38px] text-sm px-3 rounded-lg flex items-center">
                        Create Quote
                    </div>
                }>
                    <div className="lg:w-[400px] w-full max:h-[500px] p-5 ">
                        <div className="flex flex-col w-full space-y-3">
                            <textarea
                                value={text}
                                onChange={handleChange}
                                rows={8}
                                className={`text-sm focus:outline-none  border ${error ? "border-red-500 focus:border-red-500" : "border-black/20 focus:border-black/100"
                                    } w-full rounded-lg p-2 resize-none`}
                                placeholder="Enter your quote"
                            ></textarea>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <Input value={quote} setValue={setQuote} />
                            <ColorSelector />
                        </div>
                        <div className="mt-8 space-y-5">
                            <div className="flex justify-between items-center">
                                <span className="text-black/50 text-sm">Have you read the rules above right?</span>
                                <label className="flex items-center cursor-pointer">
                                    <div className="relative flex items-center ">
                                        <input type="checkbox" checked={readRules} onChange={() => setReadRules(!readRules)} className="sr-only" />
                                        <div className={`w-10 h-6 bg-gray-300 rounded-full shadow-inner ${readRules ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out ${readRules ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                                    </div>
                                </label>
                            </div>
                            {readRules ? <button className="bg-black text-white h-[38px] text-sm px-3 rounded-[10px]  w-full text-center ">
                                Create Quote
                            </button> : <div className="bg-black/50 text-white h-[38px] text-sm px-3 rounded-[10px]  w-full text-center flex items-center justify-center">
                                Create Quote
                            </div>}
                        </div>
                    </div>
                </Modal>
            </div>
        </nav>
    )
}

export default Navbar