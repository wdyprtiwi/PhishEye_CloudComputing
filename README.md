# API of PhishEye Mobile App

## Detection Feature
Backend for API Detection Feature using Flask, Python, and Tensorflow. 
## Endpoint 

Link Endpoint: https://fitur5-m36h2vfbmq-et.a.run.app/

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
## Registration, Login, and Report
Backend for API Registratin, Login, and Report using nodejs, express, and MySQL
## Endpoint 
https://app2-5hl7lkua7q-et.a.run.app

Register
--

### URL <br>
    /signup

### Method
    POST
    
### Request Body
   - name as string <br>
   - email as string <br>
   - password as string <br>

### Response
    {
        "error": false,
        "message": "User created"
    }

Login
--

### URL
    /login

### Method
    POST

### Request Body
- email as string <br>
- password as string <br>

### Response
    {
        "error": false,
        "message": "Login successful",
        "loginResult": {
            "userId": "user-abd8c03b-11fe-4443-8224-a5051405abe0",
            "name": "Kim Namjoon",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyLWFiZDhjMDNiLTExZmUtNDQ0My04MjI0LWE1MDUxNDA1YWJlMCIsImlhdCI6MTcwMjg4MzkwMiwiZXhwIjoxNzAyODg3NTAyfQ.D222aquHmt4YhQ8rv4Ry3P8K4DRBIEQLOB2MVBIWHJg"
        }
    }

## Report Link

### URL
    /reportLink

### Method
    POST

### Request Body
- link as string

### Response
    {
        "error": false,
        "message": "Link reported successfully"
    }
