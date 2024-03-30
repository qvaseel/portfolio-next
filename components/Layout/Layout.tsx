import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header />
        {children}
    </>
);

export default Layout;