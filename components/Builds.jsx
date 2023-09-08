import BuildingCard from './ui/BuildingCard'

const Builds = () => {
    const data = [
        {
            title: 'Ocean & Canal I',
            sold: 'Sold Out',
            img : '/img/home-ocean-canal.jpg',
            thumb : '/img/home-ocean-canal.jpg',
            href : '/ocean-and-canal'
        },
        {
            title: 'Ocean & Canal II',
            sold: '',
            img : '/img/5.webp',
            thumb : '/img/5.webp',
            href : '/ocean-and-canal-2'

        },
        {
            title: 'Golf Residences',
            sold: 'Sold Out',
            img : '/img/home-golf.jpg',
            thumb : '/img/home-golf.jpg',
            href : '/golf-residences'

        },
        {
            title: 'Banderas Bay',
            sold: '',
            img : '/img/OLLR-1-1-scaled.jpg',
            thumb : '/img/OLLR-1-1-scaled.jpg',
            href : '/banderas-bay'
        },
    ]

  return (
    <div className="container w-11/12 mx-auto my-20">
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {
            data.map((t,i) => {
                return (
                    <>
                    <BuildingCard background={t.thumb} title={t.title} sold={t.sold} key={i} href={t.href}/>
                    </>
                )
            })
        }

    </div>
  </div>
  )
}

export default Builds