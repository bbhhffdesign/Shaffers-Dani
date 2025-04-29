

export const Background = ({ animate, isDouble }) => {
  
  return (                    
    (isDouble? (
      
    // <div className="background">
    <div className={`background ${animate ? 'bg-animate' : '' }`}>
      <div className={`wave wave-1`} />
      <div className={`wave wave-2`} />
    </div>
    ) : (
      <div className={`background ${animate ? 'bg-animate' : '' }`}>
      {/* <div className={`wave wave-1 ${animate ? 'wave-animated' : ''}`} /> */}
      <div className={`wave wave-2 wave-2-bottom`} />
    </div>

    ))
  );
}