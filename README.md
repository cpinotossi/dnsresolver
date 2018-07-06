# dnsresolver
does resolve Domains to IPv4 addresses via http request.

Example:
Start server
```
node server.js
```
send lookup for domain "www.heise.de" via curl:
```
$❯ curl http://localhost:8080/www.heise.de                                     ⏎
193.99.144.85	["www.heise.de"]
```
