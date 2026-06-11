'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Gauge, Flame, Activity, Zap } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

export default function TurbineCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rpm, setRpm] = useState<number>(3000);
  const [pressure, setPressure] = useState<number>(75); // kg/cm2
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [vibration, setVibration] = useState<number>(0);
  
  // Calculate interactive outputs based on RPM and Pressure
  const mw = Math.min(1000, Math.max(0, Math.round((rpm / 3000) * (pressure / 75) * 45 * 10) / 10));
  const hz = Math.round((rpm / 60) * 100) / 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRunning || rpm === 0) {
        setVibration(0);
        return;
      }
      const t = Date.now() / 200;
      const base = 1.2 + Math.sin(t) * 0.4;
      const penalty = rpm > 3200 ? (rpm - 3200) / 100 : 0;
      setVibration(Math.round((base + penalty) * 100) / 100);
    }, 150);
    return () => clearInterval(interval);
  }, [isRunning, rpm]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let angle = 0;
    const particles: Particle[] = [];

    // Resize canvas
    const resizeCanvas = () => {
      const parentWidth = canvas.parentElement?.clientWidth;
      const width = parentWidth && parentWidth > 0 ? parentWidth : 600;
      canvas.width = width;
      canvas.height = width < 500 ? 240 : 320;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const widthFactor = canvas.width / 600;
      const heightFactor = canvas.height / 320;
      const shaftLength = canvas.width * 0.8;
      const shaftWidth = Math.max(8, 14 * widthFactor);

      // Draw Steam Pressure Flow Visual (Backdrop gradient)
      if (isRunning && pressure > 0) {
        const steamGrad = ctx.createLinearGradient(0, cy, canvas.width, cy);
        steamGrad.addColorStop(0, `rgba(0, 180, 216, ${0.1 + (pressure / 200)})`);
        steamGrad.addColorStop(0.5, `rgba(0, 87, 184, ${0.05 + (pressure / 300)})`);
        steamGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = steamGrad;
        ctx.fillRect(0, cy - 80 * heightFactor, canvas.width, 160 * heightFactor);
      }

      // Draw Main Shaft
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.roundRect(cx - shaftLength / 2, cy - shaftWidth / 2, shaftLength, shaftWidth, 4);
      ctx.fill();

      // Draw Bearing Pedestals (Left & Right support)
      ctx.fillStyle = '#334155';
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      // Left Pedestal
      ctx.beginPath();
      ctx.roundRect(cx - shaftLength / 2.2, cy - 30 * heightFactor, 40 * widthFactor, 60 * heightFactor, 4);
      ctx.fill(); ctx.stroke();
      // Right Pedestal
      ctx.beginPath();
      ctx.roundRect(cx + shaftLength / 2.5, cy - 30 * heightFactor, 40 * widthFactor, 60 * heightFactor, 4);
      ctx.fill(); ctx.stroke();

      // Multi-stage blades drawing (HP, IP, LP stages)
      const stages = [
        { offset: -180 * widthFactor, scale: 30 * widthFactor, count: 12, label: 'HP Stage' },
        { offset: -80 * widthFactor, scale: 40 * widthFactor, count: 10, label: 'IP Stage' },
        { offset: 40 * widthFactor, scale: 55 * widthFactor, count: 8, label: 'LP Stage 1' },
        { offset: 140 * widthFactor, scale: 70 * widthFactor, count: 8, label: 'LP Stage 2' },
      ];

      stages.forEach((stage) => {
        // Stage hub
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.arc(cx + stage.offset, cy, stage.scale * 0.35, 0, Math.PI * 2);
        ctx.fill();

        // Draw blades
        for (let i = 0; i < stage.count; i++) {
          const bladeAngle = angle + (i * (Math.PI * 2 / stage.count));
          const bladeLength = stage.scale;
          const targetX = cx + stage.offset + Math.cos(bladeAngle) * bladeLength;
          const targetY = cy + Math.sin(bladeAngle) * bladeLength;

          // Draw blade line
          ctx.strokeStyle = i % 2 === 0 ? '#00B4D8' : '#64748b';
          ctx.lineWidth = Math.max(2, (4 + (stage.scale / 15)));
          ctx.beginPath();
          ctx.moveTo(cx + stage.offset, cy);
          ctx.lineTo(targetX, targetY);
          ctx.stroke();

          // Blade tip shroud
          ctx.fillStyle = '#f8fafc';
          ctx.beginPath();
          ctx.arc(targetX, targetY, Math.max(1.5, 2.5 * widthFactor), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update rotation angle based on RPM
      if (isRunning) {
        angle += (rpm / 60) * 0.003; // RPM to radians step
      }

      // Generate particles (Steam flow simulation)
      if (isRunning && pressure > 0 && Math.random() < (pressure / 100)) {
        particles.push({
          x: cx - shaftLength / 2,
          y: cy + (Math.random() - 0.5) * 60 * heightFactor,
          vx: 2 + (pressure / 25) + Math.random() * 2,
          vy: (Math.random() - 0.5) * 1.5,
          alpha: 1,
          color: Math.random() > 0.4 ? '#00B4D8' : '#FFD60A',
          size: 1.5 + Math.random() * 2,
        });
      }

      // Update & Draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        
        // Add rotor blade deflection (particles bounce slightly up/down near stages)
        stages.forEach(stage => {
          if (Math.abs(p.x - (cx + stage.offset)) < 15 * widthFactor) {
            p.vy += Math.sin(angle) * 0.5;
          }
        });

        p.alpha -= 0.008;

        if (p.x > cx + shaftLength / 2 || p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Draw casing boundaries (glowing glass-like container)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(cx - shaftLength / 2.1, cy - 85 * heightFactor, shaftLength * 0.9, 170 * heightFactor, 12);
      ctx.stroke();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [rpm, pressure, isRunning]);

  return (
    <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Canvas Display */}
        <div className="lg:col-span-8 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-4 px-2">
            <span className="text-xs text-gray-500 font-mono">Rotational Flow Simulation</span>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all duration-200 ${
                isRunning
                  ? 'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20'
                  : 'bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20'
              }`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" /> Stop Rotor
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" /> Spin Rotor
                </>
              )}
            </button>
          </div>

          <div className="w-full bg-[#070b13] rounded-2xl border border-white/5 overflow-hidden">
            <canvas ref={canvasRef} className="block w-full" />
          </div>

          {/* Mobile Telemetry Grid (Shown above sliders on mobile to prevent scrolling) */}
          <div className="grid grid-cols-3 gap-3 w-full mt-4 px-2 lg:hidden">
            {/* MW output */}
            <div className="bg-[#0e1424]/60 border border-white/10 p-3 rounded-xl flex flex-col gap-1 relative overflow-hidden">
              <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">Est. Power</span>
              <span className="text-base font-extrabold text-accent font-mono">{mw}</span>
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">MW</span>
            </div>

            {/* Grid frequency */}
            <div className="bg-[#0e1424]/60 border border-white/10 p-3 rounded-xl flex flex-col gap-1 relative overflow-hidden">
              <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">Frequency</span>
              <span className="text-base font-extrabold text-secondary font-mono">{hz}</span>
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Hz</span>
            </div>

            {/* Vibration */}
            <div className="bg-[#0e1424]/60 border border-white/10 p-3 rounded-xl flex flex-col gap-1 relative overflow-hidden">
              <div className="flex justify-between items-center w-full">
                <span className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">Vib.</span>
                <span className={`w-1.5 h-1.5 rounded-full ${vibration > 1.8 ? 'bg-red-400 animate-ping' : 'bg-green-400'}`} />
              </div>
              <span className="text-base font-extrabold text-white font-mono">{vibration}</span>
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">mm/s</span>
            </div>
          </div>

          {/* Controls Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-6 px-2">
            {/* RPM Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400 flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-secondary" />
                  Rotor Speed (RPM)
                </span>
                <span className="text-white font-bold">{rpm} RPM</span>
              </div>
              <input
                type="range"
                min="0"
                max="3600"
                step="100"
                value={rpm}
                disabled={!isRunning}
                onChange={(e) => setRpm(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-secondary disabled:opacity-40"
              />
            </div>

            {/* Pressure Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-400 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-accent" />
                  Steam Pressure (kg/cm²)
                </span>
                <span className="text-white font-bold">{pressure} kg/cm²</span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="5"
                value={pressure}
                disabled={!isRunning}
                onChange={(e) => setPressure(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-accent disabled:opacity-40"
              />
            </div>
          </div>
        </div>

        {/* Info & Stats Column */}
        <div className="lg:col-span-4 flex flex-col gap-5 h-full justify-between mt-6 lg:mt-0 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-secondary font-mono tracking-widest uppercase">Turbine Telemetry</span>
            <h4 className="text-white font-bold text-2xl">Power Output Simulator</h4>
            <p className="text-sm text-gray-500 leading-relaxed mt-1">
              Adjust the RPM speed and inlet steam pressure sliders to simulate generation capacity scaling from 1.5 MW industrial units to nuclear steam turbine configurations.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 mt-2">
            {/* MW output */}
            <div className="bg-[#0e1424]/40 border border-white/5 p-4 rounded-2xl flex flex-col gap-1 relative overflow-hidden">
              <Zap className="w-10 h-10 text-accent/10 absolute right-1.5 bottom-1.5 pointer-events-none" />
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Estimated Power</span>
              <span className="text-3xl font-black text-accent font-mono">{mw}</span>
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">MW</span>
            </div>

            {/* Grid frequency */}
            <div className="bg-[#0e1424]/40 border border-white/5 p-4 rounded-2xl flex flex-col gap-1 relative overflow-hidden">
              <Activity className="w-10 h-10 text-secondary/10 absolute right-1.5 bottom-1.5 pointer-events-none" />
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Frequency</span>
              <span className="text-3xl font-black text-secondary font-mono">{hz}</span>
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Hz</span>
            </div>

            {/* Vibration */}
            <div className="bg-[#0e1424]/40 border border-white/5 p-4 rounded-2xl flex flex-col gap-1 col-span-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Casing Vibration</span>
                <span className={`text-xs font-mono font-bold ${vibration > 1.8 ? 'text-red-400 animate-pulse' : 'text-green-400'}`}>
                  {vibration > 1.8 ? 'WARNING: HIGH' : 'NORMAL'}
                </span>
              </div>
              <span className="text-xl font-bold text-white font-mono mt-1">{vibration}</span>
              <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">mm/s</span>
              {/* Micro graph visualizer */}
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-2">
                <div
                  style={{ width: `${Math.min(100, (vibration / 3) * 100)}%` }}
                  className={`h-full transition-all duration-300 ${vibration > 1.8 ? 'bg-red-400' : 'bg-green-400'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
