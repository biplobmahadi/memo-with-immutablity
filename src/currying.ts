import _ from "lodash";

const persons = [
  {
    name: "sharif",
    gender: "male",
  },
  {
    name: "shariful",
    gender: "male",
  },
  {
    name: "sharifa",
    gender: "female",
  },
];

const hasGender = _.curry((gender: any, obj: any) => obj.gender === gender);

const malePersons = persons.filter(hasGender("male"));

export { malePersons };
