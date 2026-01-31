"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const icons = [
  "AWS.png", "C# (CSharp).png", "Cloudflare.png", "CSS3.png", "Dart.png",
  "DBeaver.png", "Flutter.png", "GitHub.png", "Google Cloud.png", "HTML5.png",
  "Java.png", "JavaScript.png", "Keras.png", "MongoDB.png", "Mongoose.js.png",
  "MySQL.png", "NET core.png", "Next.js.png", "Node.js.png", "NPM.png",
  "PostgresSQL.png", "PuTTY.png", "Python.png", "R.png", "React.png",
  "Tailwind CSS.png", "TypeScript.png"
];

interface FloatingIconProps {
  name: string;
  containerSize: { width: number; height: number };
}

const Icon = ({ name, containerSize }: FloatingIconProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  // Random size between 50px and 90px
  const size = useRef(Math.floor(Math.random() * 40) + 50).current; 
  const position = useRef({ x: Math.random() * (containerSize.width - size), y: Math.random() * (containerSize.height - size) });
  const velocity = useRef({ x: (Math.random() - 0.5) * 1.5, y: (Math.random() - 0.5) * 1.5 });
  const animationRef = useRef<number>(0);

  // Drag state
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (divRef.current && divRef.current.parentElement) {
      const rect = divRef.current.getBoundingClientRect();
      dragOffset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    }
    
    // Attach window listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !divRef.current || !divRef.current.parentElement) return;

    const parentRect = divRef.current.parentElement.getBoundingClientRect();
    
    // Update position
    let newX = e.clientX - parentRect.left - dragOffset.current.x;
    let newY = e.clientY - parentRect.top - dragOffset.current.y;

    // Constrain
    newX = Math.max(0, Math.min(newX, containerSize.width - size));
    newY = Math.max(0, Math.min(newY, containerSize.height - size));

    position.current = { x: newX, y: newY };
    
    // Calculate throw velocity
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    
    // Update velocity for throw
    velocity.current = { x: dx, y: dy };
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    
    // Force immediate update to prevent lag
    divRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Cleanup listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const update = () => {
        if (!divRef.current) return;

        if (!isDragging.current) {
            let { x, y } = position.current;
            let { x: vx, y: vy } = velocity.current;

            x += vx;
            y += vy;

            // Bounce
            if (x <= 0 || x >= containerSize.width - size) {
                vx = -vx;
                x = Math.max(0, Math.min(x, containerSize.width - size));
            }
            if (y <= 0 || y >= containerSize.height - size) {
                vy = -vy;
                y = Math.max(0, Math.min(y, containerSize.height - size));
            }
            
            // Friction/Recovery to normal speed
            const speed = Math.sqrt(vx * vx + vy * vy);
            const maxNormalSpeed = 2; // Normal floating speed
            if (speed > maxNormalSpeed) {
                vx *= 0.95; // Friction
                vy *= 0.95;
            } else if (speed < 0.5 && speed > 0) {
                 // Prevent it from stopping completely
                 vx *= 1.05;
                 vy *= 1.05;
            }

            position.current = { x, y };
            velocity.current = { x: vx, y: vy };

            divRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
        
        animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [containerSize, size]);

  return (
    <div
      ref={divRef}
      onMouseDown={handleMouseDown}
      className="absolute flex items-center justify-center will-change-transform cursor-grab active:cursor-grabbing select-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${position.current.x}px, ${position.current.y}px)`,
      }}
    >
      <div className="relativePath w-full h-full animate-spin-slow pointer-events-none">
        <Image
          src={`/assets/images/tech/${name}`}
          alt={name}
          fill
          className="object-contain"
          onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default function TechFloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
        setDimensions({
            width: containerRef.current.clientWidth,
            height: containerRef.current.clientHeight,
        });
    }

    const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
            setDimensions({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
            });
        }
    });

    if (containerRef.current) {
        observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-white/[0.02] rounded-2xl border border-white/10 shadow-2xl select-none">
      {dimensions.width > 0 && dimensions.height > 0 && icons.map((icon, index) => (
        <Icon key={index} name={icon} containerSize={dimensions} />
      ))}
    </div>
  );
}
