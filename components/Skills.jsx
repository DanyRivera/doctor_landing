import Image from "next/image"
import Buble from "./ui/buble"
import Buble2 from "./ui/buble2"

const Skills = () => {
    return (
        <section className="my-12 md:mt-12 md:mb-80 py-18 ">
            <div className=" flex flex-col gap-4 md:relative md:mx-52 md:h-96">
                <h2 className="text-center font-bold text-2xl uppercase ">Habilidades y Experiencia</h2>
                <p className="text-center mx-5 text-gray-500 md:w-1/2 md:mx-auto">El Dr. Daniel Rivera combina años de práctica médica con una actualización constante en las últimas técnicas y avances en salud.</p>
                <div className="flex flex-col gap-20 items-center mt-10 md:grid md:grid-cols-9 md:gap-40">
                    <div className="flex flex-col  gap-10 md:col-start-1 md:col-end-4">
                        <div className="bg-white shadow-2xl p-5 rounded-2xl">
                            <h3 className="text-xl text-primary font-bold">Medical Officer</h3>
                            <p className="text-gray-700">Sylhet M. A. G. Osmania Medical College</p>
                            <p className="text-gray-700 font-bold">2020 - Present</p>
                        </div>
                        <div className="bg-white shadow-2xl p-5 rounded-2xl">
                            <h3 className="text-xl text-primary font-bold">Physiologist</h3>
                            <p className="text-gray-700">Popular Diagnostic Center, Sylhet</p>
                            <p className="text-gray-700 font-bold">2020 - Present</p>
                        </div>
                    </div>
                    <div className="relative w-full h-96 md:col-start-4 md:col-end-7">
                        <Image className="absolute -z-10 bottom-0 left-18" src="/images/dr-section-skills.png" width={250} height={0} alt="Doctor About" />
                        <Image className="absolute -z-20" src="/images/circles.webp" width={500} height={0} alt="Circles" />
                        <div className="bg-primary flex items-center gap-2 absolute p-4 rounded-2xl -top-2 left-3 md:-left-18 md:top-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#1E40AF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 bg-white p-1 rounded-full ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>
                            <p className="text-white font-bold text-sm">Chequeos Constantes</p>
                        </div>
                        <Buble className="top-40 left-14 md:hidden" />
                        <div className="">
                            <Image className="absolute right-5 top-20 bg-white p-3 shadow-2xl rounded-2xl md:w-1/4 md:right-0" src="/images/kit.svg" width={70} height={0} alt="Kit" />
                        </div>
                        <div className="hidden md:flex flex-col gap-3 absolute -bottom-30 -left-14 bg-white p-4 rounded-2xl shadow-2xl">
                            <h3 className="text-base text-gray-700">Pacientes Atendidos</h3>
                            <p className="text-4xl font-bold">6953</p>
                            <Image className="w-full" src="/images/graph.webp" width={100} height={0} alt="Kit" />
                            <ul className="flex justify-between font-bold">
                                <li>10</li>
                                <li>20</li>
                                <li>30</li>
                                <li>40</li>
                                <li>50</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-10 md:col-start-7 md:col-end-10">
                        <div className="bg-white shadow-2xl p-5 rounded-2xl">
                            <h3 className="text-xl text-primary font-bold">Physiologist</h3>
                            <p className="text-gray-700">Chittagong MEdical Colage, Chittagong</p>
                            <p className="text-gray-700 font-bold">2020 - Present</p>
                        </div>
                        <div className="bg-white shadow-2xl p-5 rounded-2xl">
                            <h3 className="text-xl text-primary font-bold">Head od Physiologist</h3>
                            <p className="text-gray-700">Dhaka Medical Collage, Dhaka</p>
                            <p className="text-gray-700 font-bold">2020 - Present</p>
                        </div>
                    </div>
                </div>


                {/* Bubles Desktop */}
                <Buble className="top-0 left-36 hidden md:block" />
                <Buble className="top-5 right-24 hidden md:block" />
                <Buble className="-bottom-52 right-72 hidden md:block" />
                <Buble2 className="-bottom-52 right-86 hidden md:block" />
            </div>
        </section>
    )
}

export default Skills
