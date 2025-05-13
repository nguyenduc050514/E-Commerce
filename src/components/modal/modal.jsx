import {
   useState,
   useEffect,
   useRef,
   forwardRef,
   useImperativeHandle,
} from "react";
import "./modal.css";
const activeModals = [];
const PopzyModal = forwardRef(
   (
      {
         content,
         destroyOnClose = true,
         enableScrollLock = true,
         cssClass = [],
         closeMethods = ["button", "overlay", "escape"],
         onOpen,
         onClose,
         children,
      },
      ref
   ) => {
      const [isOpen, setIsOpen] = useState(false);
      const backdropRef = useRef(null);
      const footerButtonsRef = useRef([]);
      const footerContentRef = useRef(null);

      const allowButtonClose = closeMethods.includes("button");
      const allowBackdropClose = closeMethods.includes("overlay");
      const allowEscapeClose = closeMethods.includes("escape");
 
      const getScrollbarWidth = () => {
         const div = document.createElement("div");
         Object.assign(div.style, {
            overflow: "scroll",
            position: "absolute",
            top: "-9999px",
         });
         document.body.appendChild(div);
         const scrollWidth = div.offsetWidth - div.clientWidth;
         document.body.removeChild(div);
         return scrollWidth;
      };

      const hasScrollbar = (target) => {
         if ([document.documentElement, document.body].includes(target)) {
            return (
               document.documentElement.scrollHeight >
                  document.documentElement.clientHeight ||
               document.body.scrollHeight > document.body.clientHeight
            );
         }
         return target.scrollHeight > target.clientHeight;
      };

      const handleEscapeKey = (e) => {
         const lastModal = activeModals[activeModals.length - 1];
         if (
            e.key === "Escape" &&
            lastModal === backdropRef.current &&
            allowEscapeClose
         ) {
            close();
         }
      };

      const open = () => {
         setIsOpen(true);
         activeModals.push(backdropRef.current);

         if (enableScrollLock) {
            const target = document.documentElement;
            if (hasScrollbar(target)) {
               target.classList.add("popzy--no-scroll");
               const targetPadRight = parseInt(
                  getComputedStyle(target).paddingRight
               );
               target.style.paddingRight = `${
                  targetPadRight + getScrollbarWidth()
               }px`;
            }
         }

         if (onOpen) {
            setTimeout(onOpen, 300); // Approximate transition time
         }
      };

      const close = () => {
         setIsOpen(false);
         activeModals.pop();

         if (enableScrollLock && !activeModals.length) {
            const target = document.documentElement;
            if (hasScrollbar(target)) {
               target.classList.remove("popzy--no-scroll");
               target.style.paddingRight = "";
            }
         }

         if (onClose) {
            setTimeout(onClose, 300); // Approximate transition time
         }
      };

      const setFooterContent = (html) => {
         if (footerContentRef.current) {
            footerContentRef.current.innerHTML = html;
         }
      };

      const addFooterButton = (title, cssClass, callback) => {
         const buttonInfo = { title, cssClass, callback };
         footerButtonsRef.current = [...footerButtonsRef.current, buttonInfo];
         // Force re-render
         setIsOpen(isOpen);
      };

      // Expose methods to parent components
      useImperativeHandle(ref, () => ({
         open,
         close,
         setFooterContent,
         addFooterButton,
      }));

      useEffect(() => {
         if (isOpen && allowEscapeClose) {
            document.addEventListener("keydown", handleEscapeKey);
            return () =>
               document.removeEventListener("keydown", handleEscapeKey);
         }
      }, [isOpen, allowEscapeClose]);

      if (!isOpen && destroyOnClose) {
         return null;
      }

      return (
         <div
            ref={backdropRef}
            className={`popzy__backdrop ${isOpen ? "popzy--show" : ""}`}
            onClick={
               allowBackdropClose
                  ? (e) => {
                       if (e.target === backdropRef.current) close();
                    }
                  : undefined
            }
         >
            <div className={`popzy__container ${cssClass.join(" ")}`}>
               {allowButtonClose && (
                  <button
                     className="popzy__close"
                     onClick={close}
                     dangerouslySetInnerHTML={{ __html: "&times;" }}
                  />
               )}

               <div className="popzy__content">
                  {content ? (
                     <div dangerouslySetInnerHTML={{ __html: content }} />
                  ) : (
                     children
                  )}
               </div>
            </div>
         </div>
      );
   }
);

export default PopzyModal;
