import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { More } from "./components/More";
import { CV } from "./CV/CV";
import { Route, Routes, Link } from "react-router-dom";

const {
  about,
  education,
  experience,
  courses,
  projects,
  languages,
  abilities,
} = CV;

function App() {
  return (
    <div className='App'>
      <About about={about} />
      <Education education={education} courses={courses} projects={projects} />
      <Experience experience={experience} />
      <More languages={languages} abilities={abilities} />
    </div>
  );
}

export default App;
