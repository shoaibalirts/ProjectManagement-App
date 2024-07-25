import Button from "./Button";
export default function ProjectSideBar({ onStartAddProject, projects }) {
  // The purpose of ProjectSideBar component:
  //       1) to add prjects and list them in the side bar
  //       2) to switch the project from one another
  const asideClasses =
    "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl";
  const h2Classes = "mb-8 font-bold uppercase md:text-xl text-stone-200";
  console.log(projects);
  return (
    <aside className={asideClasses}>
      <h2 className={h2Classes}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover: bh-stone-800">
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
