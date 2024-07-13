package main

import (
    "io"
    "log"
    "net/http"
)

func main() {
    http.HandleFunc("/hello", getGoHello)

    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Println("error")
        return
    }
}

func getGoHello(w http.ResponseWriter, r *http.Request) {
    io.WriteString(w, "HELLO FROM GO ABOBA!\n")
}