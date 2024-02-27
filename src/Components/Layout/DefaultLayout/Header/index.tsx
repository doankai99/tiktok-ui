import { Link } from 'react-router-dom';
import Logo from '../../../../public/assets/logo.png';
import { CloudUploadOutlined } from '@ant-design/icons';
function Header() {
    return ( 
        <header className="h-16 shadow-md p-0 m-0 box-border flex rounded-md">
            <div className="flex justify-between items-center w-full h-full bg-slate-100">
                <div className="flex items-center">
                    <div className="text-2xl font-bold ml-4">
                        <span className='flex gap-2'> 
                            <img src={Logo} alt="Logo" className="h-8" /> 
                            Tiktok
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="mr-4">
                        <input type="text" placeholder="Search" className="p-2 w-96 rounded-3xl border border-slate-300 focus:outline-none" />
                    </div>
                </div>
                <div className='flex gap-3 pr-4'>
                    <Link to={'/upload'}>
                        <div className='flex gap-2 justify-center items-center border border-solid border-red p-1 rounded-md bg-red shadow-lg shadow-red text-white'>
                            <span className='w-4 h-4 flex justify-center items-center'><CloudUploadOutlined /></span>
                            <span>Upload</span>
                        </div>
                    </Link>
                    <div className=''>
                        <img src="https://source.unsplash.com/random/150x150" alt="Profile" className="w-8 h-8 rounded-full" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;