import {FC} from 'react'
import NavBar from '../NavBar';
const MainLayout: FC = ({children} => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
})
export default MainLayout;