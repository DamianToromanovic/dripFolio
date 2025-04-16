export default function CreapyMe() {
  return (
    <div className="relative w-64 h-64 pointer-events-none">
      <img
        src="/assets/noEyes.png"
        alt="Creepy Me"
        className="w-full h-full object-cover rounded-xl shadow-xl"
      />

      <div
        className="absolute w-[20px] h-[20px] overflow-hidden rounded-full flex items-center justify-center"
        style={{ top: "40%", left: "34.5%" }}
      >
        <div
          id="left-eye"
          className="w-[18px] h-[18px] rounded-full bg-[rgba(80,120,140,0.4)] flex items-center justify-center transition-transform duration-75"
        >
          <div className="w-[8px] h-[8px] bg-black rounded-full" />
        </div>
      </div>

      <div
        className="absolute w-[20px] h-[20px] overflow-hidden rounded-full flex items-center justify-center"
        style={{ top: "40%", left: "57.4%" }}
      >
        <div
          id="right-eye"
          className="w-[18px] h-[18px] rounded-full bg-[rgba(80,120,140,0.4)] flex items-center justify-center transition-transform duration-75"
        >
          <div className="w-[8px] h-[8px] bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}
