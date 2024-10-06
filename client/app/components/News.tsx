import React from 'react';

const NewsCard: React.FC = () => {
  return (
    <div className="bg-black text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-light">LATEST NEWS</h1>
        <button className="bg-black text-white border border-white px-4 py-2 text-sm">
          READ ALL THE NEWS
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-8">
        <NewsItem
          image="/path-to-showroom-image.jpg"
          title="VISIT OF MR. JUAN JOSÉ ESCOBAR STEMMANN (AMBASSADOR OF SPAIN IN IRAQ) TO OUR SHOWROOM"
          date="September 2024"
        />
        <NewsItem
          image="/path-to-erbil-fair-image.jpg"
          title="PLENUM CERAMIC PARTICIPATED IN THE BIGGEST ERBIL INTERNATIONAL FAIR FOR INVESTMENT AND REAL ESTATE"
          date="August 2024"
        />
      </div>
    </div>
  );
};

interface NewsItemProps {
  image: string;
  title: string;
  date: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ image, title, date }) => {
  return (
    <div className="flex-1">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-light mb-2">{title}</h2>
      <div className="flex items-center">
        <span className="text-sm mr-2">NEWS</span>
        <span className="text-sm">{date}</span>
      </div>
    </div>
  );
};

export default NewsCard;