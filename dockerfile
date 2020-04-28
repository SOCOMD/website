FROM node:alpine as webBuilder
WORKDIR /website
COPY ./website/ .
RUN npm i && npm run-script build

FROM golang:alpine as goBuilder
WORKDIR /go
COPY ./backend/ .
RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o main .

FROM alpine:latest
WORKDIR /app
COPY --from=webBuilder /website/build/ ./content/
COPY --from=goBuilder /go/main ./main

RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/* && update-ca-certificates
ENV USER=website
ENV UID=10001
RUN adduser \    
    --disabled-password \    
    --gecos "" \    
    --home "/nonexistent" \    
    --shell "/sbin/nologin" \    
    --no-create-home \    
    --uid "${UID}" \    
    "${USER}"

RUN chown ${USER}:${USER} -R /app
USER ${USER}:${USER}
EXPOSE 8080
CMD [ "/app/main" ]
