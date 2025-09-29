import Image from "next/image"

const Appointment = () => {
    return (
        <section className='contenedor bg-secondary py-18'>
            <div>
                <h2 className='text-center font-bold text-2xl uppercase text-gray-500'>Programa una Cita</h2>
                <form className='flex flex-col gap-10 items-center mt-10 mx-7'>
                    <input className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="text" placeholder='Nombre Completo' />
                    <input className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="email" placeholder='Direccion de Correo' />
                    <input className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="tel" placeholder='Número Celular' />
                    <input className='bg-white p-5 w-full outline-none rounded-full text-gray-400' type="datetime-local" placeholder='Seleciona fecha y hora' />
                    <input type="submit" className='bg-primary text-white py-5 px-10 rounded-full text-sm font-bold' value="Agendar Cita" />
                </form>
            </div>
            <div className='relative h-96 w-full'>

                <Image className="absolute top-0" src="/images/circles.webp" width={500} height={0} alt="Circles" />
                <Image className="absolute bottom-0 right-0" src="/images/dr-section-form.webp" width={250} height={0} alt="Doctor Form" />
            </div>
        </section>
    )
}

export default Appointment
