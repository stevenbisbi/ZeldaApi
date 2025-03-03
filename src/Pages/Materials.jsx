import { ZeldaList } from "../components/ZeldaList";
import { MaterialsApi } from "../Api/materials.api";

export function Materials() {
  const api = MaterialsApi();
  return (
    <div>
      <h1 className="text-center">Equipment</h1>
      <ZeldaList api={api} />
    </div>
  );
}
