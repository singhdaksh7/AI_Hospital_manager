# Use Bun official image
FROM oven/bun:latest as builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN bun install --legacy-peer-deps

# Copy source code
COPY . .

# Final stage
FROM oven/bun:latest

WORKDIR /app

# Copy from builder
COPY --from=builder /app .

# Expose port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production

# Start the application
CMD ["bun", "run", "src/server.ts"]
