import { useEffect, useState } from "react";
import { HeartFilled, HeartOutlined, MessageOutlined, ShareAltOutlined } from "@ant-design/icons";
import { anmialVideos } from "../../Components/Layout/components/ListVideo";  
import { Comment } from "./comment";

function Content() {
    const [randomImageUrl, setRandomImageUrl] = useState("");
    const [isFollowing, setIsFollowing] = useState(false);
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState(false);
    useEffect(() => {
        fetch("https://source.unsplash.com/random/150x150")
            .then((response) => {
                if (response.ok) {
                    setRandomImageUrl(response.url);
                    Math.random() > 0.5 && setIsFollowing(true); // Randomly set isFollowing to true or false
                } else {
                    console.error("Failed to fetch random image");
                }
            })
            .catch((error) => {
                // Handle error
                console.error("Error fetching random image:", error);
            });
    }, []);

    const handleLike = () => setLiked(!liked ? true : false)
    const openPopupComment = () => setComment(comment ? false : true)
    // useEffect(() => {} , []);
    return ( 
        <>
            {anmialVideos.map((video, index) => 
                <div className="w-full p-4">
                    <div className="flex w-full p-4 justify-between items-center">
                        <div className="flex gap-2">
                            <div className="">
                                <img src={randomImageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[1rem] font-bold">Username {index + 1}</span>
                                <span className="text-[1rem] font-normal">Video {index + 1}</span>
                                <span className="text-[0.8rem] italic text-blue">#Hastag</span>
                            </div>
                        </div>
                        {isFollowing && (
                            <div className="border border-solid border-red p-1 rounded-md bg-red shadow-lg shadow-red">
                            <button className="text-white"> + Follow</button>
                            </div>
                        )}
                    </div>
                    <div className="">
                        <video className="w-full" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={handleLike}>
                            {liked ? <HeartFilled /> : <HeartOutlined />}
                        </button>
                        <button onClick={openPopupComment}><MessageOutlined /></button>
                        <button><ShareAltOutlined /></button>
                    </div>
                    {comment && (
                    <Comment showComment={comment} index = {index}/>
                    )}
                </div>
            )}
        </>
    );
}

export default Content;