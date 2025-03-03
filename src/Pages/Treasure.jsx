import { ZeldaList } from "../components/ZeldaList";
import { TreasureApi } from "../Api/treasure.api";

export function Treasure() {
  const api = TreasureApi();
  return (
    <div>
      <h1 className="text-center">Equipment</h1>
      <ZeldaList api={api} />
    </div>
  );
}
