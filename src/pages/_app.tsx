import { ExperienceBar } from "../components/ExperienceBar";
import '../styles/global.css';
import {QuestionsProvider} from '../contexts/QuestionContext';

function MyApp({ Component, pageProps }) {
  return (
    <QuestionsProvider>
      <ExperienceBar />
      <Component {...pageProps} />
    </QuestionsProvider>
  );
}

export default MyApp
