'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const Header = () => {

    const [showMenuMobil, setShowMenuMobil] = useState(false);
    const [menuIsAmount, setMenuIsAmount] = useState(false);

    useEffect(() => {
        if(showMenuMobil) setMenuIsAmount(true);
    }, [showMenuMobil])

    const handleCloseMenu = () => {
        setShowMenuMobil(false);
        setTimeout(() => {
            setMenuIsAmount(false);
        }, 500);
    }

    return (
        <header className="hero relative">
            <section className="justify-between items-center text-center pt-10 hidden md:flex">
                {/* Page Name */}
                <div className="w-full flex items-center gap-2 mx-auto justify-center ">
                    <Image src="/images/doctor-icon.svg" width={70} height={70} alt="Doctor Hero Icon" />
                    <p className="text-2xl font-bold">Dr. Daniel Rivera</p>
                </div>

                {/* Menu */}
                <div className="w-full">
                    <nav className="flex gap-20 justify-center text-xl ">
                        <Link href="/">Home</Link>
                        <Link href="/">Nosotros</Link>
                        <Link href="/">Servicios</Link>
                    </nav>
                </div>

                {/* Btn Contact */}
                <div className="w-full">
                    <Link href="/" className="border border-primary text-primary px-10 py-4 rounded-full tracking-wide font-bold z-10">Contacto</Link>
                </div>
            </section>

            <section className="md:hidden flex justify-between bg-primary p-5 fixed w-full">
                <h1 className="text-white font-bold">Dr. Daniel Rivera</h1>
                <button onClick={() => setShowMenuMobil(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color="#fff" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </section>

            {menuIsAmount && (
                <section className={`md:hidden absolute bg-primary w-full h-full z-20 px-7 py-10 ${showMenuMobil ? 'menu-visible' : 'menu-hidden'} `}>
                    <div className="flex justify-between items-center">
                        <p className="text-white uppercase  font-bold text-2xl">Menu</p>
                        <button onClick={handleCloseMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color="#fff" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-7 justify-center mt-10">
                        <Link className="bg-white text-primary py-3 text-base text-center font-bold rounded" href="/">Home</Link>
                        <Link className="bg-white text-primary py-3 text-base text-center font-bold rounded" href="/">Nosotros</Link>
                        <Link className="bg-white text-primary py-3 text-base text-center font-bold rounded" href="/">Servicios</Link>
                        <Link className="bg-white text-primary py-3 text-base text-center font-bold rounded" href="/">Contacto</Link>
                    </nav>
                </section>
            )}

            <section className="flex flex-col contenedor justify-start md:justify-center h-full">
                {/* Text Hero */}
                <div className="flex flex-col justify-center gap-5 md:gap-10 mt-36 md:mt-0 mx-10 md:mx-0 ">
                    <h1 className="text-2xl md:text-7xl font-bold">Bienbenido a</h1>
                    <div className="flex gap-5 items-center -mt-5 md:-mt-10">
                        <Image src="/images/icon-1-hero.svg" className="hidden md:block md:w-1/7" width={120} height={120} alt="Doctor Estetoscopio" />
                        <h1 className="text-2xl md:text-7xl font-bold z-10">Dr. Daniel Rivera</h1>
                    </div>
                    <p className="md:text-xl md:w-3/5 text-gray-500">Tu bienestar de manñana empeiza con las acciones de hoy, tu salud, nuetra experiencia, realiza una cita.</p>
                    <div className="md:mt-5 mt-0">
                        <Link href="/" className="bg-primary text-white px-8 md:px-16 py-5 rounded-full tracking-wide font-bold text-sm md:text-lg block text-center md:inline-block">Reliza una Cita</Link>
                    </div>
                </div>

                {/* Images Hero */}
                <div className="absolute bottom-0 right-[18%]">
                    <Image className="  -z-10" src="/images/doctor-hero.webp" width={300} height={0} alt="Doctor Estetoscopio" />
                </div>

            </section>


            {/* Widget */}
            <div className="w-auto bg-white absolute bottom-[10%] right-[37%] p-4 rounded-2xl shadow-2xl hidden md:block">
                <Image className="" src="/images/icon-2-hero.svg" width={50} height={50} alt="Doctor Jeringa" />
            </div>

            {/* Widget */}
            <div className="w-auto bg-white absolute bottom-[55%] right-[3%] p-4 rounded-2xl shadow-2xl  flex-col gap-3 hidden md:flex">
                <p className="text-xl font-bold">Octubre, 2025</p>
                <div>
                    <ul className="flex gap-4">
                        <li className="flex flex-col items-center">
                            <p>Dom</p>
                            <p>17</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <p>Lun</p>
                            <p>18</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <p>Mar</p>
                            <p>19</p>
                        </li>
                        <li className="flex flex-col items-center text-white bg-primary px-3 py-2 font-bold rounded-xl">
                            <p>Mie</p>
                            <p>20</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <p>Jue</p>
                            <p>21</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <p>Vie</p>
                            <p>22</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <p>Sab</p>
                            <p>23</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Widget */}
            <div className="w-auto bg-white absolute bottom-[55%] right-[33%] p-4 rounded-2xl shadow-2xl  flex-col gap-2 hidden md:flex">
                <div className="flex">
                    <Image className="rounded-full border-2 border-white" src="/images/people1.webp" width={50} height={50} alt="Persona1" />
                    <Image className="rounded-full border-2 border-white -ml-4" src="/images/people2.webp" width={50} height={50} alt="Persona2" />
                    <Image className="rounded-full border-2 border-white -ml-4" src="/images/people3.webp" width={50} height={50} alt="Persona3" />
                    <Image className="rounded-full border-2 border-white -ml-4" src="/images/people4.webp" width={50} height={50} alt="Persona4" />
                    <Image className="rounded-full border-2 border-white -ml-4" src="/images/people5.webp" width={50} height={50} alt="Persona5" />
                </div>
                <p className="text-3xl font-bold">100k+</p>
                <p>Pacientes Satisfechos</p>
            </div>

        </header>
    )
}

export default Header
