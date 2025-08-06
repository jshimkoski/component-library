#!/usr/bin/env node

/**
 * Documentation Synchronization Script
 * 
 * This script automatically     return `<template>
  <div class="content">
    <Prose>
      <h1>${title}</h1>
${htmlContent}
    </Prose>
  </div>
</template>`;zes component documentation from docs/ 
 * to their corresponding Vue component pages in src/pages/.
 * 
 * Usage:
 *   node scripts/sync-docs.js                    # Process all components
 *   node scripts/sync-docs.js --component Card   # Process specific component
 *   node scripts/sync-docs.js --dry-run          # Preview changes without writing
 */

const fs = require('fs');
const path = require('path');

class MarkdownParser {
  /**
   * Parse a markdown file and return structured content
   */
  parseFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      return {
        title: this.extractTitle(content),
        sections: this.extractSections(content),
        rawContent: content
      };
    } catch (error) {
      console.error(`Error parsing ${filePath}:`, error.message);
      return {};
    }
  }

  /**
   * Extract the main title from markdown content
   */
  extractTitle(content) {
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.startsWith('# ')) {
        return line.substring(2).trim();
      }
    }
    return 'Component';
  }

  /**
   * Extract sections from markdown content
   */
  extractSections(content) {
    const sections = [];
    const lines = content.split('\n');
    let currentSection = null;
    let currentContent = [];

    for (const line of lines) {
      if (line.startsWith('## ')) {
        if (currentSection) {
          sections.push({
            title: currentSection,
            content: currentContent.join('\n').trim(),
            level: 2
          });
        }
        currentSection = line.substring(3).trim();
        currentContent = [];
      } else if (currentSection) {
        currentContent.push(line);
      }
    }

    if (currentSection) {
      sections.push({
        title: currentSection,
        content: currentContent.join('\n').trim(),
        level: 2
      });
    }

    return sections;
  }
}

class VueComponentGenerator {
  /**
   * Generate a complete Vue component page from parsed markdown
   */
  generateVuePage(parsedData, componentName) {
    const title = parsedData.title || componentName;
    const content = parsedData.rawContent || '';
    
    // Convert the entire markdown content to HTML, excluding the title
    const contentWithoutTitle = this.removeMainTitle(content);
    const htmlContent = this.convertMarkdownToHtml(contentWithoutTitle);
    
    return `<template>
  <div class="content">
    <Prose>
      <h1>${title}</h1>
${htmlContent}
    </Prose>
  </div>
</template>

<script setup lang="ts">
</script>`;
  }

  /**
   * Remove the main title (# Title) from markdown content
   */
  removeMainTitle(content) {
    const lines = content.split('\n');
    let startIndex = 0;
    
    // Find and skip the first # title line
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('# ')) {
        startIndex = i + 1;
        break;
      }
    }
    
    return lines.slice(startIndex).join('\n');
  }

  /**
   * Convert markdown content to HTML
   */
  convertMarkdownToHtml(content) {
    const lines = content.split('\n');
    const htmlParts = [];
    let inList = false;
    let inCodeBlock = false;
    let currentCodeBlock = [];
    let codeLanguage = '';
    let inTable = false;
    let tableLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          if (currentCodeBlock.length > 0) {
            const codeContent = currentCodeBlock.join('\n');
            const escapedCode = this.escapeHtml(codeContent);
            htmlParts.push(`      <pre><code${codeLanguage ? ` class="language-${codeLanguage}"` : ''}>${escapedCode}</code></pre>`);
          }
          inCodeBlock = false;
          currentCodeBlock = [];
          codeLanguage = '';
        } else {
          // Start of code block
          inCodeBlock = true;
          const langMatch = trimmedLine.match(/^```(\w+)/);
          if (langMatch) {
            codeLanguage = langMatch[1];
          }
        }
        continue;
      }
      
      if (inCodeBlock) {
        currentCodeBlock.push(line);
        continue;
      }
      
      // Handle tables
      if (trimmedLine.includes('|') && (trimmedLine.startsWith('|') || trimmedLine.split('|').length >= 3)) {
        if (!inTable) {
          inTable = true;
          tableLines = [];
        }
        tableLines.push(trimmedLine);
        continue;
      } else if (inTable) {
        // End of table
        const tableHtml = this.convertTableToHtml(tableLines);
        htmlParts.push(tableHtml);
        inTable = false;
        tableLines = [];
        // Continue processing current line
      }
      
      // Skip empty lines
      if (!trimmedLine) {
        // Close any open list
        if (inList) {
          htmlParts.push(inList === 'ul' ? '      </ul>' : '      </ol>');
          inList = false;
        }
        continue;
      }
      
      // Handle lists
      if (trimmedLine.startsWith('- ')) {
        if (inList && inList !== 'ul') {
          htmlParts.push('      </ol>');
          inList = false;
        }
        if (!inList) {
          htmlParts.push('      <ul>');
          inList = 'ul';
        }
        const listItem = trimmedLine.substring(2).trim();
        const formattedItem = this.formatInlineCode(listItem);
        htmlParts.push(`        <li>${formattedItem}</li>`);
      } else if (/^\d+\.\s/.test(trimmedLine)) {
        // Handle numbered lists
        if (inList && inList !== 'ol') {
          htmlParts.push('      </ul>');
          inList = false;
        }
        if (!inList) {
          htmlParts.push('      <ol>');
          inList = 'ol';
        }
        const listItem = trimmedLine.replace(/^\d+\.\s/, '').trim();
        const formattedItem = this.formatInlineCode(listItem);
        htmlParts.push(`        <li>${formattedItem}</li>`);
      } else {
        // Close any open list
        if (inList) {
          htmlParts.push(inList === 'ul' ? '      </ul>' : '      </ol>');
          inList = false;
        }
        
        // Handle headings
        if (trimmedLine.startsWith('### ')) {
          const heading = trimmedLine.substring(4).trim();
          const escapedHeading = this.escapeHtml(heading);
          htmlParts.push(`      <h3>${escapedHeading}</h3>`);
        } else if (trimmedLine.startsWith('## ')) {
          const heading = trimmedLine.substring(3).trim();
          const escapedHeading = this.escapeHtml(heading);
          htmlParts.push(`      <h2>${escapedHeading}</h2>`);
        } else if (trimmedLine.startsWith('# ')) {
          // Skip main headings as they're handled separately
          continue;
        } else if (trimmedLine.match(/^<\/?.+\/?>/)) {
          // Skip HTML tags (both opening and closing) as they're typically example containers
          continue;
        } else {
          // Regular paragraph
          const formattedLine = this.formatInlineCode(trimmedLine);
          htmlParts.push(`      <p>${formattedLine}</p>`);
        }
      }
    }
    
    // Close any remaining code block
    if (inCodeBlock && currentCodeBlock.length > 0) {
      const codeContent = currentCodeBlock.join('\n');
      const escapedCode = this.escapeHtml(codeContent);
      htmlParts.push(`      <pre><code${codeLanguage ? ` class="language-${codeLanguage}"` : ''}>${escapedCode}</code></pre>`);
    }
    
    // Close any remaining table
    if (inTable && tableLines.length > 0) {
      const tableHtml = this.convertTableToHtml(tableLines);
      htmlParts.push(tableHtml);
    }
    
    // Close any open list
    if (inList) {
      htmlParts.push(inList === 'ul' ? '      </ul>' : '      </ol>');
    }
    
    return htmlParts.join('\n');
  }

  /**
   * Convert table lines to HTML
   */
  convertTableToHtml(tableLines) {
    if (tableLines.length < 2) {
      return '      <p>No table data found</p>';
    }
    
    // Parse header
    const headerLine = tableLines[0];
    const header = this.parseTableRow(headerLine);
    
    // Parse data rows (skip separator line at index 1)
    const dataRows = [];
    for (let i = 2; i < tableLines.length; i++) {
      const row = this.parseTableRow(tableLines[i]);
      if (row.length === header.length) {
        dataRows.push(row);
      }
    }
    
    // Generate HTML table
    const tableHtml = [
      '      <table class="w-full text-left border-collapse">',
      '        <thead>',
      '          <tr>'
    ];
    
    for (const cell of header) {
      tableHtml.push(`            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">${cell}</th>`);
    }
    
    tableHtml.push('          </tr>');
    tableHtml.push('        </thead>');
    tableHtml.push('        <tbody>');
    
    for (const row of dataRows) {
      tableHtml.push('          <tr>');
      for (const cell of row) {
        tableHtml.push(`            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">${cell}</td>`);
      }
      tableHtml.push('          </tr>');
    }
    
    tableHtml.push('        </tbody>');
    tableHtml.push('      </table>');
    
    return tableHtml.join('\n');
  }

  /**
   * Parse a table row and return array of cells
   */
  parseTableRow(line) {
    return line
      .split('|')
      .map(cell => cell.trim())
      .filter((cell, index, arr) => {
        // Remove empty cells at start and end (from leading/trailing |)
        return !(index === 0 && cell === '') && !(index === arr.length - 1 && cell === '');
      })
      .map(cell => {
        // Format inline code in table cells
        const formatted = this.formatInlineCode(cell);
        // Escape any remaining HTML in table cells
        const escaped = formatted.replace(/"/g, '&quot;');
        return escaped;
      });
  }

  /**
   * Format inline code within text
   */
  formatInlineCode(text) {
    // Handle inline code blocks first
    let result = text.replace(/`([^`]+)`/g, (match, code) => {
      return `<code>${this.escapeHtml(code)}</code>`;
    });
    
    // Escape all remaining angle brackets
    result = result.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Restore our code tags
    result = result.replace(/&lt;code&gt;/g, '<code>').replace(/&lt;\/code&gt;/g, '</code>');
    
    return result;
  }

  /**
   * Escape HTML characters for code display
   */
  escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\{\{/g, '&#123;&#123;')
      .replace(/\}\}/g, '&#125;&#125;');
  }

  /**
   * Process a single section and convert it to Vue template
   */
  processSection(section) {
    const title = section.title;
    const content = section.content;
    
    // Special handling for different section types
    if (title.toLowerCase() === 'overview') {
      return this.generateOverviewSection(content);
    } else if (['props', 'events', 'slots'].includes(title.toLowerCase())) {
      // Check if content contains a table
      if (content.includes('|') && content.split('\n').filter(line => line.includes('|')).length >= 2) {
        return this.generateTableSection(title, content);
      } else {
        // Handle as prose content for non-table Events/Slots
        return this.generateProseSection(title, content);
      }
    } else {
      // All other sections as prose with code snippets
      return this.generateProseSection(title, content);
    }
  }

  /**
   * Generate overview section with Prose component
   */
  generateOverviewSection(content) {
    const lines = content.split('\n');
    const overviewParagraphs = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine && 
          !trimmedLine.startsWith('#') && 
          !trimmedLine.startsWith('<div') && 
          !trimmedLine.startsWith('```')) {
        overviewParagraphs.push(trimmedLine);
      }
    }
    
    if (overviewParagraphs.length > 0) {
      const firstParagraph = overviewParagraphs[0];
      return `    <Prose>
      <h2>Overview</h2>
      <p>${firstParagraph}</p>
    </Prose>`;
    }
    
    return '';
  }

  /**
   * Generate a section with a table (Props, Events, Slots)
   */
  generateTableSection(title, content) {
    const tableHtml = this.extractAndConvertTable(content);
    
    return `    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">${title}</h2>
      ${tableHtml}
    </section>`;
  }

  /**
   * Generate a section with Prose component for text content
   */
  generateProseSection(title, content) {
    const proseContent = this.convertToProseHtml(content);
    
    return `    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">${title}</h2>
      
      <Prose>
        ${proseContent}
      </Prose>
    </section>`;
  }

  /**
   * Extract and convert markdown table to HTML
   */
  extractAndConvertTable(content) {
    const lines = content.split('\n').map(line => line.trim());
    const tableLines = lines.filter(line => line.includes('|') && (line.startsWith('|') || line.split('|').length >= 3));
    
    if (tableLines.length < 2) {
      return '<p>No table data found</p>';
    }
    
    // Parse header
    const headerLine = tableLines[0];
    const header = this.parseTableRow(headerLine);
    
    // Parse data rows (skip separator line at index 1)
    const dataRows = [];
    for (let i = 2; i < tableLines.length; i++) {
      const row = this.parseTableRow(tableLines[i]);
      if (row.length === header.length) {
        dataRows.push(row);
      }
    }
    
    // Generate HTML table
    const tableHtml = [
      '      <table class="w-full text-left border-collapse">',
      '        <thead>',
      '          <tr>'
    ];
    
    for (const col of header) {
      // Escape HTML in header cells
      const escapedCol = col
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
      tableHtml.push(`            <th class="py-2 px-4 border-b-2 border-base-200 dark:border-base-800">${escapedCol}</th>`);
    }
    
    tableHtml.push('          </tr>');
    tableHtml.push('        </thead>');
    tableHtml.push('        <tbody>');
    
    for (const row of dataRows) {
      tableHtml.push('          <tr>');
      for (const col of row) {
        // Escape HTML and handle code formatting
        let formattedCol = col
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
        
        // Handle code formatting after escaping
        formattedCol = formattedCol.replace(/`([^`]+)`/g, (match, code) => {
          return `<code>${this.escapeHtml(code)}</code>`;
        });
        
        tableHtml.push(`            <td class="py-2 px-4 border-b border-base-200 dark:border-base-800">${formattedCol}</td>`);
      }
      tableHtml.push('          </tr>');
    }
    
    tableHtml.push('        </tbody>');
    tableHtml.push('      </table>');
    
    return tableHtml.join('\n');
  }

  /**
   * Convert markdown content to HTML for Prose component
   */
  convertToProseHtml(content) {
    const lines = content.split('\n');
    const htmlParts = [];
    let inList = false;
    let inCodeBlock = false;
    let currentCodeBlock = [];
    let codeLanguage = '';
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          if (currentCodeBlock.length > 0) {
            const codeContent = currentCodeBlock.join('\n');
            const escapedCode = this.escapeHtml(codeContent);
            htmlParts.push(`<pre><code${codeLanguage ? ` class="language-${codeLanguage}"` : ''}>${escapedCode}</code></pre>`);
          }
          inCodeBlock = false;
          currentCodeBlock = [];
          codeLanguage = '';
        } else {
          // Start of code block
          inCodeBlock = true;
          // Extract language if specified (e.g., ```vue, ```javascript)
          const langMatch = trimmedLine.match(/^```(\w+)/);
          if (langMatch) {
            codeLanguage = langMatch[1];
          }
        }
        continue;
      }
      
      if (inCodeBlock) {
        currentCodeBlock.push(line); // Preserve original line formatting in code blocks
        continue;
      }
      
      // Skip empty lines
      if (!trimmedLine) continue;
      
      // Handle lists
      if (trimmedLine.startsWith('- ')) {
        if (inList && inList !== 'ul') {
          htmlParts.push('</ol>');
          inList = false;
        }
        if (!inList) {
          htmlParts.push('<ul>');
          inList = 'ul';
        }
        const listItem = trimmedLine.substring(2).trim();
        const formattedItem = this.formatInlineCode(listItem);
        htmlParts.push(`  <li>${formattedItem}</li>`);
      } else if (/^\d+\.\s/.test(trimmedLine)) {
        // Handle numbered lists
        if (inList && inList !== 'ol') {
          htmlParts.push('</ul>');
          inList = false;
        }
        if (!inList) {
          htmlParts.push('<ol>');
          inList = 'ol';
        }
        const listItem = trimmedLine.replace(/^\d+\.\s/, '').trim();
        const formattedItem = this.formatInlineCode(listItem);
        htmlParts.push(`  <li>${formattedItem}</li>`);
      } else {
        // Close any open list
        if (inList) {
          htmlParts.push(inList === 'ul' ? '</ul>' : '</ol>');
          inList = false;
        }
        
        // Handle headings
        if (trimmedLine.startsWith('### ')) {
          const heading = trimmedLine.substring(4).trim();
          // Escape HTML characters in method signatures
          const escapedHeading = this.escapeHtml(heading);
          htmlParts.push(`<h3>${escapedHeading}</h3>`);
        } else if (trimmedLine.startsWith('## ')) {
          const heading = trimmedLine.substring(3).trim();
          // Escape HTML characters in method signatures
          const escapedHeading = this.escapeHtml(heading);
          htmlParts.push(`<h2>${escapedHeading}</h2>`);
        } else if (trimmedLine.startsWith('# ')) {
          // Skip main headings as they're handled separately
          continue;
        } else if (trimmedLine.startsWith('<div') || trimmedLine.startsWith('<form') || trimmedLine.match(/^<\/?\w+/)) {
          // Skip HTML tags (both opening and closing) as they're typically example containers
          continue;
        } else {
          // Regular paragraph - skip HTML tags and closing tags
          if (!trimmedLine.match(/^<\/?\w+/)) {
            const formattedLine = this.formatInlineCode(trimmedLine);
            htmlParts.push(`<p>${formattedLine}</p>`);
          }
        }
      }
    }
    
    // Close any remaining code block
    if (inCodeBlock && currentCodeBlock.length > 0) {
      const codeContent = currentCodeBlock.join('\n');
      const escapedCode = this.escapeHtml(codeContent);
      htmlParts.push(`<pre><code${codeLanguage ? ` class="language-${codeLanguage}"` : ''}>${escapedCode}</code></pre>`);
    }
    
    // Close any open list
    if (inList) {
      htmlParts.push(inList === 'ul' ? '</ul>' : '</ol>');
    }
    
    return htmlParts.join('\n        ');
  }


  /**
   * Escape HTML characters for code display
   */
  escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\{\{/g, '&#123;&#123;')
      .replace(/\}\}/g, '&#125;&#125;');
  }


}

class DocumentationSynchronizer {
  constructor(docsDir, pagesDir) {
    this.docsDir = docsDir;
    this.pagesDir = pagesDir;
    this.parser = new MarkdownParser();
    this.generator = new VueComponentGenerator();
  }

  /**
   * Synchronize all component documentation
   */
  syncAllComponents(dryRun = false) {
    const docFiles = fs.readdirSync(this.docsDir)
      .filter(file => file.endsWith('.md'))
      .filter(file => 
        !file.startsWith('COMPONENT_') && 
        file !== 'README.md' && 
        !file.startsWith('USAGE_')
      );
    
    console.log(`Found ${docFiles.length} component documentation files`);
    
    let successCount = 0;
    for (const docFile of docFiles) {
      const componentName = path.basename(docFile, '.md');
      if (this.syncComponent(componentName, dryRun)) {
        successCount++;
      }
    }
    
    console.log(`Successfully processed ${successCount}/${docFiles.length} components`);
  }

  /**
   * Synchronize a specific component's documentation
   */
  syncComponent(componentName, dryRun = false) {
    const docFile = path.join(this.docsDir, `${componentName}.md`);
    const pageFile = path.join(this.pagesDir, `${componentName.toLowerCase()}-component.vue`);
    
    if (!fs.existsSync(docFile)) {
      console.error(`Documentation file not found: ${docFile}`);
      return false;
    }
    
    console.log(`Processing ${componentName}...`);
    
    try {
      // Parse documentation
      const parsedData = this.parser.parseFile(docFile);
      if (!parsedData.title) {
        console.error(`Failed to parse ${docFile}`);
        return false;
      }
      
      // Generate Vue component
      const vueContent = this.generator.generateVuePage(parsedData, componentName);
      
      if (dryRun) {
        console.log(`Would update ${pageFile}`);
        // Optionally print a preview
        console.log(`\n--- Preview for ${componentName} ---`);
        console.log(vueContent.substring(0, 500) + (vueContent.length > 500 ? '...' : ''));
        console.log('--- End Preview ---\n');
        return true;
      }
      
      // Ensure directory exists
      const pageDir = path.dirname(pageFile);
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      
      // Write Vue component
      fs.writeFileSync(pageFile, vueContent, 'utf8');
      
      console.log(`Updated ${pageFile}`);
      return true;
      
    } catch (error) {
      console.error(`Error processing ${componentName}:`, error.message);
      return false;
    }
  }

  /**
   * List all available components
   */
  listComponents() {
    const docFiles = fs.readdirSync(this.docsDir)
      .filter(file => file.endsWith('.md'))
      .filter(file => 
        !file.startsWith('COMPONENT_') && 
        file !== 'README.md' && 
        !file.startsWith('USAGE_')
      );
    
    return docFiles.map(file => path.basename(file, '.md')).sort();
  }
}

function main() {
  const args = process.argv.slice(2);
  const options = {
    component: null,
    dryRun: false,
    list: false,
    docsDir: 'docs',
    pagesDir: 'src/pages',
    verbose: false
  };
  
  // Parse arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--component':
      case '-c':
        options.component = args[++i];
        break;
      case '--dry-run':
      case '-d':
        options.dryRun = true;
        break;
      case '--list':
      case '-l':
        options.list = true;
        break;
      case '--docs-dir':
        options.docsDir = args[++i];
        break;
      case '--pages-dir':
        options.pagesDir = args[++i];
        break;
      case '--verbose':
      case '-v':
        options.verbose = true;
        break;
      case '--help':
      case '-h':
        console.log(`
Documentation Synchronization Script

Usage:
  node scripts/sync-docs.js [options]

Options:
  -c, --component <name>    Sync specific component (e.g., "Card")
  -d, --dry-run            Preview changes without writing files
  -l, --list               List all available components
  --docs-dir <path>        Documentation directory (default: docs)
  --pages-dir <path>       Pages directory (default: src/pages)
  -v, --verbose            Enable verbose logging
  -h, --help               Show this help message

Examples:
  node scripts/sync-docs.js                    # Sync all components
  node scripts/sync-docs.js -c Card            # Sync Card component only
  node scripts/sync-docs.js --dry-run          # Preview all changes
        `);
        process.exit(0);
    }
  }
  
  // Setup paths
  const scriptDir = path.dirname(__filename);
  const projectRoot = path.dirname(scriptDir);
  const docsDir = path.resolve(projectRoot, options.docsDir);
  const pagesDir = path.resolve(projectRoot, options.pagesDir);
  
  if (!fs.existsSync(docsDir)) {
    console.error(`Documentation directory not found: ${docsDir}`);
    process.exit(1);
  }
  
  const synchronizer = new DocumentationSynchronizer(docsDir, pagesDir);
  
  if (options.list) {
    const components = synchronizer.listComponents();
    console.log(`Available components (${components.length}):`);
    components.forEach(component => console.log(`  - ${component}`));
    process.exit(0);
  }
  
  if (options.component) {
    const success = synchronizer.syncComponent(options.component, options.dryRun);
    process.exit(success ? 0 : 1);
  } else {
    synchronizer.syncAllComponents(options.dryRun);
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { DocumentationSynchronizer, MarkdownParser, VueComponentGenerator };
