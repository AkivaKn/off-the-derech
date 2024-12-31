import { Atom } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="flex size-full flex-1 items-center justify-center bg-backgroundColor">
      <Atom
        color={["#3D52A0", "#7091E6", "#8697C4"]}
        size="large"
        speedPlus={-4}
        text="loading..."
      />
    </div>
  );
}
