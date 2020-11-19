import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <>
      <form className="form-container">
        <h2> How do you identify? </h2>
        <label>
          {' '}
          Trans Man <input type="radio" name="gender" value="Trans Man" />
        </label>
        <label>
          {' '}
          Cis Man <input type="radio" name="gender" value="Cis Man" />
        </label>
        <label>
          {' '}
          Trans Woman <input type="radio" name="gender" value="Trans Woman" />
        </label>
        <label>
          {' '}
          Cis Woman <input type="radio" name="gender" value="Cis Woman" />
        </label>
        <label>
          {' '}
          Non Binary <input type="radio" name="gender" value="Non Binary" />
        </label>

        <br />

        <h2> Who are you interested in matching with? </h2>
        <label>
          <input type="checkbox" name="gender" value="Trans Man" /> Trans Man
        </label>
        <label>
          <input type="checkbox" name="gender" value="Cis Man" /> Cis Man
        </label>
        <label>
          <input type="checkbox" name="gender" value="Trans Woman" /> Trans
          Woman{' '}
        </label>
        <label>
          <input type="checkbox" name="gender" value="Cis Woman" /> Cis Woman
        </label>
        <label>
          <input type="checkbox" name="gender" value="Non Binary" /> Non Binary
        </label>

        <br />

        <label>
          Birthday
          <input type="date" />
        </label>
        <label>
          Time of Birth
          <input type="time" />
        </label>
        <label>
          Where were you born
          <input type="" />
          <input type="" />
        </label>
        <label>
          Zipcode
          <input type="number" />
        </label>
        <label>
          Name <input type="text" />{' '}
        </label>
        <label>
          Email <input type="email" />{' '}
        </label>
        <label>
          Password <input type="password" />{' '}
        </label>
      </form>
    </>
  );
};

export default SignUp;
