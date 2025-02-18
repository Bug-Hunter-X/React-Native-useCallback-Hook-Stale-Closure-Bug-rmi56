# React Native useCallback Hook Stale Closure Bug

This repository demonstrates a common but subtle bug in React Native applications when using the `useCallback` hook with functions that access state variables indirectly through closures.  The problem arises when the closure does not update properly with state changes, leading to unexpected behavior.

## Bug Description

The `useCallback` hook is intended to memoize functions, preventing unnecessary re-renders. However, if the function within `useCallback` relies on values that change outside of its direct dependencies (like state variables accessed through a closure), the memoized function might not receive the updated values, resulting in stale closure data.

## How to reproduce

Clone this repo and run the `StaleClosureBug.js` file. Observe that even though the state variable `count` changes, the function within `useCallback` continues to use the initial value of `count`. 

## Solution

The `StaleClosureSolution.js` file provides a corrected version.  Instead of relying on a closure to access the state variable, the state is directly passed as an argument to the function within `useCallback`. This ensures the function always receives the latest state value.