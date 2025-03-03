import { ZeldaList } from "../components/ZeldaList";
import { EquipmentApi } from "../Api/equipment.api";

export function Equipment() {
  const api = EquipmentApi();

  return (
    <div>
      <h1 className="text-center">Equipment</h1>
      <ZeldaList api={api} />
    </div>
  );
}
