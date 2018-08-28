

FROM mhart/alpine-node
WORKDIR /app
COPY . .
RUN npm run build --production

FROM mhart/alpine-node
RUN npm install -g serve
WORKDIR /app
COPY --from=0 /app/build .
CMD [“serve”, “-p 80”, “-s”, “.”]