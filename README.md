# Number Classification API

## Description
An API that classifies numbers based on mathematical properties and provides a fun fact.

## Setup
git clone https://github.com/yourusername/numclassification-api.git
cd numclassification-api

1. Install dependencies:
   ```sh
   npm install

2. Run the Server 
npm start

# Endpoint documentation
GET /api/classify-number?number={value}

## Use Postman to run the endpoint or other endpoint testing of you choice
API Usage
Endpoint: GET /api/classify-number?number=371
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "odd"
    ],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number"
}