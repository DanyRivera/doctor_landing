import Buble from "./ui/buble";
import Buble2 from "./ui/buble2";
import Slider from "./ui/Slider";
import * as motion from "motion/react-client"

const Reviews = () => {
    return (
        <section className="my-12 md:mt-12 md:mb-40 py-18  md:mx-0">
            <div className=" flex flex-col gap-4 md:relative md:mx-52 md:h-96 ">
                <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="text-center font-bold text-2xl uppercase ">Lo que nuestros Pacientes Dicen</motion.h2>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="text-center mx-5 text-gray-500 md:w-1/2 md:mx-auto">El Dr. Daniel Rivera tiene a muchos pacientes satisfechos, contentos con nuestro servicio.</motion.p>

                <Slider />

                {/* Bubles Desktop */}
                <Buble2 className="top-0 left-36 hidden md:block" />
                <Buble className="-bottom-40 right-72 hidden md:block" />
                <Buble2 className="-bottom-40 right-86 hidden md:block" />
            </div>
        </section>
    )
}

export default Reviews
