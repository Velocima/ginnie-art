import Link from 'next/link';
import style from '../styles/nav.module.css';

export default function Nav() {
	return (
		<nav className={style.nav}>
			<ul className={style.ul}>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/galleries'>
						<a>Galleries</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
