import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                NASA
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Venturing beyond the bounds of the universe, inspiring the future of humanity: NASA, where dreams reach for the stars
              </p>
              <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div class="grid grid-cols-1 flex-row-reverse gap-x-8 gap-y-6 text-base font-semibold leading-7  text-gray-300 sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="/files">NASA FILES <span aria-hidden="true">&rarr;</span></a>
     
      </div>
      </div>
            
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute flex-wrap transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ">
                        <Image
                          src="/4.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={176}
                          height={256}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/5.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={176}
                          height={256}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/6.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={176}
                          height={256}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/7.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={176}
                          height={256}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/8.webp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={176}
                          height={256}
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/9.gif"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={176}
                          height={256}
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/3.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          width={176}
                          height={256}
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
  );
}
