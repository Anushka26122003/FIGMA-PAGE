import React from "react";
import CarouselDarkVariantExample from "./3rdpagecorosole";
import PictureSlider from "./fourthpagepicslider";
function Pageone() {
  return (
    <div 
  className="relative mx-auto" 
  style={{ 
    maxWidth: "1600px", 
    height: "5370px",
    overflow: "hidden",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none"
  }}
>  
  {/* all your content */}

  {/* all your content here */}

      <img
        src="/Group 26.png"
        alt="artboard"
        className="absolute w-[1055px] h-[185px] rotate-0 opacity-100 top-[408px] left-[192px] z-10"
      />
      <div id="pageone" className="">
        <div id="pageone">
          <div
            id="pageone"
            className="flex justify-between items-center px-[37px] h-[80px]"
          >
            <img
              src="/Group 25.png"
              alt="logo-left"
              className="w-[334.83px] h-[27px]"
            />

            <img
              src="/favicon.png"
              alt="logo-right"
              className="w-[35.25px] h-[17px] top-[8.5px] left-[5.88px]"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <img
          src="/Rectangle 23.png"
          alt="logo1"
          className="w-1/2 h-[800px] object-cover"
        />

        <img
          src="/Rectangle 2.png"
          alt="rectangle"
          className="w-1/2 h-[800px] object-cover opacity-95"
        />
      </div>
      <div className="relative">
        <img
          src="/Group 26.png"
          alt="artboard"
          className="absolute w-[1055px] h-[185px] rotate-0 opacity-100 top-[408px] left-[192px]"
        />
      </div>

      {/* navbar */}
      <nav className="w-full h-[48px] bg-[#151515] flex items-center  px-[50px]">
        <div className="flex items-center gap-10">
          <p className="  text-[19px] uppercase text-[#F6F5F1] whitespace-nowrap">
            A prodigy botanist from the isle of Réunion, Edmond Albius
            revolutionized vanilla cultivation.
          </p>
          <img src="/ART (2).png" alt="art" className="w-[40px] h-[30px]" />
          <p className=" text-[19px]   uppercase text-[#F6F5F1] whitespace-nowrap">
            A prodigy botanist from the isle
          </p>
        </div>
      </nav>
      {/* 2nd page */}
      <div>
        <div>
          <img
            src="/secondpagelogo.png"
            alt="bornlogo"
            className="absolute w-[904px] h-[183px] rotate-0 opacity-100 top-[943px] left-[463px]"
          />
        </div>
        <div>
          <img
            src="/Rectangle 12.png"
            alt="2ndpageimage"
            className="absolute w-[393px] h-[390px] rotate-0 opacity-100 top-[1207px] left-[974px] rounded-[9px]"
          />
        </div>
        <p className="absolute w-[821px] h-[231px] rotate-0 opacity-100 top-[1444px] left-[52px] font-['Maison_Neue_Mono'] font-normal text-[14px] leading-[33px] tracking-normal text-[#211E1C]">
          Off the coast of Madagascar, on a small island of Bourbon (known today
          as Reunion) began the extraordinary tale of Edmond Albius, an
          untrained prodigy, who centuries ago, unlocked the secret to manually
          pollinating vanilla. At only twelve years old his natural curiosity
          transformed vanilla into a coveted world treasure and established a
          hand pollinating tradition that endures to this day.
        </p>
      </div>
      <div className="relative w-full">
        <img
          src="/Rectangle 20.png"
          alt="rectangle"
          className="absolute w-[1600px] h-[800px] rotate-0 opacity-100 top-[700px] left-0  object-cover"
        />
      </div>
      {/* 3rd page */}
      <div>
        <div>
          <h1 className="absolute h-[79px] rotate-0 opacity-100 top-[2536.5px] left-[55px] font-['Kings_Caslon_Display_Trial'] font-normal italic text-[64px] leading-[100%] tracking-normal text-[#010102]">
            Our Featured
            <span className="font-['Kings_Caslon_Display_Trial'] font-normal italic text-[64px] leading-[100%] tracking-normal text-[#010102]">
              {" "}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="absolute w-[586px] h-[119px] rotate-0 opacity-100 top-[2602.5px] left-[33px] font-['Kings_Caslon_Display_Trial'] font-normal text-[96px] leading-[100%] tracking-normal text-[#000000]">
            COCKTAILS
          </h1>
        </div>
      </div>

      <div>
        <img
          src="/ART.png"
          alt="art"
          className="absolute w-[80px] h-[133px] rotate-0 opacity-100 top-[2927.5px] left-[505px]"
        />
      </div>
      <div>
        <p className="absolute w-[578px] h-[144px] rotate-0 opacity-100 top-[3107.5px] left-[45px] font-['Maison_Neue_Mono'] font-normal text-[16px] leading-[33px] tracking-normal text-[#000000]">
          Each pour of Edmond's Honor adds depth, warmth, and character to every
          cocktail. Our signature bourbon brings these drinks to life with a
          richness you can taste in every sip.
        </p>
      </div>
      {/*moving pictures*/}

      <div className="absolute w-[648px] h-[657px] top-[2524.5px] left-[693px] rounded-[9px] overflow-hidden">
        <CarouselDarkVariantExample />
      </div>

      <nav className="absolute w-[1600px] h-[48px] rotate-0 opacity-100 top-[3275.5px] left-[0px] bg-[#151515] flex items-center px-[50px]">
        <div className="flex items-center gap-10">
          <p className="text-[19px] uppercase text-[#F6F5F1] whitespace-nowrap">
            A prodigy botanist from the isle of Réunion, Edmond Albius
            revolutionized vanilla cultivation.
          </p>
          <img src="/ART (2).png" alt="art" className="w-[40px] h-[30px]" />
          <p className="text-[19px] uppercase text-[#F6F5F1] whitespace-nowrap">
            A prodigy botanist from the isle
          </p>
        </div>
      </nav>

      {/* 4th page */}
      <div>
        <h1 className="absolute w-[727px] h-[45px] rotate-0 opacity-100 top-[3372px] left-[1008px] font-['Kings_Caslon_Display_Trial'] font-normal italic text-[64px] leading-[100%] tracking-normal text-[#010102]">
          our Upcoming
          <span className="font-['Kings_Caslon_Display_Trial'] font-normal italic text-[64px] leading-[100%] tracking-normal text-[#010102]">
            {" "}
          </span>
        </h1>
      </div>

      <div>
        <h1 className="absolute w-[405px] h-[119px] rotate-0 opacity-100 top-[3438px] left-[986px] font-['Kings_Caslon_Display_Trial'] font-normal text-[96px] leading-[100%] tracking-normal text-[#000000]">
          EVENTS
        </h1>
      </div>
      {/*boxes*/}

      <div>
        {[
          {
            name: "MOONLIGHT",
            location: "ATLANTA, GA | 4/24 @ 5PM",
            width: "1456.99px",
            height: "65.5px",
            top: "3606.5px",
            left: "32px",
            lineTop: "3576.5px",
          },
          {
            name: "THOMPSON HOTEL",
            location: "ATLANTA, GA | 4/30 @ 5PM",
            width: "1456px",
            height: "70px",
            top: "3731.5px",
            left: "32px",
            lineTop: "3701.5px",
          },
          {
            name: "PHIPPS PLAZA",
            location: "ATLANTA, GA | 5/10 @ 5PM",
            width: "1457px",
            height: "70px",
            top: "3861.5px",
            left: "32px",
            lineTop: "3831.5px",
          },
          {
            name: "BELTLINE",
            location: "ATLANTA, GA | 5/10 @ 5PM",
            width: "1457px",
            height: "70px",
            top: "3991.5px",
            left: "31px",
            lineTop: "3961.5px",
          },
        ].map((event, index) => (
          <div key={index}>
            {/* Horizontal Line */}
            <hr
              style={{ top: event.lineTop, left: "36px" }}
              className="absolute w-[1450px] h-[0px] border-t border-[#000000] opacity-100"
            />

            {/* Event Box */}
            <div
              style={{
                width: event.width,
                height: event.height,
                top: event.top,
                left: event.left,
              }}
              className="absolute bg-[#] flex justify-between items-center px-4"
            >
              <div className="flex flex-col gap-1">
                <h1 className="font-['Kings_Caslon_Display_Trial'] font-normal text-[40px] leading-[32px] text-black ">
                  {event.name}
                </h1>
                <p className="font-['Maison_Neue_Mono'] font-normal text-[14px] leading-[20px] uppercase text-black">
                  {event.location}
                </p>
              </div>
              <p className="font-['Maison_Neue_Mono'] font-bold text-[16px] underline text-black">
                RSVP
              </p>
            </div>

            {/*pictures*/}
            <div>
              <PictureSlider />
            </div>
          </div>
        ))}
      </div>

      {/*5 page */}
      <div>
        <img
          src="/forbes-magazine-logo.png"
          alt="forbes"
          className="absolute w-[198.20px] h-[50px] rotate-0 opacity-100 top-[4710px] left-[49px]"
        />
        <img
          src="/Mens-Health-Logo-500x281.png"
          alt="mens-health"
          className="absolute w-[243.14px] h-[74px] rotate-0 opacity-100 top-[4698px] left-[398px]"
        />
        <img
          src="/Maxim-logo-1536x864.png"
          alt="Maxim-logo"
          className="absolute w-[238.11px] h-[71px] rotate-0 opacity-100 top-[4700px] left-[791px]"
        />

        <img
          src=" /1.png"
          alt="public/1"
          className="absolute w-[199.66px] h-[53px] rotate-0 opacity-100 top-[4709px] left-[1181px]"
        />
      </div>
      <header>
        <hr className="absolute w-[1500px] h-[0px] rotate-0 opacity-100 top-[4654.5px] left-[0px] border-t border-[#000000]" />
      </header>
      <div className="absolute w-[1600px] h-[800px] rotate-0 opacity-100 top-[4819px] left-0 bg-[#151515]">
        <p className="absolute w-[70px] h-[36px] rotate-0 opacity-100 top-[76px] left-[49px]  font-normal text-[17px] leading-[100%] tracking-normal text-center text-[#FFFFFF]">
          SHOP
        </p>

        <p className="absolute w-[159px] h-[36px] rotate-0 opacity-100 top-[76px] left-[384px]  font-normal text-[17px] leading-[100%] tracking-normal text-center text-[#FFFFFF]">
          OUR STORY
        </p>

        <p className="absolute w-[159px] h-[36px] rotate-0 opacity-100 top-[76px] left-[789px] font-normal text-[17px] leading-[100%] tracking-normal text-center text-[#FFFFFF]">
          FOLLOW US
        </p>

        <p className="absolute w-[209px] h-[36px] rotate-0 opacity-100 top-[74px] left-[1194px] font-normal text-[17px] leading-[100%] tracking-normal text-center text-[#FFFFFF]">
          FIND US NEAR YOU
        </p>

        <p className="absolute w-[305px] h-[20px] rotate-0 opacity-100 top-[5421px] left-[64px] font-['Absans'] font-normal text-[14px] leading-[100%] tracking-[20%] text-[#FDFCFA]">
          GET 10% OFF YOUR FIRST ORDER
        </p>
      </div>
      <p className="absolute w-[305px] h-[20px] rotate-0 opacity-100 top-[5371px] left-[64px] font-['Absans'] font-semibold text-[19px] leading-[100%] tracking-[20%] text-[#FFFFFF]">
        join the newsletter
      </p>
      <img
        src="/Layer_1.png"
        alt="layer"
        style={{
          width: "17.35px",
          height: "18.78px",
          position: "absolute",
          top: "5371px",
          left: "404px",
          transform: "rotate(-0.78deg)",
        }}
      />
      <hr className="absolute w-[365px] h-[0px] rotate-0 opacity-100 top-[5407px] left-[64px] border-t-2 border-[#FDFCFA]" />
      <p className="absolute w-[305px] h-[20px] rotate-0 opacity-100 top-[5421px] left-[64px] font-['Absans'] font-normal text-[14px] leading-[100%] tracking-[20%] text-[#FDFCFA]">
        GET 10% OFF YOUR FIRST ORDER
      </p>
      <img
        src="/Artboard 3_1 1.png"
        alt="image "
        className="absolute w-[1445.65px] h-[120px] rotate-0 opacity-100 top-[5499px] left-[6px]"
      />
    </div>
  );
}

export default Pageone;
