function Hero() {
  return ( <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/10.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<a href="/Picture"><h1 className="text-5xl font-bold text-slate-200 leadi sm:text-6xl">Explore the wonders of space with NASA daily.
				<span className="dark:text-violet-400"></span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
				
			</p>
      </a>
			
		</div>
	</div>
</section> );
}

export default Hero;