import React from 'react';
import PagenationButtons from './PagenationButtons';

const ImageResults = ({results}: any) => {
  return (
    <div className="mt-4">
      <div className="grid">
        {results.items?.map((result: any) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className='group-hover:shadow-xl w-full h-60 object-contain'
                  src={result.link}
                  alt={result.title}
                />
              </a>
              <a className="group-hover:underline" href={result.image.contextLink}>
                <h2 className="truncate text-xl">
                  {result.title}
                </h2>
              </a>
              <a className="group-hover:underline" href={result.image.contextLink}>
                <p className="text-gray-600">
                  {result.displayLink}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-6">
        <PagenationButtons/>
      </div>
    </div>
  );
};

export default ImageResults;