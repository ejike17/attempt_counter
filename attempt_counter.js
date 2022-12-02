let success = 0;
let fail = 0;
let time;

let attemptCount = setInterval(() => {
  const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
      resolve();
    } else {
      reject();
    }
  });

  myPromise
    .then(() => {
      success++;
      console.log(
        `We suceeded ${success} ${
          success == 1 ? (time = "time") : (time = "times")
        }`
      );
      if (success === 5) {
        console.log("We succeeded more in out attempts");
        clearInterval(attemptCount);
      }
    })
    .catch(() => {
      fail++;
      console.log(
        `We failed ${fail} ${fail == 1 ? (time = "time") : (time = "times")}`
      );
      if (fail === 5) {
        console.log("We did not do well in out attempts");
        clearInterval(attemptCount);
      }
    });
}, 1000);
