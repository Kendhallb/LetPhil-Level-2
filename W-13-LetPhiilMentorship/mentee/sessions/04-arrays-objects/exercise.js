// ### 1. Parsons


const weather = {
  city: "Lisbon",
  days: [
    { date: "Mon", condition: "Sunny" },
    { date: "Tue", condition: "Cloudy" },
  ],
};


/*Goal output: `Cloudy` — one step per line.


A   const days = weather.days;
B   const tuesday = days[1];
C   console.log(tuesday.condition);
X   console.log(days.condition);
Y   const tuesday = days[2];
*/

// ABC

const days = weather.days;
const tuesday = days[1];
console.log(tuesday.condition);


/* ### 2. Modify

> Add a function to your Make task that takes one object and **changes** it — for example, `markFavourite(song)` sets `isFavourite` to `true`. It shouldn't return anything.
>
> Before running it, predict: after `markFavourite(songs[2])`, what's `songs[2].isFavourite`?
>
> Then run it, and write one sentence: **why did this work, when `f(x)` in today's warm-up didn't change `x`?** */


const songs = [
  {
    title: "Large Amounts",
    artist: "Young Dolph",
    genre: "Rap",
    platinum: false,
  },
  {
    title: "Bodies",
    artist: "Keshi",
    genre: "Pop",
    platinum: false,
  },
  {
    title: "If You Can't Hang",
    artist: "Sleeping With Sirens",
    genre: "Rock",
    platinum: true,
  },
];

function platinumStatus(song) {
  if (song.platinum) {
    return "Platinum Hit!";
  }
  return "No Platinum Certification";
}

function describeSong(song) {
  return `${song.title} by ${song.artist}. Genre is ${song.genre}.`;
}

console.log(describeSong(songs[0])); // Large Amounts by Young Dolph. Genre is Rap.
console.log(platinumStatus(songs[2])); // Platinum Hit!
console.log(platinumStatus(songs[1])); // No Platinum Certification

// New function
function hitPlatinum(song) {
  song.platinum = true;
}

hitPlatinum(songs[1]);

// I predict that after calling the new function for (songs[1]), it will change (songs[1].platinum) from false to true.

console.log(songs[1].platinum); // New function changed status to true. Now it will return "Platinum Hit" when asking for platinum status.

// **why did this work, when `f(x)` in today's warm-up didn't change `x`?**

// This worked because I added a new function to change the whole boolean completely for the specific object(`x`). Where as in the warm up, `x`(object) is outside of the function so it has nothing to do with anything under the hood.

