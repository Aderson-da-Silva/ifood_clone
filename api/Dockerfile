# Base stage for shared dependencies
FROM node:23-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./

# Development stage
FROM base AS development
ENV NODE_ENV=development
RUN npm install
COPY . .
EXPOSE 3000 3001 3002
CMD ["npm", "run", "start:dev"]

# Build stage
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:23-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
RUN npm ci --only=production
EXPOSE 3000 3001 3002
CMD ["node", "dist/main.js"]
