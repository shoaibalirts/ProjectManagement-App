import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  const divClasses = "mt-24 text-center w-2/3";
  const imgClasses = "w-16 h-16 object-contain mx-auto";
  const h2Classes = "text-xl font-bold text-stone-500 my-4";
  const pClasses = "text-stone-400 mb-4";
  return (
    <div className={divClasses}>
      <img
        src={noProjectImage}
        alt="An empty task list"
        className={imgClasses}
      />
      <h2 className={h2Classes}>No Project Selected</h2>
      <p className={pClasses}>Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
