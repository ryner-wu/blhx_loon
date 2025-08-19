function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

const toInsert = `
<script>
(function () {
  const script = document.createElement("script");
  script.src = "https://blhx.danmu9.com/blhxfy/extension.user.js";  // 如果失效，可替换为备选URL
  document.head.appendChild(script);
})();
</script>
`;

let body = $response.body;
let headers = $response.headers;

if (
  body &&
  headers &&
  headers["Content-Type"] &&
  headers["Content-Type"].includes("text/html") &&
  body.lastIndexOf("</head>") !== -1
) {
  body = insert(body, body.lastIndexOf("</head>"), toInsert);
}

$done({ body, headers });
