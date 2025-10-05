// components/Modal.tsx
import Image from "next/image";
import React, { useEffect, useRef, useState, useId } from "react";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
  alt: string;
}

const ANIMATION_DURATION = 300;

const Modal: React.FC<ModalProps> = ({ setOpenModal, src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    previousActiveElement.current =
      document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => setIsVisible(true), 20);

    setTimeout(() => closeBtnRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }
      if (e.key === "Tab") {
        const modal = modalRef.current;
        if (!modal) return;
        const focusable = modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previousActiveElement.current?.focus?.();
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
    // We intentionally run this once on mount (Modal is mounted only when opening)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    setIsVisible(false);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    closeTimeoutRef.current = setTimeout(() => {
      setOpenModal(false);
    }, ANIMATION_DURATION + 50);
  }

  return (
    <div
      className={`fixed inset-0 z-[50000] flex items-center justify-center bg-black/80 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={() => handleClose()}
    >
      <button
        ref={closeBtnRef}
        type="button"
        aria-label="Close modal"
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-Green-75 text-2xl md:text-3xl lg:text-4xl font-bold border-2 border-White rounded-full px-3 py-1 md:px-4 md:py-2 flex items-center justify-center cursor-pointer
                     hover:bg-Green-75 hover:text-white transition-colors duration-300"
      >
        X
      </button>
      <div
        ref={modalRef}
        className={`w-[90vw] h-[60vh] md:w-[80vw] md:h-[60vh] lg:w-[70vw] lg:h-[70vh] xl:w-[60vw] xl:h-[70vh]
                    rounded-lg overflow-hidden shadow-xl transform transition-all duration-300
                    ${
                      isVisible
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-95 opacity-0 translate-y-4"
                    }`}
        onClick={(e) => e.stopPropagation()}
      >
        <figure className="relative w-full h-full flex items-center justify-center">
          <Image src={src} alt={alt} fill className="object-contain" priority />
          <figcaption id={titleId} className="sr-only">
            {alt}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Modal;
