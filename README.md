# COI Enrollment App

## Installation

`npm install`

## Development

`npm start`

This will start three services running in parallel using the `concurrently` package from NPM:

* SERVICE: `json-server` running as a mock REST service to serve json data. The data is located in `./src/db`.
* CSS: a css build command running the `watch-css` script.
* DEMO: a webpack build command running the `npm run start-js` script.

## Deployment
The app is deployed to CAE as a NodeJS service using Jenkins CI. The app is deployed via a Dockerfile which EXPOSE's port 80 on the host. The host port is mapped to port 3000 in the container.

_Note_: The Docker documentation says that, by default, Docker running on `boot2docker` (which is the VirtualBox VM that Docker runs in on Mac and Windows) will default to the `bridge` network when mapping ports. This was not the case during testing. In testing, Docker mapped ports to the _VM machine_ default network on `eth0`. On the original test machine the ip address was `192.168.0.100` , so YMMV.

### Docker
The Docker image uses `FROM: node:7` to pull the NodeJS version 7 from the repository. It will pull the latest version of release 7, so if there are issues with compatibility here is a good place to check. The app was built on NodeJS v7.4 (see `.nvmrc`).

See `.Dockerfile` in the root folder for the Docker configuration that is deployed to CAE.

### Requirements

The app has the following requirements:

* Docker (latest)
* NodeJS v7.4+
* Port 80
