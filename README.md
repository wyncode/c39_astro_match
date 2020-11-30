![alt text](https://upload.wikimedia.org/wikipedia/commons/1/12/Venice_ast_sm.jpg)

# AstroDate

Since antiquity, people have looked to the stars and sought guidance from the cosmos in making major life decisions on our terrestrial plain. The core tenets of western Astrology posit that happenings on Earth are reflections of the state of the cosmos. The zodiac, the band of 12 constellations through which the Sun, Moon, and planets move on their journey across the sky, has been used to articulate this system by mapping out these routes and using them in conjunction with the time, date and location of a person’s birth to create a horoscopic maps of their lives. AstroDate is a dating app that utilizes the western zodiac to determine the romantic compatibility of our users based on their birth charts, while also implementing whatever filters they might have set while creating their profiles.

## How It Works

A user, who is at minumum 18 years of age, signs up to AstroDate shares their birthdate and birth location so as to establish their zodiac sign. The site determines their sign by saving the sign-up information to a database in which the immanuel API determines the user's zodiac signs. Of utmost importance for mathing, the Sun Sign, signifies their ego and is the focal point of determining compatibility. Additional information on users' Moon Sign, which shapes their emotional outlook, and Ascendant Sign, their external presentation to the world, is also provided. AstroDate then algorithmically determines by percentage the most suitable potential partners, those who share a compatibility percentage of at least 75%, and presents them to the user in the Matches page.

Users also have the option of applying additional filters based on criteria such as gender identity, location range and even express a preference for particular sun signs in their search. Users can message one another and engage in conversation on the site.

## Features:

- Profile creation
- Private messaging
- Astrological birth data
- User matching
- User filtering
- Request-logging
- Basic validation

## Built With

- React
- CSS
- JSON
- Material-UI
- Google Fonts
- Sendgrid
- Cloudinary
- Mongoose DB
- JSON Web Tokens
- Socket.IO
- SweerAlert
- axios
- brcyrpt
- express-fileupload
- husky

## APIs

- Immanuel API (https://immanuel.app/)
- Universial Tutorial (https://www.universal-tutorial.com/)

## Setup

- `git clone` this repo.
- `cd` into it.
- `cd client && yarn install`
