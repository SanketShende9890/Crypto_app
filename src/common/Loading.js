import React from 'react';
import Loader from "react-js-loader";


const Loading = (props) => {
  return (
    <section className='h-screen w-full flex justify-center items-center'>
        <Loader
              type={props.type}
              bgColor="#1e68f6"
              color="green"
              size={150}
            />
    </section>
  )
}

export default Loading