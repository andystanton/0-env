'use babel'

import {
  execSync
} from 'child_process';

export default {
  activate: () => {
    execSync(
        'env ATOM_0_ENV=1 "$SHELL" --login -i -c "env -u ATOM_0_ENV env; exit"', {
          encoding: 'utf8'
        })
      .split('\n')
      .filter(line => line.length > 0)
      .forEach(line => {
        envKey = line.slice(0, line.indexOf('='));
        envValue = line.slice(line.indexOf('=') + 1);
        process.env[envKey] = envValue;
      });
  }
}
