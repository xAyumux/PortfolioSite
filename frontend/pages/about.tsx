import Link from 'next/link';

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href='/'>
        <p>index</p>
      </Link>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </div>
  );
}

export default About;
