import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/projects">Go to Projects</Link>
    </div>
  );
}
