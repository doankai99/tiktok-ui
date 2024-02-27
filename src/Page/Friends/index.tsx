import { useEffect, useState } from "react";
import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}
function Friends() {
    const [users,setUsers]= useState<User[]>([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res: { data: any; }) => {
            setUsers(res.data)
        })
        .catch((err: any) => console.log(err))
    },[])
    return (
        <>
            <div className="grid grid-cols-3 gap-3 p-4 border-b border-solid border-slate-300">
                {users.map((user: User) => (
                    <div key={user.id} className="flex gap-3">
                        <div className="">
                            <img src={`https://source.unsplash.com/random/150x150?sig=${user.id}`} alt="Profile" className="w-24 h-24 rounded-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-black font-bold block leading-[1rem]">{user.username}</span>
                            <span className="text-black block text-base">{user.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Friends;