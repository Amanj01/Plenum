import React from 'react'
import Image from 'next/image'
import image1 from "@/public/s111.png"
import image2 from "@/public/s2.png"
import image3 from "@/public/s3.png"
import image4 from "@/public/s4.png"
import image5 from "@/public/s5.png"
import image6 from "@/public/s6.png"
import image7 from "@/public/s7.png"

const sponsors = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 7, image: image1 },
  { id: 7, image: image2 },
  { id: 7, image: image3 },
  { id: 7, image: image4 },
  { id: 7, image: image5 },
]

const Sponsors = () => {
  return (
    <div className="relative overflow-hidden w-full py-10">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 7s linear infinite;
        }
      `}</style>
      <div className="flex animate-scroll items-center py-30">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={`${sponsor.id}-${index}`} className="flex-shrink-0 mx-8">
            <Image 
              src={sponsor.image} 
              alt={`Sponsor ${sponsor.id}`} 
              width={90} 
              height={50} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sponsors