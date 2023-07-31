const Layout = ({children, className=""}) => {
    return ( 
        <div className={`h-full w-full inline-block z-0 bg-light p-32 ${className}`}>
            {children}
        </div>
     );
}
 
export default Layout;