import { cpSync, existsSync, mkdirSync, renameSync, rmSync, writeFileSync } from "fs";
import { spawnSync } from "child_process";
import path from "path";

const root = process.cwd();
const apiDir = path.join(root, "src/app/api");
const apiBackup = path.join(root, "src/app/_api_hostinger_backup");
const configPath = path.join(root, "next.config.ts");
const configBackup = path.join(root, "next.config.hostinger-backup.ts");

function restore() {
  if (existsSync(apiBackup)) {
    if (existsSync(apiDir)) rmSync(apiDir, { recursive: true, force: true });
    renameSync(apiBackup, apiDir);
  }
  if (existsSync(configBackup)) {
    if (existsSync(configPath)) rmSync(configPath, { force: true });
    renameSync(configBackup, configPath);
  }
}

try {
  if (existsSync(apiDir)) {
    if (existsSync(apiBackup)) rmSync(apiBackup, { recursive: true, force: true });
    renameSync(apiDir, apiBackup);
  }

  if (existsSync(configPath)) {
    if (existsSync(configBackup)) rmSync(configBackup, { force: true });
    renameSync(configPath, configBackup);
  }

  writeFileSync(
    configPath,
    `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
`,
  );

  const result = spawnSync("npm", ["run", "build"], {
    cwd: root,
    stdio: "inherit",
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error("Static Hostinger build failed.");
  }

  const outDir = path.join(root, "out");
  const distDir = path.join(root, "hostinger-static");
  if (existsSync(distDir)) rmSync(distDir, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });
  cpSync(outDir, distDir, { recursive: true });

  console.log("\nHostinger static files ready in: hostinger-static/");
  console.log("Upload the CONTENTS of hostinger-static/ into public_html via File Manager or FTP.");
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  restore();
}
