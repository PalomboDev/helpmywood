
// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export function loader({ context }: Route.LoaderArgs) {
//   return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
// }

// export default function Home({ loaderData }: Route.ComponentProps) {
//   return <Welcome message={loaderData.message} />;
// }

import { useState } from "react";
import type { Route } from "./+types/home";
import TapeMeasureCheatSheetModal from "~/modals/tape-measure-cheat-sheet";
import PilotHoleCheatSheetModal from "~/modals/pilot-hole-cheat-sheet";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "HelpMyWood" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const routes = [
  {
    label: "1/16th Tape Measure Cheat Sheet",
    renderModal: (isOpen: boolean, onClose: () => void) => <TapeMeasureCheatSheetModal isOpen={isOpen} onClose={onClose} />,
  },
  {
    label: "Pilot Hole Cheat Sheet",
    renderModal: (isOpen: boolean, onClose: () => void) => <PilotHoleCheatSheetModal isOpen={isOpen} onClose={onClose} />,
  },
];

export default function Home() {
  const [currentOpenModalLabel, setCurrentOpenModalLabel] = useState<string | null>(null);
  const currentOpenModal = routes.find(({ label }) => label === currentOpenModalLabel);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {routes.map(({ label }) => (
        <div key={label} className="bg-black/40 text-white rounded-md p-4" onClick={() => setCurrentOpenModalLabel(label)}>
          {label}
        </div>
      ))}
      {currentOpenModal && currentOpenModal.renderModal(true, () => setCurrentOpenModalLabel(null))}
    </div>
  );
}
