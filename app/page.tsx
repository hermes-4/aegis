import Link from "next/link";

export default function Home() {
    return (
        <main className="mX-auto mY-auto bg-white border-black">
            <Link href="/login">
                {" "}
                <button>Login</button>
            </Link>
        </main>
    );
}
