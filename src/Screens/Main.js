import '../App.css';
import Post from '../Components/Post';

function Main() {
  return (
    <>
        <main className='bg-white grid container mx-auto rounded my-3 p-4 grid-cols-1'>
          <Post  />
        </main>
    </>

  );
}


export default Main;