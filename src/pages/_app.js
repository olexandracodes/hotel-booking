import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import "../styles/globals.css";
import "../i18n";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default appWithTranslation(MyApp);
