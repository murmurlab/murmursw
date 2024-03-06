import { execFile } from 'node:child_process'
import {ResetMode, simpleGit} from 'simple-git'

const git = simpleGit('.');

// any command executed will be prefixed with this config
// runs: git -c http.proxy=someproxy pull
await git.reset(ResetMode.HARD)
await git.pull({branch: "main"});