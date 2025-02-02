# MongoDB $inc Operator Type Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment a numeric field, but providing a non-numeric value will throw an error.

## Problem
The original code incorrectly attempts to increment the `likes` field without explicitly casting to a number. This causes a type error because MongoDB expects a number for the increment operation. 

## Solution
The solution involves explicitly casting the increment value to `NumberInt(1)`. This ensures that MongoDB receives a numeric value and the update operation succeeds without errors.