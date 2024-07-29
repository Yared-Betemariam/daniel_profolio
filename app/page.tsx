import TSwipe from "@/components/TSwipe";
import { designs, designs1, designs2, images } from "@/lib/images";
import { cn, fontWrapper } from "@/lib/utils";
import Image from "next/image";
import { FaInstagram, FaTelegram } from "react-icons/fa6";

export default function Home() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "@dana_boii44",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      link: "@danicoll321",
    },
  ];

  return (
    <main className="flex flex-col my-12">
      <section className="wrapper flex gap-8 py-16 flex-col md:flex-row">
        <div className="flex-1 text-center md:text-start flex flex-col gap-2">
          <span className={"text-base font-normal "}>Hey, I am</span>
          <h1 className={fontWrapper("text-5xl font-bold flex flex-col ")}>
            <span>
              <span className="text-primary">Dani</span>, A Passionate
            </span>
            <span className="bg-white mx-auto md:mr-auto md:ml-0 text-primary p-2 px-4 m-1 mr-auto">
              Thumbnail
            </span>
            <span>Designer</span>
          </h1>
          <span className="body mx-auto md:mr-auto md:ml-0">
            Worked with +20 clients
          </span>
        </div>
        <Image
          alt="Thumbnails"
          src={"/hero.png"}
          width={1920}
          height={1105}
          className="w-[80%] md:w-[55%] h-auto my-auto mx-auto glow"
        />
      </section>
      <section className="wrapper py-12 flex flex-col gap-2" id="works">
        <h1 className={"h2 text-center"}>
          Past <>Works</>
        </h1>
        <span className="body mx-auto text-center mb-8">
          Different thumbnails I created for clients
        </span>
        <TSwipe />
        <div>
          <h2 className="body tag text-center mx-auto my-8">All thumbnails</h2>
          <div className="grid grid-cols-1 w-fit mx-auto sm:grid-cols-2 gap-4 lg:gap-6">
            {images.map((item) => (
              <div key={item}>
                <Image
                  alt="Thumbnail"
                  src={item}
                  width={1280}
                  height={720}
                  className="imageclass"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="body tag text-center mx-auto my-8">All Designs</h2>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <div className="flex flex-col gap-4 lg:gap-6">
              {designs1.map((item) => (
                <div key={item}>
                  <Image
                    alt="Designs"
                    src={item}
                    width={1280}
                    height={720}
                    className="imageclass"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 lg:gap-6">
              {designs2.map((item) => (
                <div key={item}>
                  <Image
                    alt="Designs"
                    src={item}
                    width={1280}
                    height={720}
                    className="imageclass"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper py-8 flex flex-col gap-2" id="contact">
        <h2 className="h2 text-center">Contact Me</h2>
        <p className="body text-center mx-auto mb-4">
          Let me know if you have project in mind
        </p>
        <div className="flex gap-8 items-center mx-auto">
          {socialLinks.map((item) => (
            <div
              key={item.name}
              className="text-gray-100/90 text-4xl hover:scale-105 transition flex space-x-2 items-center"
            >
              {item.icon}
              <span className=" text-lg">{item.link}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
