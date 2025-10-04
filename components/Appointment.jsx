import Image from "next/image"
import Buble from "./ui/buble"
import Buble2 from "./ui/buble2"
import * as motion from "motion/react-client"

const Appointment = () => {
    return (
        <section className='bg-secondary md:relative'>
            <div className="contenedor py-18 md:grid md:grid-cols-3  md:items-center">
                <div className="md:col-span-2">
                    <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className='text-center font-bold text-2xl uppercase text-gray-500'>Programa una Cita</motion.h2>
                    <form className='flex flex-col gap-10 items-center mt-10 mx-7'>
                        <motion.input initial={{opacity: 0, y:50}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} viewport={{once: true}} className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="text" placeholder='Nombre Completo' />
                        <motion.input initial={{opacity: 0, y:75}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} viewport={{once: true}} className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="email" placeholder='Direccion de Correo' />
                        <motion.input initial={{opacity: 0, y:100}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} viewport={{once: true}} className='bg-white p-5 w-full outline-none rounded-full text-gray-500' type="tel" placeholder='Número Celular' />
                        <motion.input initial={{opacity: 0, y:125}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} viewport={{once: true}} className='bg-white p-5  outline-none rounded-full text-gray-400 md:w-full' type="datetime-local" placeholder='Seleciona fecha y hora' />
                        <motion.input initial={{opacity: 0, y:150}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.5}} type="submit" viewport={{once: true}} className='bg-primary text-white py-5 px-10 rounded-full text-sm font-bold md:w-full md:text-xl' value="Agendar Cita" />
                    </form>
                </div>
                <div className='relative h-96 w-full md:ml-20'>

                    <Image className="absolute md:bottom-0" src="/images/circles.webp" width={500} height={0} alt="Circles" />
                    <Image className="absolute bottom-0 right-3 md:right-0 md:w-full" src="/images/dr-section-form.webp" width={350} height={0} alt="Doctor Form" />
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} >
                        <Image className="absolute bottom-60 left-14 bg-white p-1 rounded-2xl shadow-2xl md:bottom-72 md:left-10" src="/images/calendar.svg" width={75} height={0} alt="Leafs" />
                    </motion.div>
                    <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="absolute -bottom-10 right-10 bg-primary text-white font-bold p-2 rounded-2xl shadow-xl"><span className="text-3xl">9</span>  <br /> Años de <br />Experiencia</motion.p>

                    <Buble2 className="top-10 right-0 md:block hidden" />
                </div>
            </div>


            <Buble className="bottom-40 left-40 md:block hidden" />
        </section>
    )
}

export default Appointment
