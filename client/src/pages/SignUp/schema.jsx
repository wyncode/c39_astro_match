import { PartOne, PartThree, PartTwo } from './Parts';

export const emptyFormData = {};

export const schema = {
  one: {
    title: 'PartOne',
    form: PartOne,
<<<<<<< HEAD
=======
    // disables the previous button
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
    previous: null,
    next: 'second'
  },
  second: {
    title: 'PartTwo',
    form: PartTwo,
    previous: 'one',
    next: 'third'
  },
  third: {
    title: 'PartThree',
    form: PartThree,
    previous: 'second',
    next: null
  }
<<<<<<< HEAD
=======
  // confirm: {
  //   title: 'Confirmation',
  //   form: Confirm,
  //   previous: 'second',
  //   // signifies submission
  //   next: null,
  // },
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
};
