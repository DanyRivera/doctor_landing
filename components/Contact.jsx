'use client'

import Buble from "./ui/buble"
import Buble2 from "./ui/buble2"
import { Element } from "react-scroll"

const Contact = () => {
    return (
        <Element name="contacto">
            <section className="mt-12 md:mt-12 mb-0 py-18 relative md:mx-0 bg-secondary">
                <div className=" flex flex-col gap-4  contenedor">
                    <h2 className="text-center font-bold text-2xl uppercase ">Contactanos</h2>
                    <p className="text-center mx-5 text-gray-500 md:w-1/2 md:mx-auto">Sientete libre en contactarnos si tienes algun problema o situación !</p>


                    <div className="mt-10 flex flex-col gap-10 md:flex-row md:grid md:grid-cols-5">
                        <div className="flex flex-col gap-5 justify-center items-center md:col-span-3">
                            <h3 className="text-xl font-bold">Dejanos un Mensaje</h3>
                            <form className="w-full px-12 flex flex-col gap-5">
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="name" className="text-gray-700">Nombre:</label>
                                    <input className="outline-none px-5 py-5 bg-white rounded-full text-base" type="text" placeholder="Nombre Completo" id="name" />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="email" className="text-gray-700">Email:</label>
                                    <input className="outline-none px-5 py-5 bg-white rounded-full text-base" type="text" placeholder="Dirección de Correo" id="email" />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="msg" className="text-gray-700">Mensaje:</label>
                                    <textarea className="outline-none px-5 py-5 bg-white rounded-full text-base" name="msg" id="msg" placeholder="Escribe el motivo de contacto"></textarea>
                                </div>
                                <input type="submit" className="bg-primary text-white py-3 rounded-full text-center mt-5" value="Enviar Mensaje" />
                            </form>
                        </div>
                        <div className="flex flex-col gap-5 justify-center items-center md:col-span-2">
                            <h3 className="text-xl font-bold">Información de Contacto</h3>
                            <div className="flex flex-col gap-14 mt-5 px-16">
                                <div className="flex gap-5 items-center">
                                    <div className="bg-white p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-xl font-bold text-gray-700">Dirección de Email</h4>
                                        <p className="text-gray-700">dany.dev@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <div className="bg-white p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>

                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-xl font-bold text-gray-700">Número Celular</h4>
                                        <p className="text-gray-700">(319) 789 - 4569</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <div className="bg-white p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>

                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="text-xl font-bold text-gray-700">Ubicación</h4>
                                        <p className="text-gray-700">6158 Royal Ln. Mesa New Jersey 6789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bubles Desktop */}
                    <Buble2 className="top-10 left-9 md:top-32 md:left-40" />
                    <Buble className="bottom-10 right-7 md:bottom-32 md:right-40" />
                </div>
            </section>
        </Element>
    )
}

export default Contact
