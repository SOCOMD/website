package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/rest/v1/sendApplication", sendApplication)
	http.Handle("/", http.FileServer(http.Dir("./content")))
	http.ListenAndServe(":8080", nil)
}

func sendApplication(resp http.ResponseWriter, req *http.Request) {
	resp.WriteHeader(http.StatusNotImplemented)
}
