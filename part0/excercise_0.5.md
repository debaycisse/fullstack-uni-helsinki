```
sequenceDiagram

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server->>browser: html code

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->>browser: main.css code


browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->>browser: spa.js code
Note over browser: browser executes spa.js, which contains a request to https://studies.cs.helsinki.fi/exampleapp/data.json

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: [{content: "dfgdfgdfg", date: "2022-10-12T04:13:57.431Z"}, ...]

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/favicon.ico
server->>browser: html code
```


```mermaid
sequenceDiagram

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server->>browser: html code

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->>browser: main.css code


browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->>browser: spa.js code
Note over browser: browser executes spa.js, which contains a request to https://studies.cs.helsinki.fi/exampleapp/data.json

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: [{content: "dfgdfgdfg", date: "2022-10-12T04:13:57.431Z"}, ...]

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/favicon.ico
server->>browser: html code
```