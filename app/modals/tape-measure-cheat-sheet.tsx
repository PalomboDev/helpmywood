import Modal, { type ModalProps } from "~/components/modal";

interface TapeMeasureCheatSheetModal extends Omit<ModalProps, "children"> { }

export default function TapeMeasureCheatSheetModal({ ...modalProps }: TapeMeasureCheatSheetModal) {
  return (
    <Modal {...modalProps}>
      <h2 className="mb-4">1/16th Tape Measure Cheat Sheet</h2>
      <img src="/tape-measure-cheat-sheet.jpg" alt="1/16th Tape Measure Cheat Sheet" />
    </Modal>
  )
}