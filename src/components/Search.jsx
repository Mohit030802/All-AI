import React, { useState, useEffect } from "react";
import { useLazyGetArticleSummaryQuery } from "../services/article";
import copy from '../assets/copy.png'
import tick from '../assets/tick.png'
const Search = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });
    const [allArticle, setAllArticle] = useState([]);
    const [copied,setCopied]=useState("")

    const [getSummary, { error, isFetching }] = useLazyGetArticleSummaryQuery();
    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem("articles")
        );

        if (articlesFromLocalStorage) {
            setAllArticle(articlesFromLocalStorage);
        }
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {

            const newArticle = { ...article, summary: data.summary };
            const updatedArticle = [newArticle, ...allArticle]
            setArticle(newArticle);
            setAllArticle(updatedArticle);
            localStorage.setItem("articles", JSON.stringify(updatedArticle))
            console.log(newArticle)
        }

    }
     const handleCopy=(copyUrl)=>{
        setCopied(copyUrl)
        navigator.clipboard.writeText(copyUrl)
        setTimeout(()=>{
            setCopied(false)
        },3000)
     }
    return (
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex justify-center items-center mt-8  space-x-2 py-4 ">
                        <div className="absolute ">
                            <button className="absolute flex justify-center items-center text-center  right-0 mr-4">
                                <span className=" flex text-center text-3xl text-green-500">
                                    ↵
                                </span>
                            </button>
                            <input
                                type="url"
                                required
                                placeholder="Enter a URL....."
                                value={article.url}
                                className=" flex p-2 w-[40vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700"
                                onChange={(e) => setArticle({ ...article, url: e.target.value })}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center py-4 ">
                    {
                        allArticle?.map((item, index) => (
                            <div key={`link-${index}`} onClick={() => setArticle(item)} className="bg-[#d5d5d584] p-2 shadow-md">
                                <div className="flex items-center w-[40vw] m-1 p-1 space-x-2 hover:cursor-pointer">
                                    <img width="24" height="24" src={copied===item.url ? tick:copy}  alt="copy" onClick={()=>handleCopy(item.url)}/>
                                    <p className="flex-1 font-sans text-blue-500 font-medium text-sm truncate">{item.url}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="rounded-xl">
                <div className="flex justify-center items-center p-2  shadow-xl min-w-full w-[75%] bg-white">
                    {
                        isFetching ?
                            (
                                <span className="loading loading-dots loading-lg"></span>
                            ) :
                            (
                                error ? (
                                    <p className='font-inter font-bold text-black text-center'>
                                        Well, that wasn't supposed to happen...
                                        <br />
                                        <span className='font-satoshi font-normal text-gray-700'>
                                            {error?.data?.error}
                                        </span>
                                    </p>
                                ) :
                                    (
                                        article.summary && (
                                            <div className='flex flex-col justify-center items-center break-all  m-2 p-4  backdrop-filter backdrop-blur-3xl bg-opacity-50 font-serif   gap-3'>
                                              <h2 className='font-satoshi font-bold text-gray-900 text-2xl'>
                                                Article <span className='blue_gradient'>Summary</span>
                                              </h2>
                                              <div className='summary_box'>
                                                <p className=' leading-5 font-normal text-md   text-gray-800'>
                                                  {article.summary}
                                                </p>
                                              </div>
                                            </div>
                                          )
                                    )
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
