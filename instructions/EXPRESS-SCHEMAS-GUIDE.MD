## Running the express schemas server:

### Option #1 (running locally without docker):
node version:
```
> v14.13.1
```
npm version:
```
> 6.14.8
```
running locally:
```
> npm start
```

---
Option #2 (running using docker):

build docker image "express-schemas"
> docker build . -t express-schemas

run docker container "express-schemas"
-d -> detached - runs on background
-it -> interactive mode
-p -> ports origin:end
> docker run -d -p 3033:3033 express-schemas