import React from 'react'

const FooterLP = () => {
  return (
    <div className='w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] flex flex-col justify-center items-center mt-20 overflow-hidden bg-gray-100 dark:bg-[#292929] rounded-2xl mx-auto pt-5 pb-10 md:py-10 px-5 md:px-0'>
        <div className="flex md:hidden px-5 gap-3 mb-10">
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>
            <div className="rounded-full w-2 h-2 bg-blue-400"></div>
        </div>
        <h2 className="font-bold text-3xl font-['Ubuntu'] text-gray-800 dark:text-gray-300">
            Tetap update performa dan tampilan gadgetmu
        </h2>
        <p className="text-gray-800 dark:text-blue-400 my-4 md:my-3">Jangan ragu untuk menghubungi kami. Kami akan sangat senang membantu Anda.</p>

        <section className="contact-form w-full sm:w-[80%] xl:w-[60%]">
            <div className="py-2 lg:py-5 mx-auto w-full">
                <form action="#" className="space-y-5 md:space-y-8 w-full">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Alamat email anda</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#3b3b3b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@yourmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subjek</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Pesan anda</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#3b3b3b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="non-btn w-full md:w-fit py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Kirim pesan</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default FooterLP