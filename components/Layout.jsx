import NavBar from "./NavBar";

const Layout = ({ children, className = "" }) => {
    return (
        <>
            <NavBar />
            <main className={`min-h-screen w-full inline-block z-0 bg-light ${className}`}>{children}</main>
        </>
    );
}

export default Layout;