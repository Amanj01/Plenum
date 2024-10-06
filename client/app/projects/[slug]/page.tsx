import Image from 'next/image'
import React from 'react'
import image1 from "@/public/sp1.png"
import Navbar from '@/app/components/Navbar'


const SingleProject = () => {
  return (
    <div className='bg-black'>
      <Navbar />
        <div>
          <div className='image&title flex flex-col px-4 md:px-8 pt-[120px]'>
          <h1 className="text-3xl md:text-6xl font-light mb-4 text-white">MUHANAD CARS IN <br /> SULAYMANIYAH</h1>
          <Image 
            src={image1}
            alt="image"
            className='w-max h-max pt-6 '
          />
          </div>
          {/* textakan harse parchaka aleraya */}
          <div className='texts flex flex-col p-32 px-4 md:px-28'>
              <div className='firstPart flex'>
                <div>
                <h1 className="text-2xl md:text-5xl font-light mb-4 text-white w-1/2">Communicate class, distinction and art</h1>
                 <p className='text-white w-1/2 pt-6'>These were the goals of the architectural project for the Nobili S.p.A. corporate headquarters. Square, pure volumes, enhanced externally by one of the spheres of the great sculptor Arnaldo Pomodoro. Laminam large slabs contribute to the overall grandeur, with three iconic collections used: IN-SIDE, Fokos and Calce.</p>
                </div>

                <div className="bg-black text-white p-8 font-sans w-1/2 mt-32">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-y-6 text-lg font-light">
                
                {/* Location */}
                <div className="uppercase">Location</div>
                <div className="text-right">Erbil</div>
                <hr className="col-span-2 border-t border-gray-500" /> {/* Line after section */}

                {/* Year */}
                <div className="uppercase">Year</div>
                <div className="text-right">2020</div>
                <hr className="col-span-2 border-t border-gray-500" /> {/* Line after section */}

                {/* Applications */}
                <div className="uppercase">Applications</div>
                <div className="text-right">Bath & WC</div>
                <hr className="col-span-2 border-t border-gray-500" /> {/* Line after section */}

                {/* Project Type */}
                <div className="uppercase">Project Type</div>
                <div className="text-right">Headquarter</div>
                <hr className="col-span-2 border-t border-gray-500" /> {/* Line after section */}
                
              </div>
            </div>
          </div>
        </div>
 

              <div className='secondPart '>
              <h1 className="text-2xl md:text-5xl font-light mb-4 text-white w-1/2">Italian excellence
              </h1>
              <p className='text-white w-2/5 pt-6'>Located in the province of Novara, Nobili S.p.A. is an Italian leader in the field of taps and bathroom fittings. The only European company in the sector with an entirely integrated production cycle, every year it dedicates significant resources to perfecting its production processes and adopting some of the most advanced technologies available. The Nobili Technology Centre, its Suno-based production site, is the most streamlined and efficient plant in the entire sector, its layout able to guarantee constant growth and extremely high quality standards with a very low environmental impact.</p>
              </div>
          </div>

          {/* images */}
          <div>
            
          </div>

        </div>
    </div>
  )
}

export default SingleProject
