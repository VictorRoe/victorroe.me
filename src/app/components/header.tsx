import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex justify-end relative top-20">
        <Image src="/logo.svg" alt="Logo VictorRoe" width={200} height={200} priority />
      </header>
    )
}