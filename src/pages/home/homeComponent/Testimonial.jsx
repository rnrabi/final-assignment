import manone from "../../../assets/manone.jpg"
import mantwo from "../../../assets/mantwo.jpg"
import manthree from "../../../assets/manthree.jpg"
import manfour from "../../../assets/manfour.jpg"


const Testimonial = () => {
    return (
        <div>
            <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">What our patients are saying about us</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">

                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">

                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Mediglam is my go-to for all my medication needs. The detailed descriptions and easy navigation make it a breeze to find what I need. Highly recommended.
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src={manone} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <p className="text-xl font-semibold leading-tight">Rayhan chili</p>
                            <p className="text-sm uppercase">teacher</p>
                        </div>
                    </div>


                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg> I love the health tips section on Mediglam. The advice is practical and has really helped me improve my daily routine. Great addition
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src={mantwo} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <p className="text-xl font-semibold leading-tight">Mackben</p>
                            <p className="text-sm uppercase">Musician</p>
                        </div>
                    </div>


                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>The patient testimonials on Mediglam gave me confidence in trying a new medication. It is reassuring to see real stories from real people
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src={manthree} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <p className="text-xl font-semibold leading-tight">charls diken</p>
                            <p className="text-sm uppercase">actor</p>
                        </div>
                    </div>


                    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                        <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                            <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>Mediglam is interactive symptom checker is fantastic! It saved me a trip to the doctor by giving me clear advice and product recommendations
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                            <img src={manfour} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500" />
                            <p className="text-xl font-semibold leading-tight">Robin hood</p>
                            <p className="text-sm uppercase">singer</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Testimonial;