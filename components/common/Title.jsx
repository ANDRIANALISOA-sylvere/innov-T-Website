export default function Title({...props}) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
      {props.title}
    </h2>
  );
}
