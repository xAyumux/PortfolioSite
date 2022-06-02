import Link from 'next/link';

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href='/'>
        <p>Index</p>
      </Link>
      <Link href='/home'>
        <p>Home</p>
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

export default About;
