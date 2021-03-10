import { ExperienceBar } from "../components/ExperienceBar";
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ExperienceBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
