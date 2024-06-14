const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

async function build(...args) {
  console.log(args);
  execSync("yarn build", { stdio: "inherit" });

  const serverDir = path.resolve(__dirname, "../build/server");
  const clientDir = path.resolve(__dirname, "../build/client");

  // Ensure output directories exist
  await fs.ensureDir(serverDir);
  await fs.ensureDir(clientDir);

  // Move compiled files to their respective output directories
  await fs.move("trpc-server/dist", serverDir, { overwrite: true });
  await fs.move("trpc-client/dist", clientDir, { overwrite: true });
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
