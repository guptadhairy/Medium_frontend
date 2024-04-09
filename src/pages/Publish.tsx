
import { useState } from 'react'
import Appbar from '../components/Appbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Publish = () => {
  const [title , setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const submitHandler = async()=> {
    const response = await axios.post("http://localhost:8787/api/v1/blog", {
      title,
      content,
    },{
      headers: {
        Authorization: localStorage.getItem("token")
      }
    });
    console.log(response.data.id)
    navigate("/bulk")
  }
  return (
    <div>
      <div>
        <Appbar />
      </div>
      <div className=' w-full flex justify-center text-center mt-4'>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} className='w-96 p-3 border border-gray-400 rounded-lg' placeholder='Enter Title' />
      </div>
      <div className="w-full flex justify-center text-center mt-4">
           <textarea value={content} onChange={(e) => setContent(e.target.value)} id="editor" rows={8} className="block w-96  text-sm text-gray-800 border border-gray-700 rounded-lg p-3" placeholder="Write an article..." required />
       </div>
       <div className=' w-full flex justify-center text-center mt-4'>
       <button onClick={submitHandler} type="submit" className=" text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
       </div>
    </div>
  )
}

export default Publish