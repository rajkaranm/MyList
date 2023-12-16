"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
    const {status, data: session} = useSession();

    if (status === "authenticated") {
        return (
            <>
                <Image alt="user" src={session?.user?.image} width={100} height={100}></Image>
                <p>{session?.user?.name}</p>
            </>
        )
    }
}
