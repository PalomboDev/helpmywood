import Modal, { type ModalProps } from "~/components/modal";

interface PilotHoleCheatSheetModal extends Omit<ModalProps, "children"> { }

const pilotHoleChart = [
  {
    screwGauge: "#2",
    pilotHoleSoftwood: "1/16\"",
    pilotHoleHardwood: "5/64\"",
  },
  {
    screwGauge: "#3",
    pilotHoleSoftwood: "5/64\"",
    pilotHoleHardwood: "3/32\"",
  },
  {
    screwGauge: "#4",
    pilotHoleSoftwood: "3/32\"",
    pilotHoleHardwood: "7/64\"",
  },
  {
    screwGauge: "#5",
    pilotHoleSoftwood: "7/64\"",
    pilotHoleHardwood: "1/8\"",
  },
  {
    screwGauge: "#6",
    pilotHoleSoftwood: "7/64\"",
    pilotHoleHardwood: "9/64\"",
  },
  {
    screwGauge: "#7",
    pilotHoleSoftwood: "1/8\"",
    pilotHoleHardwood: "5/32\"",
  },
  {
    screwGauge: "#8",
    pilotHoleSoftwood: "9/64\"",
    pilotHoleHardwood: "5/32\"",
  },
  {
    screwGauge: "#9",
    pilotHoleSoftwood: "5/32\"",
    pilotHoleHardwood: "11/64\"",
  },
  {
    screwGauge: "#10",
    pilotHoleSoftwood: "5/32\"",
    pilotHoleHardwood: "3/16\"",
  },
  {
    screwGauge: "#12",
    pilotHoleSoftwood: "3/16\"",
    pilotHoleHardwood: "7/32\"",
  },
  {
    screwGauge: "#14",
    pilotHoleSoftwood: "7/32\"",
    pilotHoleHardwood: "1/4\"",
  },
];

export default function TapeMeasureCheatSheetModal({ ...modalProps }: PilotHoleCheatSheetModal) {
  return (
    <Modal {...modalProps}>
      <h2 className="mb-4">Pilot Hole Cheat Sheet</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Screw Gauge</th>
            <th>Softwood</th>
            <th>Hardwood</th>
          </tr>
        </thead>
        <tbody>
          {pilotHoleChart.map(({ screwGauge, pilotHoleSoftwood, pilotHoleHardwood }) => (
            <tr key={screwGauge}>
              <td>{screwGauge}</td>
              <td>{pilotHoleSoftwood}</td>
              <td>{pilotHoleHardwood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  )
}