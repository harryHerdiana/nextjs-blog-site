import { Fragment } from "react"
import MainNavigation from "./main-navigation"
import Logo from "./logo"


function Layout(props){

return (
    <Fragment>
        <MainNavigation/>
        <main>{props.children}</main>
    </Fragment>
)
}
export default Layout