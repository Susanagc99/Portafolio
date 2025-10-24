import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <nav>
                <div>
                    {/* Logo/Name */}
                    <Link href="/">
                        Portfolio | Susana Gutiérrez Callejas
                    </Link>

                    {/* Navigation Links */}
                    <ul>
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}