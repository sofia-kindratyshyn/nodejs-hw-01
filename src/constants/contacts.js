import path from "node:path";

const mainPath = path.join(process.cwd());

export const PATH_DB = path.join(mainPath, "src","db","db.json");

console.log(PATH_DB);

