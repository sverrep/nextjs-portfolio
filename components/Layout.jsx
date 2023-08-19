import NavBar from "./NavBar";

const Layout = ({ children, className = "" }) => {
    return (
        <>
            <NavBar />
            <main className={`h-full w-full inline-block z-0 ${className}`}>{children}</main>
        </>
    );
}

export default Layout;