import React from 'react'

const ContacUs = () => {
  return (
    <div className="lg:mx-32 mx-6 text-lg">
        <div className="flex justify-center">
            <div className="flex">
                <h3 className="text-6xl font-light mb-10">Contact</h3>
                <h3 className="text-6xl font-light mb-10 ml-3"><strong> Us</strong></h3>
            </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-3 lg:w-3/5 w-4/5 mx-auto">
            <div>
                <h3 className="font-medium py-3">Name</h3>
                <input className="border border-solid border-gray-300 rounded w-full h-10" type="text" />
            </div>
            <div>
                <h3 className="font-medium py-3">Email</h3>
                <input className="border border-solid border-gray-300 rounded w-full h-10" type="email" />
            </div>

        </div>
        <div className="lg:w-3/5 w-4/5 mx-auto block">
            <h3 className="font-medium py-3">Message</h3>
            <textarea className="border border-solid border-gray-300 rounded w-full" cols="30" rows="6"></textarea>
            <div className="py-6">
                <button className="border border-solid border-[#b0a49c] h-12 w-24 rounded hover:text-white hover:bg-[#b0a49c] font-normal tracking-wide">Send</button>
            </div>
        </div>
    </div>
  )
}

export default ContacUs

