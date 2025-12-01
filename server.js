async function getCountry() {
  console.log("fetching Country Data");
  const data = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region"
  );
  const data1 = await data.json();

  const input = process.argv[2];
  if (input) {
    const Country = data1.filter(
      (c) => c.region.toLowerCase() === input.toLocaleLowerCase()
    );
    Country.forEach((country) => {
      console.log(country.name.common);
      console.log(country.capital);
      console.log(country.region);
    });
  } else {
    console.log("Please provide a region name as an argument.");
  }
  
}
getCountry();
