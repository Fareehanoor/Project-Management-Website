import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from './Button.jsx';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-mds">
      {children}
      <form method="dialog" className="mt-4 text-right ">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

// import { forwardRef, useImperativeHandle, useRef } from "react";
// // import { createPortal } from "react-dom";

// const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
//   const dialogRef = useRef();
//   useImperativeHandle(ref, () => ({
//     open() {
//       dialogRef.current.showModal();
//     },
//   }));

//   return (
//     (
//       <dialog ref={dialogRef}>
//         {children}

//         <form method="dialog">
//           <button>{buttonCaption}</button>
//         </form>
//       </dialog>
//     ),
//     document.getElementById("modal-root")
//   );
// });
// export default Modal;
