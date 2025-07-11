import React from 'react'

const FooterLP = () => {
  return (
    <div className='w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] flex flex-col justify-center items-center mt-20 overflow-hidden bg-gray-100 dark:bg-[#4b4b4b] rounded-2xl mx-auto py-10'>
        <h2 className="font-bold text-3xl font-['Ubuntu'] text-gray-800 dark:text-gray-300">
            Tetap update performa dan tampilan gadgetmu
        </h2>
        <p className="text-gray-800 dark:text-gray-300 mt-2">Jika ada pertanyaan ataupun saran, jangan ragu untuk menghubungi kami. Kami akan sangat senang membantu Anda.</p>

        <section class="contact-form w-[80%] xl:w-[60%]">
            <div class="py-2 lg:py-5 px-4 mx-auto w-full">
                <form action="#" class="space-y-8 w-full">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@yourmail.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="non-btn py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default FooterLP