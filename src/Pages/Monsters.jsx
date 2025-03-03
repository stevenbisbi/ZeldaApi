import { ZeldaList } from "../components/ZeldaList";
import { MonstersApi } from "../Api/monsters.api";

export function Monsters() {
  const api = MonstersApi();
  return (
    <div>
      <h1 className="text-center">Equipment</h1>
      <ZeldaList api={api} />
    </div>
  );
}
