const BuildingHero = ({background,title}) => {

  return (
    <div className="bg-cover bg-center w-full h-[100dvh] flex items-center justify-center relative" style={{backgroundImage: `url(${background})` }}>
        <h4 className='bg-main/90 text-white text-5xl sm:text-7xl absolute bottom-14 p-5 text-center'>{title}</h4>
    </div>
  )
}

export default BuildingHero

