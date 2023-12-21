# API FOR URL DETECTION FEATURE OF PHISEYE


Backend for API Detection Feature using Flask, Python, and Tensorflow. 
## Endpoint

Link Endpoint: https://fitur5-m36h2vfbmq-et.a.run.app/

## Detection URL Feature

### URL
```sh
/predict
```
### Method
```sh
POST
```
### Request Body
- URL 
```sh
{
    "url": "https://espn.go.com/nba/player/_/id/3457/brandon-rush"
}
```
### Response
```sh
{
    "prediction": "Phishing"
}
```
