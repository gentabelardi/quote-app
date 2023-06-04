'use client'
import { MouseEvent, useEffect, useRef, useState, FC } from 'react'

interface IProps {
    button: JSX.Element;
    children: JSX.Element;
    title: string
}


const TABS = {
    CONTENT: 0,
    ATTENTION: 1,
};


const Modal: FC<IProps> = ({ button, children, title }) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const modalRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<number>(TABS.CONTENT)

    const handleParentClick = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === modalRef.current) {
            setOpenModal(false);
        }
    };

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openModal]);

    const handleShowTab = () => {
        const attentionTabContent = (
            <div className="lg:w-[400px] w-full max:h-[400px] p-5 ">
                <p className='text-sm'>
                    <span className="font-bold">Attention</span>: Please refrain from sharing sensitive information or engaging in any activities that violate the law and compromise people's privacy. Remember, once you provide such information, it becomes a permanent quote visible to everyone and cannot be erased. Let's prioritize protecting personal privacy and abiding by legal boundaries.
                </p>
            </div>
        );
        return activeTab === 1 ? attentionTabContent : children;
    }

    const handleClickTab = () => {
        setActiveTab((prevTab) => (prevTab === TABS.CONTENT ? TABS.ATTENTION : TABS.CONTENT));
    }

    return (
        <div className='relative '>
            <button onClick={() => setOpenModal(!openModal)} className="flex w-full">
                {button}
            </button>
            {openModal ? <div ref={modalRef} onClick={handleParentClick} className="flex left-0 right-0 items-center z-50 justify-center bg-black/20 fixed h-screen  bottom-0 w-full ">
                <div className="flex flex-col slide-top bg-white   items-center z-40 rounded-2xl">
                    <div className="flex justify-center h-[55px] items-center border-b w-full relative">
                        <button onClick={() => setOpenModal(false)} className="absolute left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                        </button>
                        <h1 className="font-semibold text-sm">
                            {title}
                        </h1>
                        <button onClick={handleClickTab} className="absolute right-5">
                            {activeTab === TABS.CONTENT ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"></path></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 17H21V19H3V17ZM3 11H6V14H3V11ZM8 11H11V14H8V11ZM3 5H6V8H3V5ZM13 5H16V8H13V5ZM18 5H21V8H18V5ZM13 11H16V14H13V11ZM18 11H21V14H18V11ZM8 5H11V8H8V5Z"></path></svg>}
                        </button>
                    </div>
                    {handleShowTab()}
                </div>
            </div> : null}
        </div>
    )
}

export default Modal