const path = require("path");
const fullPath = path.join("/foo", "bar", "baz/asdf", "quux", "..");
console.log(fullPath); // Outputs: '/foo/bar/baz/asdf'
const resolvedPath = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
console.log(resolvedPath); // Outputs: '/tmp/subfile'