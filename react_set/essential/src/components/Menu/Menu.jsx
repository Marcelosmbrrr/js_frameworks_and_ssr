import styles from "./menu.module.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import TableRowsIcon from '@mui/icons-material/TableRows';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MemoryIcon from '@mui/icons-material/Memory';
//
import { NavLink } from 'react-router-dom';

export function Menu() {

    return (
        <>
            <div className={styles.nav_desktop}>
                <ul className="menu_desktop">
                    <li>
                        <NavLink to="/">
                            <div>
                                <DashboardIcon />
                            </div>
                            <div>
                                DASHBOARD
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">
                            <div>
                                <CalculateIcon />
                            </div>
                            <div>
                                CALC
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/todolist">
                            <div>
                                <FormatListBulletedIcon />
                            </div>
                            <div>
                                TODOLIST
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/table">
                            <div>
                                <TableRowsIcon />
                            </div>
                            <div>
                                TABLE
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/memoization">
                            <div>
                                <MemoryIcon />
                            </div>
                            <div>
                                MEMO
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.nav_mobile}>
                <ul className="menu_mobile">
                    <li>
                        <NavLink to="/">
                            <DashboardIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">
                            <CalculateIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/todolist">
                            <FormatListBulletedIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/table">
                            <TableRowsIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/memoization">
                            <MemoryIcon />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
