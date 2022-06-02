import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/'>
        <p>Index</p>
      </Link>
      <Link href='/about'>
        <p>About</p>
      </Link>
      <Link href='/works'>
        <p>Works</p>
      </Link>
      <Link href='/blog'>
        <p>Blog</p>
      </Link>
    </div>
  );
}

export default Home;
