package main

import (
	"fmt"
	"net/http"
	"os"
	"strconv"
)

type question struct {
	Q string `json:"q"`
	A string `json:"a"`
}

func (q question) Question() string {
	return q.Q
}

func (q question) Answer() string {
	return q.A
}

const (
	defaultPort = "8080"
)

func main() {
	rawPort := os.Getenv("PORT")
	if rawPort == "" {
		rawPort = defaultPort
	}
	port, err := strconv.Atoi(rawPort)
	if port == 0 || err != nil {
		port, _ = strconv.Atoi(defaultPort)
		fmt.Printf("env PORT:%s is not a valid port, using %d\n", rawPort, port)
	}

	http.HandleFunc("/rest/v1/Application", sendApplication)
	http.Handle("/", http.FileServer(http.Dir("./content")))
	http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}

func sendApplication(resp http.ResponseWriter, req *http.Request) {
	resp.WriteHeader(http.StatusNotImplemented)
}
