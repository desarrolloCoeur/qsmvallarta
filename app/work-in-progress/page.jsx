import BuildingCard from "@/components/ui/BuildingCard"

const page = () => {
  return (
    <div className="pt-32 container w-11/12 mx-auto">
      <h1 className=" mx-6 text-center lg:text-7xl text-4xl font-semibold">Work in Progress</h1>
      <div className="container grid md:grid-cols-2 gap-5 my-20">
        <BuildingCard background="/img/ocean-and-canal-hero.jpg" title="Ocean & Canal I" href="/ocean-and-canal/work-in-progress"/>
        <BuildingCard background="/img/home-ocean-canal.jpg" title="Ocean & Canal 2" href="/ocean-and-canal-2/work-in-progress"/>
        <BuildingCard background="/img/tower-garden/VISTA-FRENTE-S.webp" title="Garden" href="/tower-garden/work-in-progress"/>
      </div>
    </div>
  )
}

export default page