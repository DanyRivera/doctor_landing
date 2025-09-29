import Image from "next/image"
import Buble from "./ui/buble"
import Buble2 from "./ui/buble2"

const Appointment = () => {
    return (
        <section className='bg-secondary md:relative'>
            <div className="contenedor py-18 md:grid md:grid-cols-3  md:items-center">
                <div className="md:col-span-2">
                    <h2 className='text-center font-bold text-2xl uppercase text-gray-500'>Programa una Cita</h2>
                    <form className='flex flex-col gap-10 items-center mt-10 mx-7'>
                        <input className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="text" placeholder='Nombre Completo' />
                        <input className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="email" placeholder='Direccion de Correo' />
                        <input className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="tel" placeholder='Número Celular' />
                        <input className='bg-white p-5  outline-none rounded-full text-gray-400 md:w-full' type="datetime-local" placeholder='Seleciona fecha y hora' />
                        <input type="submit" className='bg-primary text-white py-5 px-10 rounded-full text-sm font-bold md:w-full md:text-xl' value="Agendar Cita" />
                    </form>
                </div>
                <div className='relative h-96 w-full md:ml-20'>

                    <Image className="absolute md:bottom-0" src="/images/circles.webp" width={500} height={0} alt="Circles" />
                    <Image className="absolute bottom-0 right-3 md:right-0 md:w-full" src="/images/dr-section-form.webp" width={350} height={0} alt="Doctor Form" />
                    <Image className="absolute bottom-60 left-14 bg-white p-1 rounded-2xl shadow-2xl md:bottom-72 md:left-10" src="/images/calendar.svg" width={75} height={0} alt="Leafs" />
                    <p className="absolute -bottom-10 right-10 bg-primary text-white font-bold p-2 rounded-2xl shadow-xl"><span className="text-3xl">9</span>  <br /> Años de <br />Experiencia</p>

                    <Buble2 className="top-10 right-0 md:block hidden" />
                </div>
            </div>


            <Buble className="bottom-40 left-40 md:block hidden" />
        </section>
    )
}

export default Appointment
