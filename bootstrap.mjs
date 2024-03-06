import { execFile } from 'node:child_process'
import {} from 'simple-git'

const git: SimpleGit = simpleGit('/some/path', { config: ['http.proxy=someproxy'] });

// any command executed will be prefixed with this config
// runs: git -c http.proxy=someproxy pull
await git.pull();
