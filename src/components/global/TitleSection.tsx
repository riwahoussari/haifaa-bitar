import Image from "next/image";
import DecorativeCorner from "../../assets/decorative-corner.svg";


export default function TitleSection({children}: {children: string}) {
    return (
      <section className="my-container mt-[40px] relative space-y-6  xl:py-20 lg:py-18 py-14">
        <h2 className="font-heading 2xl:text-[110px] xl:text-[100px] lg:text-[80px] text-[max(52px,8vw)] text-center">
          {children}
        </h2>
  
        {/* decorative corners */}
        <Image
          src={DecorativeCorner}
          alt=""
          aria-hidden
          className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] top-0 left-0"
        />
        <Image
          src={DecorativeCorner}
          alt=""
          aria-hidden
          className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] bottom-0 right-0 rotate-180"
        />
      </section>
    );
  }
  