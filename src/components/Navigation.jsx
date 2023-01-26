import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Happy Cake</Navbar.Brand>
        </Navbar>
    );
}

export default Navigation;