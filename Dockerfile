FROM node:20-slim AS deps
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ARG REPO_URL=https://github.com/RitenMehta04/my-fsl-app.git
ARG BRANCH=main
RUN git clone --depth 1 --branch $BRANCH $REPO_URL /tmp/repo && \
    cp /tmp/repo/package*.json . && \
    rm -rf /tmp/repo
RUN npm ci --omit=dev --ignore-scripts --no-fund --no-audit

# ───────────────────────
FROM node:20-slim
RUN apt-get update && apt-get install -y --no-install-recommends git ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

# Clone into /tmp/src to avoid conflict with node_modules
RUN git clone --depth 1 --branch main https://github.com/RitenMehta04/my-fsl-app.git /tmp/src && \
    mv /tmp/src/* /tmp/src/.* . 2>/dev/null || true && \
    rm -rf /tmp/src .git

EXPOSE 8080
CMD ["npm", "start"]