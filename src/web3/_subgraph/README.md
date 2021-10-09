# tampopo[dot]eth Network Indexer
> Subgraph code, deployed to [The Graph Network]()

## Schemas

## Handled Events

## Forking

### `.env` variables
> create a `.env` file with `$ touch .env`, then add the following keys and fill in the values as described below

`THE_GRAPH_USERNAME` :: 

`THE_GRAPH_PROJECT` :: 

`THE_GRAPH_ACCESS_TOKEN` :: 

### Deploying
> setup dev environment and then deploy

- check contract addresses in [subgraph.yaml](subgraph.yaml)
- update [ABIs](abis) if needed
- run the following in your terminal
  - `npm install`
  - `npm run build`
  - `npm run auth`
  - `npm run deploy`