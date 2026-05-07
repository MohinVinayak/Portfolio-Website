export function SectionBlend() {
  return (
    <div className="relative h-32 -mt-24 z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #050505 60%, #050505 100%)",
        }}
      />
    </div>
  )
}
