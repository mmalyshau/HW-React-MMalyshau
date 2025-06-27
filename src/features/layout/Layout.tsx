import { Header } from "@widgets/header/Header";
import { Footer } from "@widgets/footer/Footer";

 export const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
        return (
            <>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }

