import React from 'react'
import { useState } from 'react'

const App = () => {

  let [Formdata, setFormData] = useState({
    name: "",
    email: "",
    image: null,
  });
  console.log(Formdata);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setFormData({ ...Formdata, [name]: value })
  }

  const handleimage = (e) => {


    setFormData({ ...Formdata, image: e.target.files[0] })

  }


  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(Formdata);


  }

  return (
    <div className='bg-black h-screen flex items-center justify-center'>
      <form action="" onSubmit={handlesubmit} className='bg-gray-300 gap-4  flex-col flex justify-center rounded p-4'>
        <div className='text-3xl font-semibold '><h1>Form</h1></div>
        <input
          name='name'
          value={Formdata.name}
          onChange={handleChange} type="text" placeholder='Enter your name' className='p-4 border border-black w-100 rounded-xl ' />

        <input value={Formdata.email}
          name='email'
          onChange={handleChange}
          type="text" placeholder='Enter your email' className='p-4 border border-black rounded-xl ' />

        <input
          name='image'
          onChange={handleimage} type="file" placeholder='Enter your image' className='text-l cursor-pointer' />

        <button className=' font-semibold text-lg p-2 bg-white rounded-2xl border border-black cursor-pointer hover:bg-black hover:text-white '>Create</button>
      </form>
    </div>
  )
}

export default App;
