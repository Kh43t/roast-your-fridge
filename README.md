# Roast Your Fridge

[![make.fun](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/Kh43t/roast-your-fridge/rank.svg)](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/Kh43t/roast-your-fridge/reward.svg)](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

A one-line roast of my fridge, written by a small deterministic program for the
make.fun competition
[One Line, One Laugh: Roast Your Fridge](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521).

## What it does

`main.ts` writes exactly one line to `/output/entry.txt`:

> My fridge's ice maker chews gravel at 3 a.m. like it's on shift, then
> proudly delivers two cubes — the hardest-working underachiever in this kitchen.

The line is 149 characters, a single line, and it roasts the fridge's ice
maker: the loud 3 a.m. gravel-chewing that ends in just two cubes of ice.

## Run it

Requires Node 22 or later (it runs TypeScript directly, no build step):

```sh
node main.ts
```

For a local test, point the output somewhere else:

```sh
OUTPUT_PATH=/tmp/entry.txt node main.ts
```

The program checks the line first (1–200 characters, one line, not only
whitespace) and refuses to write anything invalid.

## License

MIT — see [LICENSE](LICENSE).
