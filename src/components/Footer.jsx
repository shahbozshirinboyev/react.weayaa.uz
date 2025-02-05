import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function Footer() {
  const { t } = useTranslation();

  return (
    <section className="bg-mainColor">
      <div className="container py-8 text-white text-[8px] lg:text-[14px]">
        <img
          src={t('footer.0.logoWhite')}
          alt="logo"
          className="pb-4 w-[120px] lg:w-[150px]"
        />

        <div className="pb-1">
          <span className="opacity-80">Republic of KOREA: </span>
          <span>{t('footer.0.koreanCompanyName')}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">CEO: </span>
          <span>{t('footer.0.koreanCompanyCEO')}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">Registration Number: </span>
          <span>{t('footer.0.koreanCompanyRegistrationNumber')}</span>
        </div>

        <div className="pb-1">
          <span className="opacity-80">Uzbekistan: </span>
          <span>{t('footer.0.uzbCompanyName')}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">CEO: </span>
          <span>{t('footer.0.uzbCompanyCEO')}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="opacity-80">Registration Number: </span>
          <span>{t('footer.0.uzbCompanyRegistrationNumber')}</span>
        </div>

        <div>
          <span className="opacity-80">Copyright&#174; </span>
          <span>{t('footer.0.copyright')}</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
