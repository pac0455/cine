import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';
import palomitas from '../assets/palomitas.png';

const Reservar = () => {

    return (
        <>
            <div class="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
                <img src={palomitas} alt="" srcset="" />
                <div class="mt-8">
                    <form action="https://fabform.io/f/xxxxx" method="post" class="flex flex-col items-center">
                        <input type="text" name="name" placeholder="Your Full Name" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required />
                        <input type="email" name="email" placeholder="Your Email Address" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required />
                        <label className='text-3xl ' htmlFor="Fila">Fila: </label>
                        <select className='w-64 bg-[#1f2937] p-2 text-lg font-medium outline-none  mb-4' name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <input type="email" name="email" placeholder="Tu pelicula" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required />
                        <textarea name="message" placeholder="Your Message" rows="4" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 resize-none w-full" required></textarea>
                        <button type="submit" class="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 focus:outline-none">Send</button>
                       
                    </form>
                    <p class="mt-2 text-gray-400 text-sm">We'll get back to you as soon as possible!</p>
                    <div class="mt-4 text-gray-500 text-sm">
                        Powered by <a href="https://fabform.io" class="underline" target="_blank" rel="noopener noreferrer">FabForm.io</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reservar;
