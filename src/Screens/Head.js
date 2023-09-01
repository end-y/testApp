import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function Head({blogCount}) {
  return (
    <header className='bg-white grid container mx-auto rounded my-3 p-4 grid-cols-1'>
        <div className='flex flex-row justify-between items-center w-100'>
            <div className='flex flex-row items-center space-x-1'>
                <div className='logo bg-sky-600 text-white rounded-full p-2'>
                    <div className='bg-indigo-600 rounded-full p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin='round' d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </div>
                </div>
                <h2 className='text-gray-500 font-semibold'>Orbit Blog</h2>
            </div>
           
            <nav className='flex justify-center   items-center space-x-3'>
                <div className='relative'>
                    <span style={{top:-15, right:-15}} className='absolute bg-green-300 rounded-full w-6 h-6 text-center'>{blogCount}</span>
                    <Link to={"/"}><p className='text-gray-500 font-semibold'>Posts</p></Link>
                </div>

                <div className='text-gray-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </div>
                <div className='text-gray-500'>
                    <svg style={{width:24}} xmlns="http://www.w3.org/2000/svg" fill='rgb(107 114 128)' viewBox="0 0 512 512">
                        {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                        <path d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"/>
                    </svg>
                </div>
                <img className='object-cover h-12 w-12 rounded-full' src='/Images/profile.jpg' />
            </nav>
        </div>
        
    </header>
  );
}
const mapStateToProps = (state) => ({
    blogCount: state?.blogCount.blogCount || 0 // Sayacı buradan al
});
export default connect(mapStateToProps)(Head);