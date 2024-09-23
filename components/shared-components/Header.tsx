import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-">
      // Logo
      <Link href="/">
        <Image src="" alt="" width="400" height="400" />
      </Link>
    </header>
  );
}
