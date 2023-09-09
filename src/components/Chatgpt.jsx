import React, { useState } from "react";
import './App.css'
import axios from 'axios'
// import { useFetchConversationGptQuery } from "../services/chatgpt";
const apiKey = import.meta.VITE_RAPID_API_KEY;
const chatgpt = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/conversationgpt',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com',
      },
      data: {
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
      },
    };

    try {
      const response = await axios.request(options);
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-[100vh]">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-6xl font-bold mt-4">
            Question with <span className="organe_gradient">GPT-3</span>
          </h1>
          <p className=" text-base font-medium text-gray-500 break-all mt-4">
            GPT-3 API: Smart tool for text, chatbots, translations, and more.
          </p>
        </div>
        <div className="py-4 mt-4">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 justify-center items-center">
              <label htmlFor="" className="text-4xl font-semibold font-serif">Enter your Question:</label>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className=" flex p-2 w-[40vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>

          {response && (
            <div>
              <h2>Response:</h2>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default chatgpt;
