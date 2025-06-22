import React from 'react'
import Container from '../components/Container'
import notfound from '../assets/images/notfound.svg'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <>
        <section className='my-20'>
            <Container>
                <div className="flex justify-center items-center">
                    <div className="mx-auto text-center">
                        <img src={notfound} alt="Not Found" className='w-[60%] mx-auto mb-10' />
                        <Link to={'/'} className='mx-auto uppercase text-white bg-blue-500 px-10 py-3 rounded-md duration-300 hover:bg-blue-950'>Back to Home</Link>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Notfound