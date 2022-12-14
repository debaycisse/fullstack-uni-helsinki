```
sequenceDiagram

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note over server: after posting was done here, the server redirects browser to https://studies.cs.helsinki.fi/exampleapp/note, see the redirection flow below.

server->>browser: redirects browser - https://studies.cs.helsinki.fi/exampleapp/note
Note  over server: the redirection causes the below activities to take place between both server and browser.


browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/note
server->>browser: html code
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->>browser: main.css code
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->>browser: main.js code

Note over browser: browser executes the main.js, which has a request to JSON data and this casued the browser to request for this JSON file.

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: [..., {content: "test item creation", date: "2022-10-12T11:24:08.077Z"}]

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/favicon.ico
server->>browser: html code
```


```mermaid
sequenceDiagram

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note over server: after posting was done here, the server redirects browser to https://studies.cs.helsinki.fi/exampleapp/note, see the redirection flow below.

server->>browser: redirects browser - https://studies.cs.helsinki.fi/exampleapp/note
Note  over server: the redirection causes the below activities to take place between both server and browser.


browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/note
server->>browser: html code
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->>browser: main.css code
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server->>browser: main.js code

Note over browser: browser executes the main.js, which has a request to JSON data and this casued the browser to request for this JSON file.

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: [..., {content: "test item creation", date: "2022-10-12T11:24:08.077Z"}]

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/favicon.ico
server->>browser: html code
```