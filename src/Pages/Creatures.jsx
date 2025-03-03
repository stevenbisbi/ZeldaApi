import { ZeldaList } from "../components/ZeldaList";
import { CreaturesApi } from "../Api/creatures.api";

export function Creatures() {
  const api = CreaturesApi();
  return (
    <div>
      <h1 className="text-center">Creatures</h1>
      <ZeldaList api={api} />
    </div>
  );
}
