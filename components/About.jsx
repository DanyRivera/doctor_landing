import Image from "next/image"
import Buble from "./ui/buble"

const About = () => {
    return (
        <section className="md:contenedor my-10 mx-7 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">Dr. Daniel Rivera</h2>
                <p className="">Con una trayectoria dedicada al cuidado de la salud y el bienestar, el Dr. Daniel Rivera ofrece atención médica integral basada en la confianza, la ética y el compromiso con cada paciente. Su objetivo es brindar diagnósticos precisos, tratamientos efectivos y un acompañamiento cercano para mejorar la calidad de vida de quienes confían en su experiencia.</p>
                <p>Con años de experiencia y actualización constante en las últimas técnicas médicas, el Dr. Daniel Rivera se compromete a ofrecer un servicio de calidad que combina conocimiento científico con atención humana. Cada consulta está diseñada para brindar claridad, seguridad y soluciones efectivas, asegurando que cada paciente se sienta acompañado y respaldado en todo momento.</p>
                <button
                    className="text-white bg-primary py-4 rounded-full px-10 font-bold mx-auto text-sm"
                >Realizar una Cita</button>
            </div>
            <div className="relative h-96">
                <Image className="absolute z-10" src="/images/dr-section-about.webp" width={500} height={0} alt="Doctor About" />
                <Image className="absolute top-10" src="/images/circles.webp" width={500} height={0} alt="Circles" />
                <Image className="absolute bottom-0 right-[10%] z-10 bg-white p-3 shadow-2xl rounded-2xl" src="/images/heart.svg" width={70} height={0} alt="Circles" />
                <Buble className="bottom-[10%] left-[5%]" />
                <Buble className="top-[10%] right-[5%]" />
            </div>
        </section>
    )
}

export default About
