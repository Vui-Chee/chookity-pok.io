---
title: Doomsday Fuel Challenge
date: 2021-08-21
tags: [google, personal]
description: How to solve Google's foobar challenge with little math
---

Occasionally, unsuspecting people's browser tabs are hijacked by Google and turned into

![foobar-screen](/media/foobar-screen.jpg)

And so Google has set a challenge for you.

And one of those given is the **Doomsday fuel problem**.

**To keep this blog brief, I am omitting the first preamble but leaving the second one as context for the actual question.**

# Problem Description

_Commander Lambda has tasked you to help the scientists increase fuel creation efficiency by predicting the end state of a given ore sample. You have carefully studied the different structures that the ore can take and which transitions it undergoes. It appears that, while random, the probability of each structure transforming is fixed. That is, each time the ore is in 1 state, it has the same probabilities of entering the next state (which might be the same state). You have recorded the observed transitions in a matrix. The others in the lab have hypothesized more exotic forms that the ore can become, but you haven't seen all of them._

#### After all of that, here is the actual question:

_Write a function answer(m) that takes an array of array of nonnegative ints representing how many times that state has gone to the next state
and return an array of ints for each terminal state giving the exact probabilities of each terminal state, represented as the numerator for each
state, then the denominator for all of them at the end and in simplest form._

_The matrix is at most 10 by 10._

_It is guaranteed that no matter which state the ore is in, there is a path from that state to a terminal state.
That is, the processing will always eventually end in a stable state.
The ore starts in state 0. The denominator will fit within a signed 32-bit integer during the calculation, as long as the fraction is simplified regularly._

For example, consider the matrix m:

```
[
  [0,1,0,0,0,1],  # s0, the initial state, goes to s1 and s5 with equal probability
  [4,0,0,3,2,0],  # s1 can become s0, s3, or s4, but with different probabilities
  [0,0,0,0,0,0],  # s2 is terminal, and unreachable (never observed in practice)
  [0,0,0,0,0,0],  # s3 is terminal
  [0,0,0,0,0,0],  # s4 is terminal
  [0,0,0,0,0,0],  # s5 is terminal
]
```

So, we can consider different paths to terminal states, such as:

```
s0 -> s1 -> s3
s0 -> s1 -> s0 -> s1 -> s0 -> s1 -> s4
s0 -> s1 -> s0 -> s5
```

Tracing the probabilities of each, we find that:

```
s2 has probability 0
s3 has probability 3/14
s4 has probability 1/7
s5 has probability 9/14
```

So, putting that together, and making a common denominator, gives an answer in the form of
`[s2.numerator, s3.numerator, s4.numerator, s5.numerator, denominator]` which is: `[0, 3, 2, 9, 14]`.

# So how do we go about solving it?

You will some basic knowledge of **Markov Chains** and **matrix multiplication**. For those of you whose googling
skills are god-like, you may find that some people suggested some complicated math involving linear
algebra or matrix inverses. **But I am here to tell you that do not need fancy math to solve this problem
at all.**

All you need to do recognize some simple patterns.

## What is a Markov Chain?

To answer this question, we just need a basic understanding of what a Markov Chain is. Now you could
google this on [Wikipedia](https://en.wikipedia.org/wiki/Markov_chain#Types_of_Markov_chains), but I am giving you the extra short version (albeit oversimplified version).

Imagine a simple matrix containing a bunch of probabilities:

<div style="background:rgba(255, 255, 255, 0.6);padding:10px;display:inline-block;">
  <a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0.3&space;&&space;0.7&space;\\&space;0.4&space;&&space;0.6&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0.3&space;&&space;0.7&space;\\&space;0.4&space;&&space;0.6&space;\end{bmatrix}" title="\begin{bmatrix} 0.3 & 0.7 \\ 0.4 & 0.6 \end{bmatrix}" /></a>
</div>

Now notice what happens after you keep multiplying such a matrix.

<div style="background:rgba(255, 255, 255, 0.6);padding:10px;display:inline-block;">
  <a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\dpi{150}&space;\fn_cm&space;{\begin{bmatrix}&space;0.3&space;&&space;0.7&space;\\&space;0.4&space;&&space;0.6&space;\end{bmatrix}}^{30}&space;=&space;{\begin{bmatrix}&space;0.3&space;&&space;0.7&space;\\&space;0.4&space;&&space;0.6&space;\end{bmatrix}}^{50}&space;=&space;\begin{bmatrix}&space;0.36363636&space;&&space;0.63636364&space;\\&space;0.36363636&space;&&space;0.63636364&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\inline&space;\dpi{150}&space;\fn_cm&space;{\begin{bmatrix}&space;0.3&space;&&space;0.7&space;\\&space;0.4&space;&&space;0.6&space;\end{bmatrix}}^{30}&space;=&space;{\begin{bmatrix}&space;0.3&space;&&space;0.7&space;\\&space;0.4&space;&&space;0.6&space;\end{bmatrix}}^{50}&space;=&space;\begin{bmatrix}&space;0.36363636&space;&&space;0.63636364&space;\\&space;0.36363636&space;&&space;0.63636364&space;\end{bmatrix}" title="{\begin{bmatrix} 0.3 & 0.7 \\ 0.4 & 0.6 \end{bmatrix}}^{30} = {\begin{bmatrix} 0.3 & 0.7 \\ 0.4 & 0.6 \end{bmatrix}}^{50} = \begin{bmatrix} 0.36363636 & 0.63636364 \\ 0.36363636 & 0.63636364 \end{bmatrix}" /></a>
</div>

The values seem to stabilize after multiplying a couple of times.

Note this only works if the matrix is a transition matrix with an absorbing state. Otherwise, you could also get
cases where the values oscillate forever.

<div style="background:rgba(255, 255, 255, 0.6);padding:10px;display:inline-block;">
  <a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0&space;&&space;1\\&space;1&space;&&space;0&space;\end{bmatrix}^{30}&space;=&space;\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}&space;,&space;\begin{bmatrix}&space;0&space;&&space;1\\&space;1&space;&&space;0&space;\end{bmatrix}^{31}&space;=&space;\begin{bmatrix}&space;0&space;&&space;1\\&space;1&space;&&space;0&space;\end{bmatrix}&space;..." target="_blank"><img src="https://latex.codecogs.com/png.latex?\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0&space;&&space;1\\&space;1&space;&&space;0&space;\end{bmatrix}^{30}&space;=&space;\begin{bmatrix}&space;1&space;&&space;0\\&space;0&space;&&space;1&space;\end{bmatrix}&space;,&space;\begin{bmatrix}&space;0&space;&&space;1\\&space;1&space;&&space;0&space;\end{bmatrix}^{31}&space;=&space;\begin{bmatrix}&space;0&space;&&space;1\\&space;1&space;&&space;0&space;\end{bmatrix}&space;..." title="\begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix}^{30} = \begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix} , \begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix}^{31} = \begin{bmatrix} 0 & 1\\ 1 & 0 \end{bmatrix} ..." /></a>
</div>

Luckily for this problem, it is guaranteed that the **terminating states will stabilize at some point**.

### How is this relevant to the problem?

Great question. No point talking about Markov Chains without getting back to the nugget.

If you have following along, the first we need to do, is take our input `m` and convert it into a matrix of probabilities.

So given:

<div style="background:rgba(255, 255, 255, 0.6);padding:10px;display:inline-block;">
  <a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0&space;&&space;1&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1\\&space;4&space;&&space;0&space;&&space;0&space;&&space;3&space;&&space;2&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0&space;&&space;1&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1\\&space;4&space;&&space;0&space;&&space;0&space;&&space;3&space;&&space;2&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0\\&space;\end{bmatrix}" title="\begin{bmatrix} 0 & 1 & 0 & 0 & 0 & 1\\ 4 & 0 & 0 & 3 & 2 & 0\\ 0 & 0 & 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 & 0 & 0\\ 0 & 0 & 0 & 0 & 0 & 0\\ \end{bmatrix}" /></a>
</div>

We need to convert `m` into:

<div style="background:rgba(255, 255, 255, 0.6);padding:10px;display:inline-block;">
  <a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0&space;&&space;1/2&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1/2\\&space;4/9&space;&&space;0&space;&&space;0&space;&&space;3/9&space;&&space;2/9&space;&&space;0\\&space;0&space;&&space;0&space;&&space;1&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;1&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1\\&space;\end{bmatrix}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\inline&space;\dpi{150}&space;\fn_cm&space;\begin{bmatrix}&space;0&space;&&space;1/2&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1/2\\&space;4/9&space;&&space;0&space;&&space;0&space;&&space;3/9&space;&&space;2/9&space;&&space;0\\&space;0&space;&&space;0&space;&&space;1&space;&&space;0&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;1&space;&&space;0&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1&space;&&space;0\\&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;0&space;&&space;1\\&space;\end{bmatrix}" title="\begin{bmatrix} 0 & 1/2 & 0 & 0 & 0 & 1/2\\ 4/9 & 0 & 0 & 3/9 & 2/9 & 0\\ 0 & 0 & 1 & 0 & 0 & 0\\ 0 & 0 & 0 & 1 & 0 & 0\\ 0 & 0 & 0 & 0 & 1 & 0\\ 0 & 0 & 0 & 0 & 0 & 1\\ \end{bmatrix}" /></a>
</div>

Notice, how each row total sums up to 1. That is because the total probability arising from each state can only add up to 1.

Sorry I lied about simply knowing matrices and Markov Chains can actually solve the problem. Apparently you also need basic
probability as well. Haha.

#### Terminating State

Notice in each row in `m` where all values are `0`, the converted matrix has a single value of `1` in that row.

Why is that? You may ask.

When you reach a terminating state, there are no other states you can transition to except the current state you are in. So
the only path taken is the self-loop - in short, there is a `100%` probability you reside in the same state.

### Ok, now I have the converted matrix...what now?

As I was saying about matrix multiplication and stable terminating values, all we need to do now is basically **repeatedly
multiply our converted matrix till the values stabilize**.

**Beware to only check if the terminating states stabilize. And NOT states which are non-terminating.**

### Finally...are we done?

Once you get the stabilize values in final transition matrix, those should be probabilities required by the problem.

Unfortunately, we are talking about Google. And boy do they not make things easy.

Earlier on, I mentioned in the final part of the problem, that the answers must be a **list of numerators**, with the **lowest
common denominator as the last element in the output list**.

Sigh...looks like we need **fractions**!

## Finding LCD without GCD or LCM

As I mentioned before, I intend to keep things simple. When I meant simple, means using as little fancy math as possible.

Consider these 2 fractions:

<div style="background:rgba(255, 255, 255, 0.6);padding:10px;display:inline-block;">
  <a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\dpi{150}&space;\fn_cm&space;\frac{1}{2},&space;\frac{1}{3}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\inline&space;\dpi{150}&space;\fn_cm&space;\frac{1}{2},&space;\frac{1}{3}" title="\frac{1}{2}, \frac{1}{3}" /></a>
</div>

Their lowest common denominator is `6`. And if these are the final probabilities, then the expected output is
`[3,2,6]`.

Notice what happens when I add these two fractions, the output is

<div style="background:rgba(255, 255, 255, 0.6);padding:10px;display:inline-block;">
  <a href="https://www.codecogs.com/eqnedit.php?latex=\inline&space;\dpi{150}&space;\fn_cm&space;\frac{5}{6}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\inline&space;\dpi{150}&space;\fn_cm&space;\frac{5}{6}" title="\frac{5}{6}" /></a>
</div>

If you simplify the fractions each time you added them together, you will get the LCD eventually.

Using that idea, I leave it to you to figure out how to implement such an algorithm.

And with the LCD, you can deduce the multiplier for each numerator and output that in the final list.

## Conclusion

Note that the challenge uses `python 2.7.13`, and prohibits use of libraries such as `numpy`, it means you have
to implement most of the operations yourself.

Luckily for you, all you need to implement/import are:

1. a function which multiplies two matrices
2. a function which computes the LCD
3. `fractions` module if you are using Python

And beware in older versions of Python, `1 / 2` does not return a float but does floored integer division.

You will need to do this:

`from __future__ import division`

to ensure the division is performed as expected.

I hope this will be useful for you without giving away the solution. If you find this too difficult, you can
always look online for solutions which involves inverse matrices and serious linear algebra. At the very least,
I can guarantee that this solution is my own and I can understand it.

![status](/media/status.jpg)
