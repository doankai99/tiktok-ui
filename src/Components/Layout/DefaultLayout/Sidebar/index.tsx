import { Link } from "react-router-dom";
import LogoFollow from "../../../../public/assets/follower.png"
import LogoHome from "../../../../public/assets/home.png"
import LogoFriend from "../../../../public/assets/friends.png"
import LogoLive from "../../../../public/assets/live.png"
import { useState , useEffect } from "react";

function Sidebar() {
    const [randomImageUrl, setRandomImageUrl] = useState('');
    useEffect(() => {
        fetch('https://source.unsplash.com/random/150x150')
            .then(response => {
                console.log(response);
                if (response.ok) {
                    setRandomImageUrl(response.url);
                } else {
                    // Handle error
                    console.error('Failed to fetch random image');
                }
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching random image:', error);
            });
    }, []);
    return ( 
        <aside className="h-full shadow-md rounded-md">
            <div className="min-h-[12.5rem] border-b border-solid border-slate-300">
                <ul>
                    <li>
                        <Link to="/" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <img src={LogoHome} alt="Home" className="w-8 h-8 rounded-full" />
                                <span>Home</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/following" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <img src={LogoFollow} alt="Following" className="w-8 h-8 rounded-full" />
                                <span>Following</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/friends" className="text-black block p-4 font-bold text-base">
                            <div className="flex gap-2 items-center">
                                <img src={LogoFriend} alt="Following" className="w-8 h-8 rounded-full" />
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
                </ul>
            </div>
            <div className="max-h-[25rem] overflow-y-auto">
                <div className="">
                    <span className="text-black block p-4 text-sm">The accounts that are currently following</span>
                </div>
                <div className="p-4">
                    <div className="flex gap-2">
                        <div>
                            <img src={randomImageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
                        </div>
                        <div className="">
                            <span className="text-black font-bold block leading-[1rem]">Username</span>
                            <span className="text-black block">Name</span>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex gap-2">
                        <div>
                            <img src={randomImageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
                        </div>
                        <div className="">
                            <span className="text-black font-bold block leading-[1rem]">Username 2</span>
                            <span className="text-black block">Name</span>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex gap-2">
                        <div>
                            <img src={randomImageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
                        </div>
                        <div className="">
                            <span className="text-black font-bold block leading-[1rem]">Username 3</span>
                            <span className="text-black block">Name</span>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex gap-2">
                        <div>
                            <img src={randomImageUrl} alt="Profile" className="w-10 h-10 rounded-full" />
                        </div>
                        <div className="">
                            <span className="text-black font-bold block leading-[1rem]">Username 3</span>
                            <span className="text-black block">Name</span>
                        </div>
                    </div>
                </div>
            </div>   
        </aside>
    );
}

export default Sidebar;