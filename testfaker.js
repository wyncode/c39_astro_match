const faker = require('mongoose-faker');

// Creata a document and save it to the db
const student = await faker.generateObject(StudentModel, { save: true });

// You can also pass in custom fields to your model
const course = await faker.generateObject(CourseModel, {
  save: true,
  custom: { students: [student] }
});
