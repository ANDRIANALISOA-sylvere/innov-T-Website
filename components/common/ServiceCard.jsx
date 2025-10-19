export default function ServiceCard({ icon, title, description }) {
  return (
    <div 
        className="max-w-full p-8 rounded-xl bg-gradient-to-b from-blue-800 to-green-600 
        text-center shadow-lg hover:scale-101 hover:shadow-2xl transition-all">
      <div className="flex justify-center mb-10 text-amber-400">
        {icon}
      </div>
      <h4 className="text-lg font-semibold mb-4 text-white">{title}</h4>
      <p className="text-white break-words overflow-hidden text-ellipsis whitespace-pre-line"> { description } </p>
    </div>
  );
}