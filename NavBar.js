import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <Link href="/">Home</Link> |
            <Link href="workouts">Workouts</Link> |
            <Link href="/Nutrition">Nutrition</Link>
        </nav>
    );
}
