"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

const techIcons = [
  { label: "React", color: "#7e4a3d", position: [2.2, 0.5, 0] as const, size: 0.3, alpha: 0.9 },
  { label: "Node", color: "#8c5f4d", position: [-1.8, 1.2, 1.2] as const, size: 0.25, alpha: 0.8 },
  { label: "AI", color: "#6b3b2e", position: [0.5, 2.0, -1.0] as const, size: 0.28, alpha: 0.85 },
  { label: "JS", color: "#9a6f5c", position: [-1.5, -1.0, 1.8] as const, size: 0.3, alpha: 0.75 },
  { label: "TS", color: "#5a3025", position: [2.0, -1.5, -0.5] as const, size: 0.28, alpha: 0.8 },
  { label: "Python", color: "#7e4a3d", position: [0.8, -1.8, -1.5] as const, size: 0.25, alpha: 0.7 },
  { label: "Java", color: "#8c5f4d", position: [-2.0, 0, -1.5] as const, size: 0.26, alpha: 0.75 },
  { label: "SQL", color: "#6b3b2e", position: [1.0, 1.5, 1.8] as const, size: 0.22, alpha: 0.7 },
]

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.15
    meshRef.current.rotation.x = Math.sin(Date.now() * 0.0001) * 0.1
    if (glowRef.current) {
      glowRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#7e4a3d"
          wireframe
          transparent
          opacity={0.3}
          emissive="#7e4a3d"
          emissiveIntensity={0.05}
        />
      </mesh>
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[1.82, 1]} />
        <meshBasicMaterial color="#7e4a3d" wireframe transparent opacity={0.08} />
      </mesh>

      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[2.05, 2.15, 64]} />
        <meshBasicMaterial color="#7e4a3d" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <ringGeometry args={[2.3, 2.38, 64]} />
        <meshBasicMaterial color="#7e4a3d" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function FloatingLabel({ label, color, position, size, alpha }: { label: string; color: string; position: readonly [number, number, number]; size: number; alpha: number }) {
  const ref = useRef<THREE.Mesh>(null);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} transparent opacity={alpha} emissive={color} emissiveIntensity={0.2} />
      </mesh>
    </Float>
  )
}

function GlobeContent() {
  return (
    <group>
      <GlobeMesh />
      {techIcons.map((icon) => (
        <FloatingLabel key={icon.label} {...icon} />
      ))}
    </group>
  )
}

export function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#7e4a3d" />
      <GlobeContent />
    </Canvas>
  )
}
