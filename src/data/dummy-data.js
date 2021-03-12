import Faker from "faker";

export default function getSomeData(properties = 6, rows = 10) {
  const tableheads = [
    "First",
    "Last",
    "Phone",
    "Department",
    "Company",
    "City",
    "Occupation",
    "Zip",
    "Country",
    "State",
  ].slice(0, properties);

  const result = new Array(rows).fill(undefined).map((unneededIterator) => {
    let newObj = {};
    tableheads.forEach((heading) => {
      switch (heading) {
        case "First":
            newObj[heading] = Faker.name.firstName();
          break;
        case "Last":
            newObj[heading] = Faker.name.lastName();
          break;
        case "Phone":
            newObj[heading] = Faker.phone.phoneNumber();
          break;
        case "Department":
            newObj[heading] = Faker.commerce.department();
          break;
        case "Company":
            newObj[heading] = Faker.company.companyName();
          break;
        case "City":
            newObj[heading] = Faker.address.city();
          break;
        case "Occupation":
            newObj[heading] = Faker.name.jobTitle();
          break;
        case "Zip":
            newObj[heading] = Faker.address.zipCode();
          break;
        case "Country":
            newObj[heading] = Faker.address.country();
          break;
        case "State":
            newObj[heading] = Faker.address.state();
          break;
        default:
            console.log("error in the data generator function")
          break;
      }
    });
    return newObj;
  });

  return result;
}
