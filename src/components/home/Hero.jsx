import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;

    const loadVanta = async () => {
      const VANTA = await import("vanta/dist/vanta.net.min");

      effect = VANTA.default.default({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,

      color: 0xe3e3e3,
  backgroundColor:0xa0095,

        points: 4.0,
        maxDistance: 25.0,
        spacing: 18.0,
      });
    };

    loadVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="min-h-screen flex items-center py-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left Content */}
        <div>
          <p className="uppercase tracking-[0.25em] text-blue-300 text-sm font-semibold mb-5">
            Software • Embedded • IoT • Infrastructure
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Engineering Modern Technology Solutions.
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            OTC Engineering delivers scalable software systems,
            embedded solutions, IoT platforms, and enterprise infrastructure.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white px-7 py-3 rounded-2xl">
              Explore Services
            </button>

            
          </div>
        </div>

        {/* Right Cards */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-10">
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-xl mb-2">
                Software
              </h3>

              <p className="text-sm text-slate-300">
                Enterprise Applications
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-xl mb-2">
                Embedded
              </h3>

              <p className="text-sm text-slate-300">
                Linux & Firmware
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-xl mb-2">
                IoT
              </h3>

              <p className="text-sm text-slate-300">
                Smart Connected Systems
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-blue-300 font-semibold text-xl mb-2">
                Cloud
              </h3>

              <p className="text-sm text-slate-300">
                Infrastructure & DevOps
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}