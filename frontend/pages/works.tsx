import Link from 'next/link';

function Works() {
  return (
    <div>
      <h1>Works</h1>
      <Link href='/'>
        <p>Index</p>
      </Link>
      <Link href='/home'>
        <p>Home</p>
      </Link>
      <Link href='/about'>
        <p>About</p>
      </Link>
      <Link href='/blog'>
        <p>Blog</p>
      </Link>
    </div>
  );
}

export default Works;
