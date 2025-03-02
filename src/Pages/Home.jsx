import React from "react";
import { ZeldaList } from "../components/ZeldaList";

export function Home() {
  return (
    <div className="container-fluid">
      <div className="">
        <h1 className="text-center text-danger my-4">
          The Legend Of Zelda <br /> Breath Of The Wild
        </h1>
        <div className="">
          {/*  <video
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
          ></video> */}
        </div>
      </div>
      <main>
        <ZeldaList />
      </main>
    </div>
  );
}
