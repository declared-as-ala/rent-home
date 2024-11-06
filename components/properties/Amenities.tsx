import { Amenity } from "@/utils/amenities";
import { LuFolderCheck } from "react-icons/lu";
import Title from "./Title";
function Amenities({ amenities }: { amenities: string }) {
  // Split the string by commas and map it to create a list of objects
  const amenitiesList = amenities.split(",").map((amenity) => ({
    name: amenity.trim(), // Trim any extra spaces
    selected: true, // Default as selected, or set your own logic
  }));

  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);
  if (noAmenities) return null;

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) return null;
          return (
            <div key={amenity.name} className="flex items-center gap-x-4 mb-2">
              <LuFolderCheck className="h-6 w-6 text-primary" />
              <span className="font-light text-sm capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Amenities;
