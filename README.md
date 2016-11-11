# mapreduce-sample
some mapReduce functions with MongoDB and NodeJS

## Install
### with npm
```bash
npm install
```
### with yarn
```bash
yarn install
```

## Mapreduce queries
To prepare the databse
```bash
npm run build 
```
### Pageviews(URL/hour)
To see the views per URL per hour
```bash
npm run pageviews
```

### Uniques(URL/hour)
To get the uniques per URL per hour
```bash
npm run uniques
```

## datas
To generate some datas for the mapReduce command 
```bash
node methods/genDatas.js
```
To remove all datas
```bash
node methods/removeDatas.js
```
