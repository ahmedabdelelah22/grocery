import { appPromoBannerData, assets } from "../../assets/assets"

const AppBromoBanner = () => {
  return (
    <section className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 my-14  bg-green-950  rounded-2xl">
      {/* {left side} */}
<div className="flex flex-col md:flex-row items-center justify-between gap-8 xl:px-10">
    <div className="text-center md:text-left">
        <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">{appPromoBannerData.title}
</h1>
<p className="text-white/70 mb-6 max-w-md">
{appPromoBannerData.description}
</p>
<div className="flex flex-warp gap-3 justify-center md:justify-start"> 
    <button className="px-6 py-3 bg-white text-green-950 font-semibold rounded-xl hover:bg-orange-100">AppStore</button>
        <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">GooglePlay</button>
</div>
    </div>
    {/* right side */}

<img  src={assets.delivery_truck} alt="Delivery Truck" className="max-w-60 sm:max-w-120 xl:pr-10" />

</div>
    </section>
  )
}

export default AppBromoBanner