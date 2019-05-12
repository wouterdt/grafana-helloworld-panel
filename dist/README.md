## Hello World Plugin for Grafana

A basic plugin that will display Hello Wold on a grafana dashboard written in TypeScript and based upon the Clock plugin.
Every callback recieved from grafana will print to the console.
Should be used as a basis plugin or for educational purposes.

### Plugin options

### Development

1. Create a parent directory that will contain all plugins
1. Configure a custom.ini your grafana to check the parent directory (https://grafana.com/docs/installation/configuration/#plugins)
1. Clone the repository to a subdirectory and `cd` to it
1. make sure you have [yarn]( https://yarnpkg.com/) installed
1. install project dependencies: `yarn install --pure-lockfile`
1. Start the "watch" task: `yarn watch`
1. Run a local Grafana instance

To build a production build with minification: `yarn build`

#### Changelog

##### v1.0
- initial commit