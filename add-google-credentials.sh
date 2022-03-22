#!/bin/sh

echo "Generating google-credentials.json and google-credentials-2.json from Heroku environment variable"

echo $GOOGLE_CREDENTIALS > google-credentials.json
echo $GOOGLE_CREDENTIALS_2 > google-credentials-2.json

exec "$@"