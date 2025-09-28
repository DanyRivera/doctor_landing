import Image from "next/image"
import Buble from "./ui/buble"

const About = () => {
    return (
        <section className="contenedor md:!my-34 my-10 mx-7 flex flex-col gap-22 md:grid grid-cols-6 md:grid-rows-1 md:relative md:gap-24">
            <div className="flex flex-col gap-5 md:col-start-4 md:col-end-7">
                <h2 className="text-3xl font-bold text-start">Dr. Daniel Rivera</h2>
                <p className="text-start">Con una trayectoria dedicada al cuidado de la salud y el bienestar, el Dr. Daniel Rivera ofrece atención médica integral basada en la confianza, la ética y el compromiso con cada paciente. Su objetivo es brindar diagnósticos precisos, tratamientos efectivos y un acompañamiento cercano para mejorar la calidad de vida de quienes confían en su experiencia.</p>
                <p className="text-start">Con años de experiencia y actualización constante en las últimas técnicas médicas, el Dr. Daniel Rivera se compromete a ofrecer un servicio de calidad que combina conocimiento científico con atención humana. </p>
                <button
                    className="text-white bg-primary py-4 rounded-full px-10 font-bold mx-auto text-sm md:w-2/5 md:mx-0"
                >Realizar una Cita</button>
            </div>
            <div className="relative h-96 md:col-start-1 md:col-end-4 md:absolute md:w-full">
                <Image className="absolute bottom-0 right-1 -z-10 md:w-2/3" src="/images/dr-section-about.png" width={250} height={0} alt="Doctor About" />
                <Image className="absolute bottom-0 -z-20" src="/images/circles.webp" width={500} height={0} alt="Circles" />
                <Image className="absolute  -bottom-7 right-[10%] bg-white p-3 shadow-2xl rounded-2xl" src="/images/heart.svg" width={70} height={0} alt="Heart" />
                <Buble className="bottom-[10%] left-[5%] md:bottom-[40%] md:left-[10%]" />
                <Buble className="top-[10%] right-[5%] md:-top-14 md:-right-3" />
                <div className="hidden md:block md:absolute md:bottom-0 bg-primary text-white font-bold px-4 py-3 rounded shadow-2xl ">
                    <p>9 Años de experiencia</p>
                </div>
                <div className="bg-white  rounded-2xl shadow-2xl absolute p-3 -top-3 flex flex-col gap-1 md:-top-10 ">
                    <ul className="flex gap-1">
                        <li>
                            <Image className="" src="/images/start.svg" width={20} height={0} alt="Circles" />
                        </li>
                        <li>
                            <Image className="" src="/images/start.svg" width={20} height={0} alt="Circles" />
                        </li>
                        <li>
                            <Image className="" src="/images/start.svg" width={20} height={0} alt="Circles" />
                        </li>
                        <li>
                            <Image className="" src="/images/start.svg" width={20} height={0} alt="Circles" />
                        </li>
                        <li>
                            <Image className="" src="/images/start.svg" width={20} height={0} alt="Circles" />
                        </li>
                    </ul>
                    <p className="text-sm font-bold">Confianza en pacientes</p>
                    <ul className="flex items-center">
                            <Image className="rounded-full border-2 border-white w-10 " src="/images/people1.webp" width={50} height={50} alt="Persona1" />
                            <Image className="rounded-full border-2 border-white w-10 -ml-2" src="/images/people2.webp" width={50} height={50} alt="Persona1" />
                            <Image className="rounded-full border-2 border-white w-10 -ml-2" src="/images/people3.webp" width={50} height={50} alt="Persona1" />
                            <Image className="rounded-full border-2 border-white w-10 -ml-2" src="/images/people4.webp" width={50} height={50} alt="Persona1" />
                        <li className="bg-primary text-white border-2 border-white  rounded-full px-2 py-2 font-bold inline-block -ml-2 text-sm">
                            +3k
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
