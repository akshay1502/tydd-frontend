type PillProps = {
  text: string
  isActive: boolean
  setActivePill: React.Dispatch<React.SetStateAction<string>>
}

export default function Pill({ text, isActive, setActivePill }: PillProps) {
  return (
    <button
      className={`b2reg font-semibold py-2 px-4 rounded-full ${isActive ? 'bg-blue text-white' : 'bg-none text-subTitle border border-borderStroke'}`}
      onClick={() => setActivePill(text)}
    >
      {text}
    </button>
  )
}

export function HighlightPill({ text }: { text: string }) {
  return (
    <button className="font-bold lg:text-2xl text-base text-white bg-orange  rounded-full py-2 px-4 whitespace-nowrap">
      {text}
    </button>
  )
}
