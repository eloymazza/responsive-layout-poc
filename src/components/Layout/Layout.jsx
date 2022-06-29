import Header from "../Header/Header"
import classes from './Layout.module.css'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout