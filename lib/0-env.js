"use babel"

import {
  execSync
} from 'child_process';

export default {
  activate: () => {
    execSync(
        "$SHELL --login -i -c \"env; exit\"", {
          encoding: "utf8"
        })
      .split("\n")
      .filter(line => line.length > 0)
      .forEach(line => {
        envKey = line.slice(0, line.indexOf("="));
        envValue = line.slice(line.indexOf("=") + 1);
        process.env[envKey] = envValue;
      });
  }
}
