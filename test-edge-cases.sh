#!/bin/bash

# Test edge cases that might cause GitHub Actions to fail
set -e

echo "🧪 Testing edge cases for release notes generation..."

# Test case 1: No commits since last tag (current situation)
echo "📝 Test 1: No commits since last tag"
PREV_TAG=$(git tag --sort=-version:refname | head -n1)
echo "Previous tag: $PREV_TAG"

# This is the problematic line from the workflow
COMMITS=$(git log "$PREV_TAG..HEAD" --pretty=format:"- %s (%h)" --no-merges | grep -v "release:" || true)

if [ -z "$COMMITS" ]; then
  echo "✅ No commits found - handled gracefully"
  COMMITS="- No changes since last release"
else
  echo "✅ Found commits: $COMMITS"
fi

# Test case 2: No previous tags at all
echo "📝 Test 2: Simulating no previous tags"
# Get first commit to simulate no tags scenario
FIRST_COMMIT=$(git rev-list --max-parents=0 HEAD)
echo "First commit: $FIRST_COMMIT"

COMMITS_FROM_START=$(git log "$FIRST_COMMIT..HEAD" --pretty=format:"- %s (%h)" --no-merges | grep -v "release:" | head -5 || true)

if [ -z "$COMMITS_FROM_START" ]; then
  echo "✅ No commits from start - handled gracefully"
else
  echo "✅ Found commits from start (showing first 5):"
  echo "$COMMITS_FROM_START"
fi

# Test case 3: Grep with no matches
echo "📝 Test 3: Testing grep with no matches"
TEST_OUTPUT=$(echo "release: test commit" | grep -v "release:" || true)
if [ -z "$TEST_OUTPUT" ]; then
  echo "✅ Grep with no matches handled gracefully"
else
  echo "❌ Unexpected output: $TEST_OUTPUT"
fi

# Test case 4: Empty git log
echo "📝 Test 4: Testing empty git log output"
EMPTY_COMMITS=$(echo "" | grep -v "release:" || true)
if [ -z "$EMPTY_COMMITS" ]; then
  echo "✅ Empty git log handled gracefully"
else
  echo "❌ Unexpected output from empty log: $EMPTY_COMMITS"
fi

# Test case 5: Check if all required tools are available
echo "📝 Test 5: Checking required tools"
which git > /dev/null && echo "✅ git available" || echo "❌ git missing"
which node > /dev/null && echo "✅ node available" || echo "❌ node missing"
which sed > /dev/null && echo "✅ sed available" || echo "❌ sed missing"
which date > /dev/null && echo "✅ date available" || echo "❌ date missing"
which grep > /dev/null && echo "✅ grep available" || echo "❌ grep missing"

echo "🎉 Edge case testing completed!"
