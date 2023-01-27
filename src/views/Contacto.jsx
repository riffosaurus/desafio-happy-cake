import { Container, Form, Button } from 'react-bootstrap'

import React from 'react'

const Contacto = () => {
  return (
    <div>
        <Container fluid className='text-center pt-5'>
        <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
        {/* form de contacto con correo y text box de descripcion */}
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="danger" type="submit">
                Enviar
            </Button>
        </Form>
        </Container>
        
    </div>
  )
}

export default Contacto