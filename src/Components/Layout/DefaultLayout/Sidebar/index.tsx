import { Link } from "react-router-dom";
import LogoLive from "../../../../public/assets/live.png"
import { useState , useEffect } from "react";
import { HomeOutlined, UserOutlined, UserSwitchOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}
function Sidebar() {
    const [users,setUsers]= useState<User[]>([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res: { data: any; }) => {
            setUsers(res.data)
        })
        .catch((err: any) => console.log(err))
    },[])
    return ( 
        <aside className="h-full shadow-md rounded-md">
            <div className="min-h-[12.5rem] border-b border-solid border-slate-300">
                <ul>
                    <li>
                        <Link to="/" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <span className="flex items-center w-8 h-8 rounded-full text-xl"><HomeOutlined /></span>
                                <span>Home</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/following" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <span className="flex items-center w-8 h-8 rounded-full text-xl"><UserSwitchOutlined /></span>
                                <span>Following</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/friends" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <span className="flex items-center w-8 h-8 rounded-full text-xl"><UsergroupAddOutlined /></span>
                                <span>Friends</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/friends" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <img src={LogoLive} alt="Following" className="w-8 h-8 rounded-full" />
                                <span>LIVE</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <span className="flex items-center w-8 h-8 rounded-full text-xl"><UserOutlined /></span>
                                <span>Profile</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="max-h-[17.5rem] overflow-y-auto">
                <div className="">
                    <span className="text-black block p-4 text-sm">The accounts that are currently following</span>
                </div>
                {users.map((user: User) => (
                    <div className="p-4">
                        <div className="flex gap-2">
                            <div>
                                <img src={`https://source.unsplash.com/random/150x150?sig=${user.id}`} alt="Profile" className="w-10 h-10 rounded-full" />
                            </div>
                            <div className="">
                                <span className="text-black font-bold block leading-[1rem]">{user.username}</span>
                                <span className="text-black block">{user.name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>   
        </aside>
    );
}

export default Sidebar;