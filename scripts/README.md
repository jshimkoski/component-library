# Documentation Sync Script

This script synchronizes component pages in `src/pages` with their corresponding documentation in the `docs/` directory.

## Features

- Automatically updates Vue component pages to match their Markdown documentation
- Uses the Prose component for HTML-only content
- Creates backups before making changes
- Supports dry-run previews
- Can update all components or specific components

## Usage

### Using npm scripts (recommended):

```bash
# List all available components
npm run sync-docs:list

# Preview changes without making them (dry run)
npm run sync-docs:dry-run

# Update all components
npm run sync-docs

# Update a specific component (dry run)
npm run sync-docs -- --component Dialog --dry-run

# Update a specific component
npm run sync-docs -- --component Dialog
```

### Using node directly:

```bash
# List all available components
node scripts/sync-docs.cjs --list

# Preview changes without making them (dry run)
node scripts/sync-docs.cjs --dry-run

# Update all components
node scripts/sync-docs.cjs

# Update a specific component (dry run)
node scripts/sync-docs.cjs --component Dialog --dry-run

# Update a specific component
node scripts/sync-docs.cjs --component Dialog
```

## How it works

1. The script finds all Vue component files in `src/pages` ending with `-component.vue`
2. For each component, it looks for corresponding documentation in `docs/`
3. It parses the Markdown documentation to extract sections
4. It generates a new Vue template with:
   - A Prose component containing the documentation HTML
   - Original script and style sections preserved
5. Creates a backup of the original file before overwriting

## Backup Files

When the script updates a file, it creates a backup with the current timestamp:
- Original: `src/pages/dialog-component.vue`
- Backup: `src/pages/dialog-component.vue.backup.2024-01-15-10-30-45`

## Documentation Template

The script follows the structure defined in `docs/COMPONENT_DOCUMENTATION_TEMPLATE.md` for consistent formatting.

## Supported Components

The script automatically detects components based on the presence of both:
- A Vue file in `src/pages` (e.g., `dialog-component.vue`)
- A corresponding Markdown file in `docs/` (e.g., `Dialog.md`)

Use `npm run sync-docs:list` to see all available components.
