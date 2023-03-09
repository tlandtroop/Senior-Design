import Link from "next/link";
import Image from "next/image";
import Navbar from '../components/Navbar'
import Stack from '../components/Stack'
import Topics from '../components/Topics'
import ProfileTeam from '../components/ProfileTeam'
import Student from '../components/Student'
import Bio from '../components/Bio'

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="">
                <div>
                    <Stack />
                    <Topics />
                    <ProfileTeam />
                </div>
            </div>
        </>

    )
}
