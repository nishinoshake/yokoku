#!/bin/bash

aws s3 sync ./__sapper__/export s3://yokoku.cc --exact-timestamps --delete --exclude "*.html" --cache-control max-age=31536000
aws s3 sync ./__sapper__/export s3://yokoku.cc --exact-timestamps --delete --exclude "*" --include "*.html" --cache-control no-store
aws cloudfront create-invalidation --distribution-id $CF_DIST_ID --paths "/*"
