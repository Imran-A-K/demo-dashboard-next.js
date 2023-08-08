function DoctorCard({ data }) {
  const { name, type, experience, location } = data;
  return (
    <div class="mx-auto p-9 bg-white max-w-xs my-3 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
      <div class="flex flex-col items-start justify-start gap-3">
        <h2 class="text-xl font-semibold">{name}</h2>
        <p class="text-base font-semibold">
          <span className="font-semibold">Type :</span>
          {type}
        </p>
        <p class="text-base font-semibold">
          <span className="font-semibold">Experience :</span>
          {experience}
        </p>
        <p class="text-base font-semibold">
          <span className="font-semibold">Location :</span>
          {location}
        </p>
      </div>
    </div>
  );
}

export default DoctorCard;
