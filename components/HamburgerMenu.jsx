import Link from "next/link";
import { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";

const pages = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
];

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <button
        className="text-dark w-10 h-10 relative focus:outline-none md:hidden"
        onClick={openDrawer}
      >
        <div className="flex flex-col h-12 w-12 justify-center items-center group">
          <span
            aria-hidden="true"
            className={`h-0.5 w-5 my-1 rounded-full bg-dark transition ease-in-out transform duration-500 ${
              open
                ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`h-0.5 w-5 rounded-full bg-dark transition ease-in-out transform duration-500 ${
              open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`h-0.5 w-5 my-1 rounded-full bg-dark transition ease-in-out transform duration-500 ${
              open
                ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></span>
        </div>
      </button>
      <Drawer open={open} onClose={closeDrawer} overlay={false}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Link href="/" onClick={() => setOpen((open) => !open)} className="w-full h-full text-primary flex text-2xl font-bold">
            Sverre Paulsen
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="uppercase">
          {pages.map((pg) => (
            <ListItem
              key={pg.name}
              className="py-4 first:pt-4 last:pb-4 h-min text-start"
            >
              <Link
                href={pg.link}
                onClick={() => setOpen((open) => !open)}
                className="block w-full h-6 text-base font-normal pl-3 pr-4"
              >
                {pg.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        className={`fixed left-0 top-0 w-full h-screen bg-black/70 ${
          open
            ? ""
            : "hidden"
        }`}
      />
    </>
  );
}

export default HamburgerMenu;
