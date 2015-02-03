cd "$(dirname $0)"

browserify -t 6to5ify index.js > bundle.js
open index.html
