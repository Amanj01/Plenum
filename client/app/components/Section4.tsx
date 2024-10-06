import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import Image, { StaticImageData } from 'next/image';
import image7 from "@/public/mini+slava+site+1 1.png";
import image8 from "@/public/american+embassy+2 1.png";
import image9 from "@/public/1-2 1.png";

// Define the Project interface
interface Project {
  title: string;
  description: string;
  image: StaticImageData;
}

const projects: Project[] = [
  {
    title: 'Mini Salava Facades',
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios...',
    image: image7,
  },
  {
    title: 'American Consulate',
    description: 'Service for stonemasons to make a kitchen worktop, a bathroom vanity top, or a table top...',
    image: image8,
  },
  {
    title: 'Spanish Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image9,
  },
  {
    title: 'Erbil Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image7,
  },
  {
    title: 'Erbil Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image9,
  },
];

const ProjectsScroller = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Automatically scroll to the right every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleScrollRight();
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [scrollPosition]);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust this value for how much you want to scroll
        behavior: 'smooth',
      });
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust this value for how much you want to scroll
        behavior: 'smooth',
      });
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  return (
    <div className="text-white pt-72 py-12 px-6 md:px-16 lg:px-24">
      {/* Header with title and right arrow */}
      <div className='flex mb-20 items-center justify-between'>
        <h1 className="text-left text-3xl md:text-7xl font-light">
          Projects by Plenum Ciramica
        </h1>
        <span onClick={handleScrollRight} className='cursor-pointer'>
          <IoIosArrowDroprightCircle size={40} />
        </span>
      </div>

      {/* Scrollable Project Section */}
      <div className="relative">
        {/* Left Arrow */}
        <span onClick={handleScrollLeft} className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'>
          <IoIosArrowDropleftCircle size={40} />
        </span>

        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col gap-8 overflow-x-auto scrollbar-hide cursor-pointer"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[300px] lg:min-w-[400px]"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  layout="responsive"
                  width={1000}
                  height={500}
                />
              </div>
              <div className="text-left py-6">
                <h2 className="text-3xl font-light mb-4">{project.title}</h2>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <span onClick={handleScrollRight} className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer'>
          <IoIosArrowDroprightCircle size={40} />
        </span>
      </div>
    </div>
  );
};

export default ProjectsScroller;
