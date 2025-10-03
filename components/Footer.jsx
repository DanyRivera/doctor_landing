import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-primary text-white p-5">
            <div className="contenedor flex flex-col md:flex-row gap-7 md:justify-between md:pt-12">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-center">
                        <Image src="/images/dr-footer.svg" alt="Dr Footer" width={50} height={50} />
                        <p className="text-xl font-bold md:text-4xl">Dr. Daniel Rivera</p>
                    </div>
                    <p className="md:text-xl">Contactanos hoy y agenda una consulta con uno de nuestros médicos. <br /> El camino a una visa saludable comienza aquí.</p>
                </div>
                <div className="flex justify-center gap-10 my-1 md:gap-14">
                    <div>
                        <ul className="flex flex-col gap-2">
                            <li className="font-bold text-xl md:text-2xl">Menu</li>
                            <li>Home</li>
                            <li>Nosotros</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2">
                            <li className="font-bold text-xl md:text-2xl">Servicios</li>
                            <li>Cardiología</li>
                            <li>Neurología</li>
                            <li>Radiología</li>
                            <li>Urología</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="flex justify-center pb-5 gap-5 mt-10">
                <div className="bg-white rounded-full p-2 w-auto">
                    <Image src="/images/facebook.svg" alt="Dr Footer" width={30} height={30} />
                </div>
                <div className="bg-white rounded-full p-2 w-auto">
                    <Image src="/images/linkedin.svg" alt="Dr Footer" width={30} height={30} />
                </div>
                <div className="bg-white rounded-full p-2 w-auto">
                    <Image src="/images/x.svg" alt="Dr Footer" width={30} height={30} />
                </div>
                <div className="bg-white rounded-full p-2 w-auto">
                    <Image src="/images/instagram.svg" alt="Dr Footer" width={30} height={30} />
                </div>
            </div>

        </footer>
    )
}

export default Footer
