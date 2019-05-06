//double check to make sure redis server is continuously running in heroku

///////////////  LOCALLY:  ////////////////////
// Redis is populated when app runs
//first, how to make sure Redis is being updated if there are new results in the call?
//second how to make services all database?
//third, how to send those results to the front?

// to perhaps get to front end:
//promisify the call:
//http://redis.js.org/#redis-a-nodejs-redis-client

//do i make the cache only good for 12 hours then re-run ?
// is this a script I need to make?
//how to execute in Heroku?


//the first problem,
//i can make the call and populate the db,
// i just don't know how to get the results to send to my formatter

//the next problem
//ok, I got it from the github service
//but the list doesn't render until ALLLLLL the jobs are retrieved
// so, do I refactor all the damned server calls to go straight to redis then return?
//how do I make sure I still make fresh calls? another componentWillUpdate or something? prevState etc?
// or, do I reconfigure my componentDid Mount to separate each lil job board into its own results bucket?
// my first mind says, figure out a way to make a redis call that takes in the keyword and url to make
//the calls and store, then figure out a way to consistently replace the results every 3-4 hours and serve
//but i'm still concerned about