import { Menu } from "antd"
import { useState } from "react"

const tabs = ['inline', 'horizontal']

const HeaderMenu = ({isInline = false}) => {
    return(
        <Menu
        mode={isInline ? "inline" : "horizontal"}
                    items={[
                        {
                            label: <a href="fb.com/quanghai1409">Home</a>,
                            key: 'home',
                        },
                        {
                            label: 'ContactUs',
                            key: 'ContactUs',
                        },
                        {
                            label: 'AboutUs',
                            key: 'AboutUs',
                        },
                        {
                            label: 'WE',
                            key: 'We',
                        },
                        {
                            label: 'fb',
                            key: 'fb',
                        },
                        {
                            label: 'gmail',
                            key: 'gmail',
                            
                        },
                    ]}
                    >

                    </Menu>
    )
}

export default HeaderMenu