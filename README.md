# Worst Superpower

[![make.fun](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe)
[![rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/Xyzar29/worst-superpower/rank.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe)
[![reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/Xyzar29/worst-superpower/reward.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe)

A make.fun bounty entry for [Worst Superpower](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe): invent the most useless superpower in one line of at most 140 characters.

## The entry

> I can charge any phone to 100% instantly, but only phones already at 100%.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that one line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`), with
no trailing newline. It validates the line against the 1–140 character gate
and reads the file back to confirm it round-trips byte for byte, so every
run produces identical output.

Run it with:

```sh
node main.ts
```
