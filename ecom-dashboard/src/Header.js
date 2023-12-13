import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand to="/">Ecom</Navbar.Brand>
                    <Nav className="me-auto">
                       
                                     <Link to="/">Home</Link>
                                    <Link to="/add">Add Product</Link>
                                    <Link to="/update">Update Product</Link>
                               
                                    <Link to="/">Home</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                               
                        


                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header