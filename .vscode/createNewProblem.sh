#!/usr/bin/env bash
set -euo pipefail

# --- input ---
NAME="${1:-}"
if [[ -z "$NAME" ]]; then
  echo "Usage: $0 <name>"
  exit 1
fi

SRC_DIR="./Template-Problem"
DEST_ROOT="./Problems"
DEST_DIR="${DEST_ROOT}/${NAME}"

# --- checks ---
if [[ ! -d "$SRC_DIR" ]]; then
  echo "Source folder not found: $SRC_DIR"
  exit 1
fi

if [[ -e "$DEST_DIR" ]]; then
  echo "Destination already exists: $DEST_DIR"
  exit 1
fi

mkdir -p "$DEST_ROOT"

# --- copy ---
cp -R "$SRC_DIR" "$DEST_DIR"

# --- rename files inside the copied folder ---
# 1) Rename a specific file
if [[ -f "$DEST_DIR/template.test.ts" ]]; then
  mv "$DEST_DIR/template.test.ts" "$DEST_DIR/${NAME}.test.ts"
fi


# --- replace content inside files (examples) ---
# Replace all occurrences of %%NAME%% with NAME in common text files
# (safe-ish default; extend as needed)
find "$DEST_DIR" -type f \( -name "README.md" \) -print0 \
| while IFS= read -r -d '' file; do
  # macOS sed needs -i '' ; linux sed accepts -i
  if sed --version >/dev/null 2>&1; then
    # GNU sed (Linux)
    sed -i "s/%%NAME%%/${NAME}/g" "$file"
  else
    # BSD sed (macOS)
    sed -i '' "s/%%NAME%%/${NAME}/g" "$file"
  fi
done

echo "✅ Created scaffold at: $DEST_DIR"