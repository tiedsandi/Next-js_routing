import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={'/portofolio'}>Portofolio</Link>
        </li>
        <li>
          <Link href={'/clients'}>Clients</Link>
        </li>
        <li>
          <Link href={'/portofolio'}>Portofolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
