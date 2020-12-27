import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/gallery'>
						<a>Gallery</a>
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
