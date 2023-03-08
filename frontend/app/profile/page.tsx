import Link from "next/link";
import Image from "next/image";
import Navbar from '../components/Navbar'
import Stack from '../components/Stack'
import Topics from '../components/Topics'
import ProfileTeam from '../components/ProfileTeam'

export default function Profile() {
    return (
        <>
            <Navbar />
            <Stack />
            <Topics />
            <ProfileTeam />
        </>
    )
}
