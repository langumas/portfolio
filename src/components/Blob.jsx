import catowl from '../img/catowl.png';

export const Blob = () => {
  return (
    <div 
      className="blob 'lg:relative lg:left-0' 
"
      style={{
        backgroundImage: `url(${catowl})`
      }}
    />
  );
};