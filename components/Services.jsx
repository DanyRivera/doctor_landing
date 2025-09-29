import Image from "next/image"
import Buble2 from "./ui/buble2"

const Services = () => {
    return (
        <section className="bg-secondary mt-20 mb-14 py-18 relative">
            <div className="contenedor flex flex-col gap-4">
                <h2 className="text-center font-bold text-2xl uppercase">Servicios</h2>
                <p className="text-center mx-5 text-gray-500 md:w-1/2 md:mx-auto">En esta sección encontrarás los servicios médicos que el Dr. Daniel Rivera pone a tu disposición, diseñados para ofrecer atención integral y de calidad.</p>
                <div className="flex flex-col gap-10 mt-5 md:grid md:grid-cols-4 ">
                    <div className="bg-white mx-10 p-5 flex flex-col gap-3 rounded-xl shadow-xl md:mx-0">
                        <Image className="bg-secondary p-2 rounded-full" src="/images/heart.svg" width={70} height={0} alt="Circles" />
                        <p className="text-xl font-bold">Cardiología</p>
                        <p>Atención especializada en la prevención, diagnóstico y tratamiento de enfermedades del corazón y el sistema circulatorio.</p>
                    </div>

                    <div className="bg-white mx-10 p-5 flex flex-col gap-3 rounded-xl shadow-xl md:mx-0">
                        <Image className="bg-secondary p-2 rounded-full" src="/images/brain.svg" width={70} height={0} alt="Circles" />
                        <p className="text-xl font-bold">Neurología</p>
                        <p>Diagnóstico y manejo de trastornos que afectan al sistema nervioso, como migrañas, epilepsia y Parkinson.</p>
                    </div>

                    <div className="bg-white mx-10 p-5 flex flex-col gap-3 rounded-xl shadow-xl md:mx-0">
                        <Image className="bg-secondary p-2 rounded-full" src="/images/x-ray.svg" width={70} height={0} alt="Circles" />
                        <p className="text-xl font-bold">Radiología</p>
                        <p>Servicios de imagen médica con tecnología avanzada para un diagnóstico rápido y seguro.</p>
                    </div>

                    <div className="bg-white mx-10 p-5 flex flex-col gap-3 rounded-xl shadow-xl md:mx-0">
                        <Image className="bg-secondary p-2 rounded-full" src="/images/person.svg" width={70} height={0} alt="Circles" />
                        <p className="text-xl font-bold">Urología</p>
                        <p>Atención especializada en la salud del sistema urinario y el aparato reproductor masculino.</p>
                    </div>
                </div>
            </div>

            <Buble2 className="top-24 right-38 hidden md:block" />
            <Buble2 className="bottom-32 left-28 hidden md:block" />
        </section>
    )
}

export default Services
