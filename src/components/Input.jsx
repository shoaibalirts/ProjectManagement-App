import { forwardRef } from "react";
function Input({ label, textarea, ...props }, ref) {
  const pClasses = "flex flex-col gap-1 my-4";
  const labelClasses = "text-sm font-bold uppercase text-stone-500";
  const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className={pClasses}>
      <label className={labelClasses}>{label}</label>
      {textarea ? (
        <textarea ref={ref} className={inputClasses} {...props} />
      ) : (
        <input ref={ref} className={inputClasses} {...props} />
      )}
    </p>
  );
}
export default forwardRef(Input);
