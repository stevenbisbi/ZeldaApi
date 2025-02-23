import React from "react";
import { ZeldaList } from "../components/ZeldaList";

export function Home() {
  return (
    <div>
      <div className="">
        <h1 className="text-center danger my-4">
          The Legend Of Zelda <br /> Breath Of The Wild
        </h1>
        <div className="container">
          <video
            src="https://www.zelda.com/breath-of-the-wild/assets/media/header/Night-1.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <video
            src="https://www.zelda.com/breath-of-the-wild/assets/media/header/Main-Day.mp4"
            type="video/mp4"
            muted
            playsInline
          ></video>
        </div>
      </div>
      <main className="container">
        <div className="d-flex collapse">
          <div className="col">
            <ZeldaList />
          </div>
        </div>
      </main>
    </div>
  );
}
