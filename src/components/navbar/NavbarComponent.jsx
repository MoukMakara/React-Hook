import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
export function NavbarComponent() {
  const [navbarList, setNavbarList] = useState([
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "Products",
      path: "/products",
      active: false,
    },
    {
      name: "About us",
      path: "/about-us",
      active: false,
    },
  ]);

  // get data from store
  const total = useSelector((state) => state.cart.total);

  // handle on click
  const handleClick = (item) => {
    setNavbarList((lists) => {
      //   console.log(lists);
      return lists.map((list) => {
        if (list.name === item.name) {
          return {
            ...list,
            active: true,
          };
        } else {
          return {
            ...list,
            active: false,
          };
        }
      });
    });
  };

  console.log(navbarList);
  return (
    <Navbar fluid rounded className="max-w-screen-xl mx-auto">
      <Navbar.Brand as={Link} to={"/"}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FD2
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button as={Link} to={"/register"}>
          register
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navbarList.map((list, index) => {
          return (
            <Navbar.Link
              onClick={() => handleClick(list)}
              as={Link}
              to={list.path}
              active={list.active}
              key={index}
            >
              {list.name}
            </Navbar.Link>
          );
        })}
        <Navbar.Link as={Link} to={"/cart"}>
          <div className="relative">
            <span className="absolute bg-red-200 px-2 py-1 rounded-full -top-4 -right-6">
              {total}
            </span>
            <FaCartArrowDown className="text-[18px]" />
          </div>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
