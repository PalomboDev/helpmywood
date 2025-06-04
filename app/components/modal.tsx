import type { ReactElement, MouseEvent } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[];
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-black text-white rounded-md p-4 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          X
        </button>
        {children}
      </div>
    </div>
  );
}