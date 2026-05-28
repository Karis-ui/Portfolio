#!/bin/bash

echo "Starting deployment..."

# Build the project
npm run build

# Deploy the project to Vercel...
npm run deploy

echo "Deployment completed successfully!"