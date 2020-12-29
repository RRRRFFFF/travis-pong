// /Users/rfilardo/FunToLearn/nd9990-c3-microservices-exercises/lesson-3-independent-releases/exercises/travis_env_var_exercise


// try 
// # node server.js
// # echo $NAME
// # export NAME=pizza
// # echo $NAME
// # node server.js
// these variable only persist in the session so if this tab is closed 
// then they will no longer apply 

const FAVORITE_INSTRUCTOR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_INSTRUCTOR} is the best!`);


		envName = process.env.channelName
		console.log("Channel Name is " + envName);


		const favoriteFood = process.env.FAVORITE_FOOD;
		console.log(`My favorite food is ${favoriteFood}`);
		console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
