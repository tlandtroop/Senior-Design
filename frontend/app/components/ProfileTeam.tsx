import Link from "next/link"

export default function ProfileTeam() {
    return (
        <div className="px-10 py-10 flex flex-col w-5/12">
            <h1 className=" font-montserrat text-4xl text-orange pb-4" >Team</h1>
            <div className="px-6 bg-light shadow-md rounded-lg border-t-4 border-orange flex items-center justify-between">
                <ul className=" py-5">
                    <li className="py-3 text-xl font-montserrat text-blue"><Link href={"/team"}>Team Name</Link></li>
                    <li className="py-3 text-xl font-montserrat text-blue"><Link href={'/supervisor'}>Supervisor</Link></li>
                    <li className="py-3 text-xl font-montserrat text-blue">Available Spots: 3/4</li>
                </ul>
                <Link className=" h-10 bg-orange text-white font-base font-montserrat py-2 px-3 rounded-md hover:opacity-75" href={"/team"}>Join</Link>
            </div>
        </div>
    )
}