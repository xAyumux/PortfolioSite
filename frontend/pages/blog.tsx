import Link from 'next/link';

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href='/'>
        <p>Index</p>
      </Link>
      <Link href='/home'>
        <p>Home</p>
      </Link>
      <Link href='/about'>
        <p>About</p>
      </Link>
      <Link href='/works'>
        <p>Works</p>
      </Link>
    </div>
  );
}

export default Blog;
