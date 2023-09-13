import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import copy from '../assets/copy.png'
import tick from '../assets/tick.png'


const chatgpt = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [searchHistory, setSearchHistory] = useState([])
  const [copied, setCopied] = useState("")
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory'));
    if (storedHistory) {
      setSearchHistory(storedHistory)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();


    const options = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/conversationgpt",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "6c74ff057bmsh36de890169a88e1p146495jsn0faa64769851",
        "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
      },
      data: {
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      },
    };

    try {
      const response = await axios.request(options);
      setResponse(response.data);

      const updatedHistory=[...searchHistory, message]
      setSearchHistory(updatedHistory)
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    } catch (error) {
      console.error(error);
    }
  };

  const formatResponse = (response) => {
    if (!response) return null;

    // Parse the JSON response and format it with 2-space indentation
    let gptResponse = response.GPT.replace(/\\nYou can try our new always-free website: https:\/\/chat.acytoo.com.*? directly\."/g, "");

    // Replace any remaining \n with new lines
    gptResponse = gptResponse.replace(/\\n/g, "\n");
    return gptResponse;
  };
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-6xl font-bold mt-4">
            Question with <span className="organe_gradient">GPT-3</span>
          </h1>
          <p className="text-base font-medium text-gray-500 break-all mt-4">
            GPT-3 API: Smart tool for text, chatbots, translations, and more.
          </p>
        </div>
        <div className="py-4 mt-4">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4 justify-center items-center">
              <label htmlFor="" className="text-4xl font-semibold font-serif">
                Enter your Question:
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex p-2 w-[40vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700"
                />
                <button
                  type="submit"
                  className=" bg-green-700 rounded-2xl p-2 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center py-4 ">
            {
              searchHistory?.map((item, index) => (
                <div key={`link-${index}`} onClick={() => setMessage(item)} className="bg-[#d5d5d584] p-2 shadow-md ">
                  <div className="flex items-center w-[40vw] m-1 p-1 space-x-2 hover:cursor-pointer ">
                    <img width="24" height="24" src={copied === item ? tick : copy} alt="copy" onClick={() => handleCopy(item)} />
                    <p className="flex-1 font-sans text-blue-500 font-medium text-sm truncate">{item}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center items-center rounded-md  min-w-[100%]">
          {response && (
            <div className="flex flex-col rounded-xl bg-white shadow-md p-2 m-2">
              <h2 className="text-2xl font-bold font-serif">Reponse:</h2>
              <p className="break-words text-gray-500 mt-2">
                {formatResponse(response)}
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default chatgpt;
