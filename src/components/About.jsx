function About() {
  return (
    <div className="container mt-10 md:mt-20 mx-auto p-4 max-w-6xl">
      <h2 className="text-4xl md:pl-4 md:text-6xl font-prata pb-6 text-transparent bg-clip-text bg-gray-900 dark:bg-gray-200 text-center sm:text-left">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto sm:justify-center sm:align-middle bg-gray-100 dark:bg-gray-900 p-6 rounded-lg dark:shadow-xl">
        <section className="m-4">
          <div className="flex flex-col items-center border-b-2 pb-4 border-orange-500">
            <div className="w-full">
              <div className="dark:bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
                <h3 className="text-lg pb-4 font-comfortaa text-gray-900 dark:text-white">
                  While pursuing a CS degree from NIT Jalanhdar, I embarked on a coding journey. Passionate about technology and servant leadership, I am committed to using my skills to serve and innovate.
                  <br />
                  <br />
                  With a keen attention to detail, I strive for excellence in every project. I aim to deliver solutions that meet high quality and user experience standards. My dedication to making a positive impact through technology drives my professional journey.
                  <br />
                  <br />
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;