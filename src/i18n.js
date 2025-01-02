import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "../public/locales/en/common.json";
import commonUk from "../public/locales/uk/common.json";

i18n.use(initReactI18next).init({
	resources: {
		en: { common: commonEn },
		uk: { common: commonUk },
	},
	lng:
		typeof window !== "undefined"
			? localStorage.getItem("language") || "en"
			: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
	ns: ["common"],
	defaultNS: "common",
});

export default i18n;
