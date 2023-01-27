import { Container } from 'react-bootstrap'

import React from 'react'

const Home = () => {
  return (
    <div>
        <Container fluid className='text-center pt-5'>
            <h1>Bienvenido a <b>Happy Cake</b></h1>
            <p>El lugar de los pasteles felices.</p>
            <h1>🎂</h1>
        </Container>
    </div>
  )
}

export default Home