import { findCountryByCode } from "@/utils/countries";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode);

  // Handle case where country is not found
  if (!validCountry) {
    return <span>Country not found</span>; // or any fallback UI you prefer
  }

  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : validCountry.name;

  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      {validCountry.flag} {countryName}
    </span>
  );
}

export default CountryFlagAndName;
