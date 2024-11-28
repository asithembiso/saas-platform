import { ReactNode } from "react"
import { Navbar } from "../../components/navbar"
import { Providers } from "../../components/providers"

const Layout = ({children}: {children: ReactNode}) => {
    return <>
        <Navbar />
        <Providers>{children}</Providers>
    </>
}

export default Layout