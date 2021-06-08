import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from "react-router-dom";
const NavBarComponent=()=>{
return <Container>
        <Navbar bg="dark" variant="dark">
            <Link style={{textDecoration:'none',color:'white', marginRight:'8px', marginLeft:'8px'}} to="/memewuux/" ><h4>HOME</h4></Link>
            <Nav >
                <Link style={{textDecoration:'none',color:'white', marginRight:'8px', marginLeft:'8px'}} to="/memewuux/oldtable">CARDS Memes </Link>
                <Link style={{textDecoration:'none',color:'white', marginRight:'8px', marginLeft:'8px'}} to="/memewuux/bootstable">TABLE Memes</Link>
                <Link style={{textDecoration:'none',color:'white', marginRight:'8px', marginLeft:'8px'}} to="/memewuux/newmeme"> NEW Memes </Link>
            </Nav>
        </Navbar>
    </Container>}

export default NavBarComponent