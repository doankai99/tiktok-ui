import { EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import images from '../../Components/Layout/components/images/images';
import VideoPlayer from "../../Components/Layout/components/VideoPlayer/index";
import {videos} from "../../Components/Layout/components/ListVideo";
import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}
function Profile() {
    const [users,setUsers]= useState<User[]>([]);
    const [video, setVideos] = useState<string[]>([]);
    useEffect(() => {
        setVideos(videos)
    }, [])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res: { data: any; }) => {
            setUsers(res.data)
        })
        .catch((err: any) => console.log(err))
    },[])
    return ( 
        <>
            {users.length>0 ? (<><div className="p-4">
                <div className="flex gap-3">
                    <div className="">
                        <img src={images[Math.floor(Math.random() * 14)] } alt="Profile" className="w-24 h-24 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-black font-bold block leading-[1rem]">{users[1].username}</span>
                        <span className="text-black block text-base">{users[1].name}</span>
                        <button className="flex items-center p-1 border border-solid border-black">
                            <span className=""><EditOutlined /></span>
                            <span className="">Edit Profile</span>
                        </button>
                    </div>
                </div>
                <div className="flex gap-5 pt-4">
                    <div className="flex gap-2">
                        <span className="text-black font-bold">0</span>
                        <button className="text-black text-base">Following</button>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-black font-bold">0</span>
                        <button className="text-black text-base">Follower</button>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-black font-bold">0</span>
                        <button className="text-black text-base">Likes</button>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-black font-bold text-2xl pt-4">About</h1>
                    <p className="text-black text-base pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </div>
            <div className="">
                <button className="w-1/2 p-2 bg-black text-white">Videos</button>
                <button className="w-1/2 p-2 bg-black text-white">Likes</button>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
                {video.map((video, index) => 
                    <VideoPlayer videoUrl={video} index={index}/>
                )}
            </div></>) : (<div>Loading...</div>)}
            
        </>
    );
}

export default Profile;