import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const divClasses = "w-[35rem] mt-16";
  const menuClasses = "flex items-center justify-end gap-4 my-4";
  const cancelBtnClasses = "text-stone-800 hover:text-stone-950";
  const saveBtnClasses =
    "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";

  function handleSave() {
    const userInputData = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    if (
      userInputData.title.trim() === "" ||
      userInputData.description.trim() === "" ||
      userInputData.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd(userInputData);
    // we have to send userData from NewProject to App component because App is the common place
    // where we have access to ProjectSideBar
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops...looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className={divClasses}>
        <menu className={menuClasses}>
          <li>
            <button className={cancelBtnClasses} onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button className={saveBtnClasses} onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
