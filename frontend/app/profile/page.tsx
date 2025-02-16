import { Link } from "@heroui/link";

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col justify-start items-center">
      <header>
        <h1>Profile</h1>
      </header>
      <main>
        <Link href="/home">Home</Link>
      </main>
    </div>
  )
}