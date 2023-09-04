import React, { useState } from "react";

const Search = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: "",
    });
    const handleSubmit = async (e) => {
        alert("form submitted")
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
                                placeholder="Search"
                                value={article.url}
                                className=" flex p-2 w-[40vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700"
                                onChange={(e) => setArticle({ ...article, url: e.target.value })}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
