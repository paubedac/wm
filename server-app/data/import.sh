#!/bin/bash
# Import from products && discount

mongoimport --host mongo --db my-mongo --collection products --file /src/data/products.json && \
mongoimport --host mongo --db my-mongo --collection discounts --file /src/data/discounts.json