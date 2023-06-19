import React, { Fragment, ReactNode } from "react"
import ContentComponent from "./content"
import FooterComponent from "./footer"
import HeaderComponent from "./header"

const Layouts = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <HeaderComponent />
            <ContentComponent>
                {children}
            </ContentComponent>
            <FooterComponent />
        </Fragment>
    )
}

export default Layouts;