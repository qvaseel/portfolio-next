import styles from "../../styles/header.module.css"
import Image from "next/image"
import cddisk from "../../public/img/cddisk.png"
import { Link } from "react-scroll"

const Header = () => {
    const spy = true;
    const smooth = true;
    const offset = 140;
    const duration = 500;
    return (
        <header className={styles.header}>
            <div className={`container ${styles.header_container}`}>
                <div className={styles.head}>
                    <div className={styles.for_disk}>
                        <Image src={cddisk} alt="" />
                    </div>
                    <div className={styles.for_head}>
                        <p><span>q</span>vaseel - Portfolio</p>
                    </div>
                    
                </div>
                <div className={styles.cont_nav}>
                    <nav className={styles.nav}>
                        <ul className={styles.nav_list}>
                            <li>
                                <Link
                                    className={styles.nav_link}
                                    href="/"
                                    to='about'
                                    spy={spy}
                                    smooth={smooth}
                                    offset={offset}
                                    duration={duration}
                                >
                                    <span>A</span>bout me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.nav_link}
                                    href="/"
                                    to='projects'
                                    spy={spy}
                                    smooth={smooth}
                                    offset={offset}
                                    duration={duration}
                                >
                                    <span>P</span>rojects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.nav_link}
                                    href="/"
                                    to='awards'
                                    spy={spy}
                                    smooth={smooth}
                                    offset={offset}
                                    duration={duration}
                                >
                                    <span>A</span>wards
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.nav_link}
                                    href="/"
                                    to='contacts'
                                    spy={spy}
                                    smooth={smooth}
                                    offset={offset}
                                    duration={duration}
                                >
                                    <span>C</span>ontacts
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;