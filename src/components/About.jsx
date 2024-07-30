
function About() {

  return (
    <div className="container mt-10 md:mt-20  mx-auto p-4 max-w-6xl ">
      <h2 className="text-4xl md:pl-4 md:text-6xl  font-prata pb-6 f text-transparent bg-clip-text bg-gray-900 dark:bg-gray-200 text-center  sm:text-left">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto sm:justify-center sm:align-middle bg-gray-100 dark:bg-gray-900 p-6 rounded-lg dark:shadow-xl">
        <section className="m-4">
          <div className="flex flex-col sm:flex-row items-center border-b-2 pb-4 border-orange-500">
            <div className="sm:w-1/2">
              {/* Image below the title on small screens */}
              <div className="block sm:hidden">
                <img
                  src="/Handsome.jpg"
                  alt="About Me"
                  className="rounded-full w-80 h-80 mb-4 mx-auto object-cover shadow-lg"
                />
              </div>

              <div className=" dark:bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
                <h3 className="text-lg pb-4 font-comfortaa text-gray-900 dark:text-white">
                  While pursuing a CS degree from NIT Jalanhdar, I
                  embarked on a coding journey. Passionate about technology and
                  servant leadership, I am committed to using my skills to serve
                  and innovate.
                  <br />
                  <br />
                  With a keen attention to detail , I strive for excellence in every project. I aim
                  to deliver solutions that meet high quality and user
                  experience standards. My dedication to making a positive
                  impact through technology drives my professional journey.
                  <br />
                  <br />
                </h3>
              </div>
            </div>

            {/* Image on the right for large screens */}
            <div className="hidden sm:block sm:w-1/2 sm:pl-8">
              <img
                src="/photo.png"
                alt="About Me"
                className="rounded-full w-80 h-80 mb-4 sm:mt-4 md:ml-10 mx-32 sm:mx-0 object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
}

export default About;
