import { useEffect, useState } from "react";

export function Comment({showComment} : {showComment: boolean, index: number}) {
    const [randomImageUrl, setRandomImageUrl] = useState("");
    useEffect(() => {
        fetch("https://source.unsplash.com/random/150x150")
            .then((response) => {
                if (response.ok) {
                    setRandomImageUrl(response.url);
                } else {
                    // Handle error
                    console.error("Failed to fetch random image");
                }
            })
            .catch((error) => {
                // Handle error
                console.error("Error fetching random image:", error);
            });
    }, []);
    if(showComment) {
        return (           
            <div className="w-full p-4">
                <div className="flex gap-4">
                    <div className="">
                        <img src={randomImageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="w-full">
                        <div className="">
                            <textarea className="w-full p-4 border border-solid border-slate-300 rounded-lg focus:outline-none" placeholder="Write a comment..." />
                        </div>
                        <div className="inset-y-0 right-0">
                            <button className="text-white bg-blue p-2 rounded-lg">Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return null;
    }
}
