import Image from 'next/image';
import Link from "next/link"

function Hero() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image src="/10.jpg" alt="" width={800} height={600} className="object-contain rounded-md" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <Link href="/Picture">
            <h1 className="text-5xl font-bold text-slate-200 leading-tight sm:text-6xl">
              Explore the wonders of space with NASA daily.
              <span className="dark:text-violet-400"></span>
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
