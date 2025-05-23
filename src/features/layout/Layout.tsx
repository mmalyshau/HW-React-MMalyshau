import { Header } from "@widgets";
import { Footer } from "@widgets";

 const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
        return (
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }

    export default Layout;
