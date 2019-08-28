#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "cart": {
      "ingredients": ["5d66a51ff7af67114b6cbe1c", "5d66a51ff7af67114b6cbe1c", "5d66a0fef7af67114b6cbe18", "5d66a51ff7af67114b6cbe1c"]
    }
  }'

echo
