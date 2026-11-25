import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/icons/Logo.svg";
import "../App.css";

import { IoPersonSharp } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoHeart } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { NavLink } from "react-router";

import { useTheme } from "../contexts/ThemeSwitcher";

function TopBar({ hideSearch = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="bg-white py-2 border-bottom">
      <Container className="d-flex align-items-center justify-content-between">
        <NavLink to={"/"}>
          <Navbar.Brand>
            <img src={Logo} alt="Brand logo" />
          </Navbar.Brand>
        </NavLink>

        {!hideSearch && (
          <>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-center">
              <Form className="d-flex custom-search-group">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="custom-input"
                />
                <NavDropdown
                  title="All category"
                  id="navbarScrollingDropdown"
                  className="custom-dropdown"
                >
                  <NavDropdown.Item href="#"> Action 1 </NavDropdown.Item>
                  <NavDropdown.Item href="#"> Action 2 </NavDropdown.Item>
                  <NavDropdown.Item href="#"> Action 3 </NavDropdown.Item>
                </NavDropdown>
                <Button className="custom-search-btn">Search</Button>
              </Form>
            </Navbar.Collapse>
          </>
        )}

        <div className="d-flex align-items-center gap-4 text-secondary nav-icons">
          <div className="d-flex flex-column align-items-center cursor-pointer effect">
            <IoPersonSharp size={20} />
            <span className="icon-label">Profile</span>
          </div>
          <div className="d-flex flex-column align-items-center cursor-pointer effect">
            <BiSolidMessageDetail size={20} />
            <span className="icon-label">Message</span>
          </div>
          <div className="d-flex flex-column align-items-center cursor-pointer effect">
            <IoHeart size={20} />
            <span className="icon-label">Orders</span>
          </div>
          <NavLink to={"/my-cart"} className=" text-decoration-none text-secondary">
            <div className="d-flex flex-column align-items-center effect">
              <IoMdCart size={20} />
              <span className="icon-label">My cart</span>
            </div>
          </NavLink>

          <div 
            onClick={toggleTheme} 
            className="d-flex flex-column align-items-center cursor-pointer effect"
            title="Toggle Theme"
            style={{ cursor: "pointer" }}
          >
            <CgDarkMode 
              size={20} 
              style={{
                transform: theme === "dark" ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease"
              }} 
            />
            <span className="icon-label">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default TopBar;