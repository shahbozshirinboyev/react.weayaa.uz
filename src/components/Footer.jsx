import { FooterInfo } from "../data/data";

function Footer() {
  return (
    <section className="bg-mainColor">
      <div className="container px-4 py-8 text-white text-[8px] lg:text-[14px]">
        <img
          src={FooterInfo[0].logoWhite}
          alt="logo"
          className="pb-4 w-[150px]"
        />

        <div className="pb-1">
          <span className="opacity-80">Republic of KOREA: </span>
          <span>{FooterInfo[0].koreanCompanyName}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">CEO: </span>
          <span>{FooterInfo[0].koreanCompanyCEO}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">Registration Number: </span>
          <span>{FooterInfo[0].koreanCompanyRegistrationNumber}</span>
        </div>

        <div className="pb-1">
          <span className="opacity-80">Uzbekistan: </span>
          <span>{FooterInfo[0].uzbCompanyName}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">CEO: </span>
          <span>{FooterInfo[0].uzbCompanyCEO}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">Registration Number: </span>
          <span>{FooterInfo[0].uzbCompanyRegistrationNumber}</span>
        </div>

        <div>
          <span className="opacity-80">Copyright&#174; </span>
          <span>{FooterInfo[0].copyright}</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;