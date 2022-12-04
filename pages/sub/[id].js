import { useRouter } from "next/router";
import Link from "next/link";

export default function About() {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <>
        <h1>/pages/sub/[id].js</h1>
        <p>Parameter id : {id}</p>
        <Link href="/">/pages/index.js</Link>
    </>
  )
}
