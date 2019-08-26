#!/bin/bash

API="http://localhost:4741"
URL_PATH="/weeks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "week": {
      "mon": ["5d63fcd3018daa12ae6ff905"]
    }
  }'

echo
