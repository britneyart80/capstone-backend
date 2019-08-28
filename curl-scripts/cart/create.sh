#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "cart": {
      "ingredients": [],
      "owner": "'"${USER}"'"
    }
  }'

echo
