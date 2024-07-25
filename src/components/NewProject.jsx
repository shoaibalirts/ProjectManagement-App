import Input from "./Input.jsx";
export default function NewProject() {
  const divClasses = "w-[35rem] mt-16";
  const menuClasses = "flex items-center justify-end gap-4 my-4";
  const cancelBtnClasses = "text-stone-800 hover:text-stone-950";
  const saveBtnClasses =
    "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";

  return (
    <div className={divClasses}>
      <menu className={menuClasses}>
        <li>
          <button className={cancelBtnClasses}>Cancel</button>
        </li>
        <li>
          <button className={saveBtnClasses}>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
