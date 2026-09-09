const appname = "ReportApp";

console.log(`${appname} has started`);

console.log(`This program uses Node ${process.version}`);

console.log(`Current Operating System: ${process.platform}`);

console.log(`Current folder directory: ${process.cwd()}`);


setTimeout(() => {
    console.log("Everything finished loading correctly");
}, 100);

console.log("loading...")
