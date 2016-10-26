# mapreduce-sample
some mapReduce functions with MongoDB and NodeJS

## datas
To generate some datas for the mapReduce command 
```bash
node methods/genDatas.js
```
To remove all datas
```bash
node methods/removeDatas.js
```

## Mapreduce queries
### Pageviews(URL/hour)
To see the views per URL per hour
```bash
node methods/pageviews.js
```

### Uniques(URL/hour)
To get the uniques per URL per hour
```bash
node methods/uniques.js
```
