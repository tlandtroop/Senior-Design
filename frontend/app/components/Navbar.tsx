import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="py-5 px-5 flex justify-between bg-blue">
            <div className="flex items-center">
                <Link className="bg-orange text-white font-medium font-montserrat py-2 px-4 rounded-md" href={"/dashboard"}>LOGIN</Link>
                <Link className="text-white font-medium font-montserrat py-4 px-4 hover:underline" href={"/group"}>GROUP</Link>
                <Link className="text-white font-medium font-montserrat py-4 px-4" href={"/projects"}>PROJECTS</Link>
                <Link className="text-white font-medium font-montserrat py-4 px-4" href={"/profile"}>PROFILE</Link>
            </div>
            <div>
                <button type="button" className="rounded-full bg-gray-800 text-sm">
                    <Image src="/profile.jpg" alt="profile pic" width={40} height={40} className="p-1 rounded-full ring-2 ring-gray-300 " />
                </button>
            </div>
        </nav>
    )
}