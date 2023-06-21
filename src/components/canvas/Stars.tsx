import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';

const Stars: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((_state, delta) => {
    if (ref) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={new Float32Array(sphere)} stride={3} frustumCulled>
        <PointMaterial transparent color='#f272c8' size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
