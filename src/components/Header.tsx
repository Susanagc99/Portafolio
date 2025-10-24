import Link from 'next/link';
import styles from '@/app/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navContent}>
                    {/* Logo/Name */}
                    <Link href="/" className={styles.logo}>
                        Susana GC
                    </Link>

                    {/* Navigation Links */}
                    <ul className={styles.navLinks}>
                        <li>
                            <Link href="/" className={styles.navLink}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className={styles.navLink}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={styles.navLink}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}