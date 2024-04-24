import {
    Navbar,
    TextInput,
    Button,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Signin from "../pages/Signin";
const Header = () => {
    const path = useLocation().pathname;
    return (
        <Navbar className="border-b-2">
            <Link
                to="/"
                className="self-center text whitespace-nowrap text-sm sm:text-large dark:text-white"
            >
                <span className="py-2 px-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                    Attar
                </span>
                blogs{" "}
            </Link>

            <form>
                <TextInput
                    type="text"
                    placeholder="Search"
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                ></TextInput>
            </form>
            <Button color="gray" className="lg:hidden w-10 h-10" pill>
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline  " color="gray">
                    <FaMoon />
                </Button>
                <Link to="Signin">
                    <Button gradientDuoTone="purpleToBlue" outline pill>
                        {" "}
                        Sign in
                    </Button>
                </Link>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink active={path === "/"} as={"div"}>
                    <Link to="/">Home</Link>
                </NavbarLink>
                <NavbarLink active={path === "/about"} as={"div"}>
                    <Link to="/about">About</Link>
                </NavbarLink>
                <NavbarLink active={path === "/projects"} as={"div"}>
                    <Link to="/projects">Projects</Link>
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
};
export default Header;
