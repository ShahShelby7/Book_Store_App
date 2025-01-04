export default function Banner(){
    return(
        <>
         <div className="max-w-screen-2xl  container mx-auto md:px-16 px-4 flex md:flex-row flex-col">  {/*md: is for laptop screen and larger*/}
            
            {/* left part */}
            <div className="md:w-1/2 w-full md:mt-32 mt-12 md:order-1 order-2">
                <h1 className="text-4xl font-bold mb-6">Start your literary adventure today, Discover Your Next <span className="text-red-500">Great Read</span></h1>
                <p className="text-xl text-black-700">Explore a world of books and find your next favorite story. Whether you're into fiction, non-fiction, mystery, romance, or science fiction, our collection has something for everyone. Dive into the pages and let your imagination soar.</p>
                <label className="input input-bordered flex items-center gap-2 mt-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Enter your Email to login" />
                </label>
                <button className="btn bg-red-500 mt-8">Login</button>
            </div>
            
            {/* right part */}
            <div className="md:w-1/2 w-full md:mt-32 mt-20 md:ml-40 order-1">
                <img src="./Banner.png" alt="Banner" className="md:h-[350px] md:w-[500px]"/>
            </div>
        </div>
        </>
    )
}