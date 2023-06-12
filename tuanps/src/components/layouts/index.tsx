import React, { ReactNode } from "react"
import ContentComponent from "./content"
import FooterComponent from "./footer"
import HeaderComponent from "./header"

const Layouts = ({children}: {children: ReactNode}) => {
    return (
        <>
            <HeaderComponent />
            <ContentComponent>
                {children}
            </ContentComponent>
            <FooterComponent />
        </>
    )
}

export default Layouts;