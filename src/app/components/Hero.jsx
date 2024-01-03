export default function Hero() {
    return (
      <div className="relative overflow-hidden bg-black">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
                <a href="/files">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                NASA
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              Venturing beyond the bounds of the universe,  inspiring the future of humanity: NASA, where dreams reach for the stars."
              </p>
              </a>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://www.archives.gov/files/research/still-pictures/nasa.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://i.insider.com/5e224b4f24306a473f0cd762?width=1000&format=jpeg&auto=webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://api.time.com/wp-content/uploads/2015/02/4-james-mcdivitt-first-us-spacewalk-ed-white_s-eva-over-new-mexico-gemini-4-3-june-1965.jpg?quality=85&w=1920"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/vintagenasa05.webp?w=1190&h=1250"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/vintagenasa17.jpg?w=1900&h=1926"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://media.cnn.com/api/v1/images/stellar/prod/210915171321-03-nasa-space-shuttle-photos-scn-culture-queue.jpg?q=w_2000,c_fill/f_webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://history.nasa.gov/printFriendly/Assets/Images/buzz.gif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
               
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  