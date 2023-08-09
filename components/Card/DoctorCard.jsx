function DoctorCard({ data }) {
  const { name, type, experience, location } = data;
  return (
    <div className="mx-auto p-9 bg-white max-w-xs my-3 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-base font-semibold">
          <span className="font-semibold">Type :</span>
          {type}
        </p>
        <p className="text-base font-semibold">
          <span className="font-semibold">Experience :</span>
          {experience}
        </p>
        <p className="text-base font-semibold">
          <span className="font-semibold">Location :</span>
          {location}
        </p>
      </div>
    </div>
  );
}

export default DoctorCard;
