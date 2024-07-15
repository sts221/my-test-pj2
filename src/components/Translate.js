import { useTranslation } from "react-i18next";

const Translate = () => {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <h1>{t("hello")}</h1>
      <button onClick={() => handleChangeLanguage("en")}>EN</button>
      <button onClick={() => handleChangeLanguage("it")}>IT</button>
    </>
  );
};

export default Translate;
