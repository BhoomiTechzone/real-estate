import * as React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { BiSolidUserRectangle } from 'react-icons/bi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



const MainNavbar = () => {

    const [bar, setbar] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'ANY', value: '1' },
        { name: 'SELL', value: '2' },
        { name: 'RENT', value: '3' },
    ];

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setbar(true)
        } else {
            setbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className='navbar-conatainer'>
            <Navbar expand="lg" className={bar ? 'navbar active' : 'navbar'}>
                <Container >
                    <Navbar.Brand href="/">
                        Bhoomi The Real State
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link className='NavLink' href="/" >
                                <Link to="/" className='flink'> Home </Link>
                            </Nav.Link>
                            <Nav.Link  >
                                <Link to="/about" className='flink'>About Us</Link></Nav.Link>
                            <NavDropdown title="Properties" id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link to="/broadband" className='flink'>Broadband </Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/ott" className='flink'>OTT</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/iptv" className='flink'>IPTV</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link ><Link to="/contact" className='flink'>Pricing Plan</Link></Nav.Link>
                            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                <NavDropdown.Item ><Link to="/internetleaseline" className='flink'>Internet Lease Line</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link to="/cloudtelephony" className='flink'>Cloud Telephony</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link ><Link to="/contact" className='flink'>Blog</Link></Nav.Link>
                            <Nav.Link ><Link to="/contact" className='flink'>Contact</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link ><Link to="/contact" className='flink'><BiSolidUserRectangle style={{ color: "white", backgroundColor: "green", fontSize: "20px", border: "2px solid green", width: "30px", height: "30px", padding: "4px", cursor: "pointer" }} /></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 style={{ color: "white", marginTop: "12rem" }}>Find Your Next Perfect Place To Live</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop:"2rem" }}>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant="light"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between" ,backgroundColor:"white", padding:"10px", margin:"2rem" }}>
                  <div>
                    <input type='text' placeholder='Enter'/>
                  </div>
                  <div>
                    <select>
                      <option>Select Location</option>
                      <option value="noida">Noida</option>
                      <option value="delhi">Delhi</option>
                    </select>
                  </div>
                  <div>
                    <select>
                      <option>Property Type</option>
                      <option value="Businee">Businee</option>
                      <option value="education">Education</option>
                      <option value="house">Housing</option>
                      <option value="rent">Restaurant</option>
                      <option>Re</option>
                    </select>
                  </div>
                  <div>
                    <button>Search Property</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar;
