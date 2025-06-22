export default function Loading() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-white flex items-center justify-center z-[110]">
      <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-black animate-spin"></div>
    </div>
  );
}
