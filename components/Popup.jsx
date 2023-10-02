import React from "react";

const Popup = ({ isOpen, onClose, children }) => {

    

    return (
        <div className={`${!isOpen ? 'hidden' : null} fixed inset-0 flex items-center justify-center z-50 h-screen`} >
            <div className="bg-white p-4 shadow-lg rounded-lg overflow-y-scroll max-h-[750px] max-w-[1200px] mx-5  relative h-full">
                {children}
                <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 absolute top-1 right-1"
                >
                    X
                </button>
            </div>
            

        </div>
    );
};

export default Popup;
