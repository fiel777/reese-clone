import React from "react";
import { featuredProducts, ShopByCategory,ShopByAlbum } from "../Data";

function Section() {
  return (
    <div className="md:max-w-screen-xl m-auto px-5 font-primary">
      <div className="pt-5 lg:pt-0">
        <img
          decoding="async"
          src="https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb.jpg"
          width="1200"
          height="503"
          alt=""
          data-full-image="https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb.jpg"
          data-light-image="https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb.jpg"
          data-id="4089"
          className="wp-image-4089 skip-lazy"
          srcSet="https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb.jpg 1200w, https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb-600x252.jpg 600w, https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb-300x126.jpg 300w, https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb-1024x429.jpg 1024w, https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb-150x63.jpg 150w, https://shop.reeselansangan.com/wp-content/uploads/2021/05/SHOP_TWSHeaderWeb-768x322.jpg 768w"
          sizes="(max-width: 1200px) 100vw, 1200px"
        ></img>

        <h1 className="text-center pt-12 pb-4 text-2xl tracking-wide font-normal">
          Featured Products
        </h1>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:sm:grid-cols-4">
          {featuredProducts.map((item, key) => (
            <div className="flex flex-col" key={key}>
              <img src={item.imagesrc} alt="image" />
              <div className="pt-4">
                <h2 className="text-sm opacity-75">{item.title}</h2>
                <span className="text-sm font-medium">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
    

        <h1 className="text-center mt-40 mb-8  text-2xl tracking-wide font-normal">
          Shop by Category
        </h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:sm:grid-cols-4">
          {ShopByCategory.map((item, key) => (
            <div
              className="flex flex-col relative group cursor-pointer "
              key={key}
            >
              <img src={item.imagesrc} alt="image" />
              <div className="absolute text-center bg-white/90 py-2 top-[80%]  sm:top-[90%] right-1/2 translate-x-1/2 -translate-y-10 w-11/12 m-auto group-hover:bg-white transition duration-300 ">
                <h2 className="text-black uppercase text-xs font-bold opacity-70">
                  {item.title}
                </h2>
                <span className="text-xs uppercase">{item.product}</span>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-center mt-40 mb-8  text-2xl tracking-wide font-normal">
          Shop by Album
        </h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:sm:grid-cols-4">
          {ShopByAlbum.map((item, key) => (
            <div
              className="flex flex-col relative group cursor-pointer "
              key={key}
            >
              <img src={item.imagesrc} alt="image" />
              <div className="absolute text-center bg-white/90 py-2 top-[80%]  sm:top-[90%] right-1/2 translate-x-1/2 -translate-y-10 w-11/12 m-auto group-hover:bg-white transition duration-300 ">
                <h2 className="text-black uppercase text-xs font-bold opacity-70">
                  {item.title}
                </h2>
                <span className="text-xs uppercase">{item.product}</span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default Section;
