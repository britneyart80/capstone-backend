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
      "0": ["5d6443d0ec26c978f408215c", "5d6443bbec26c978f4082158"]
    }
  }'

echo
