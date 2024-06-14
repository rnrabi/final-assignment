import backImage from "../../../assets/background.jpg"

const HelthTips = () => {
    return (
        <div>
            <div className="w-full dark:bg-gray-500"
                style={{
                    backgroundImage: `url(${backImage})`,
                    backgroundPosition: 'centerCenter',
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover'
                }}>

                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">Get Our Health Tips</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">What kind of health tip you want, write below.</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="your question" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelthTips;