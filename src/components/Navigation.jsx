import {Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="danger" variant="dark">
            
            
        
            <Container className="justify-content-start">
            
            {/* Link a las rutas */}
            <Link to='/' className="text-white ms-3 text-decoration-none">🏠 Home</Link>
            <Link to='/contacto' className="text-white ms-3 text-decoration-none">📒 Contacto</Link>
            
        </Container>
        <Navbar.Brand as={Link} to="/">Happy Cake 🍰</Navbar.Brand>

        </Navbar>
    );
}

export default Navigation;