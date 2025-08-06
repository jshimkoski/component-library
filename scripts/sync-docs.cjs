#!/usr/bin/env node

/**
 * Documentation Synchronization Script
 * 
 * This script automatically synchronizes component documentation from docs/ 
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
    const sections = parsedData.sections || [];
    
    const templateContent = this.generateTemplate(title, sections);
    const scriptContent = this.generateScript(parsedData, componentName);
    
    return `<template>
  <div class="content">
${templateContent}
  </div>
</template>

${scriptContent}`;
  }

  /**
   * Generate the template section of the Vue component
   */
  generateTemplate(title, sections) {
    const contentParts = [];
    
    // Add title
    contentParts.push(`    <h1 class="text-3xl font-bold mb-6">${title}</h1>`);
    
    // Process sections
    for (const section of sections) {
      const sectionContent = this.processSection(section);
      if (sectionContent) {
        contentParts.push(sectionContent);
      }
    }
    
    return contentParts.join('\n\n');
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
    } else if (title.toLowerCase() === 'basic usage') {
      return this.generateBasicUsageSection(title, content);
    } else if (['props', 'events', 'slots'].includes(title.toLowerCase())) {
      // Check if content contains a table
      if (content.includes('|') && content.split('\n').filter(line => line.includes('|')).length >= 2) {
        return this.generateTableSection(title, content);
      } else {
        // Handle as prose content for non-table Events/Slots
        return this.generateProseSection(title, content);
      }
    } else if (this.isExampleSection(title)) {
      return this.generateExampleSection(title, content);
    } else {
      return this.generateGenericSection(title, content);
    }
  }

  /**
   * Check if a section is an example/variant/state section
   */
  isExampleSection(title) {
    const keywords = ['example', 'variant', 'state', 'best practices', 'accessibility'];
    return keywords.some(keyword => title.toLowerCase().includes(keyword));
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
   * Generate basic usage section with example and code
   */
  generateBasicUsageSection(title, content) {
    const codeBlocks = this.extractCodeBlocks(content);
    const divExamples = this.extractDivExamples(content);
    
    let basicExample = '';
    let codeExample = '';
    
    // Prefer div examples if they exist (legacy support)
    if (divExamples.length > 0) {
      basicExample = divExamples[0];
    }
    
    if (codeBlocks.length > 0) {
      codeExample = codeBlocks[0];
      
      // If no div example, generate live example from code
      if (!basicExample) {
        const liveExample = this.generateLiveExampleFromCode(codeExample);
        if (liveExample) {
          basicExample = liveExample;
        }
      }
    }
    
    // If no specific example found, create a placeholder
    if (!basicExample && !codeExample) {
      const componentName = title.replace(/\s+/g, '');
      basicExample = `<${componentName} label="Click me" />`;
      codeExample = `<${componentName} label="Click me" />`;
    }
    
    return `    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4">${title}</h2>
      
      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">
        ${basicExample}
      </div>

      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg">
        <pre class="text-sm overflow-x-auto"><code>${this.escapeHtml(codeExample)}</code></pre>
      </div>
    </section>`;
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
   * Generate example sections
   */
  generateExampleSection(title, content) {
    if (['best practices', 'accessibility considerations'].includes(title.toLowerCase())) {
      return this.generateProseSection(title, content);
    }
    
    const subsections = this.extractSubsections(content);
    
    const sectionContent = [`    <section class="mb-10">`];
    sectionContent.push(`      <h2 class="text-xl font-semibold mb-4">${title}</h2>`);
    
    if (subsections.length === 0) {
      const processedContent = this.processContentBlock(content);
      sectionContent.push(`      ${processedContent}`);
    } else {
      for (const subsection of subsections) {
        const subsectionHtml = this.processSubsection(subsection);
        sectionContent.push(`      ${subsectionHtml}`);
      }
    }
    
    sectionContent.push('    </section>');
    
    return sectionContent.join('\n');
  }

  /**
   * Generate a section with mixed content (interactive examples + code)
   */
  generateMixedContentSection(title, content, divExamples, codeBlocks) {
    const sectionParts = [`    <section class="mb-10">`];
    sectionParts.push(`      <h2 class="text-xl font-semibold mb-4">${title}</h2>`);
    
    // Generate live example from code block (if no div examples)
    if (divExamples.length === 0 && codeBlocks.length > 0) {
      const liveExample = this.generateLiveExampleFromCode(codeBlocks[0]);
      if (liveExample) {
        sectionParts.push(`      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">`);
        sectionParts.push(`        ${liveExample}`);
        sectionParts.push(`      </div>`);
      }
    }
    
    // Add interactive example from div (legacy support)
    if (divExamples.length > 0) {
      sectionParts.push(`      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">`);
      sectionParts.push(`        ${divExamples[0]}`);
      sectionParts.push(`      </div>`);
    }
    
    // Add any descriptive text content (non-div, non-code)
    const textContent = this.extractTextContent(content);
    if (textContent.trim()) {
      sectionParts.push(`      <Prose>`);
      const proseContent = this.convertToProseHtml(textContent);
      sectionParts.push(`        ${proseContent}`);
      sectionParts.push(`      </Prose>`);
    }
    
    // Add code example
    if (codeBlocks.length > 0) {
      sectionParts.push(`      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">`);
      sectionParts.push(`        <pre class="text-sm overflow-x-auto"><code>${this.escapeHtml(codeBlocks[0])}</code></pre>`);
      sectionParts.push(`      </div>`);
    }
    
    sectionParts.push(`    </section>`);
    return sectionParts.join('\n');
  }

  /**
   * Generate a section with only interactive content
   */
  generateInteractiveSection(title, content, divExamples) {
    const sectionParts = [`    <section class="mb-10">`];
    sectionParts.push(`      <h2 class="text-xl font-semibold mb-4">${title}</h2>`);
    
    sectionParts.push(`      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">`);
    sectionParts.push(`        ${divExamples[0]}`);
    sectionParts.push(`      </div>`);
    
    // Add any descriptive text content
    const textContent = this.extractTextContent(content);
    if (textContent.trim()) {
      sectionParts.push(`      <Prose>`);
      const proseContent = this.convertToProseHtml(textContent);
      sectionParts.push(`        ${proseContent}`);
      sectionParts.push(`      </Prose>`);
    }
    
    sectionParts.push(`    </section>`);
    return sectionParts.join('\n');
  }

  /**
   * Generate a section with only code content
   */
  generateCodeSection(title, content, codeBlocks) {
    const sectionParts = [`    <section class="mb-10">`];
    sectionParts.push(`      <h2 class="text-xl font-semibold mb-4">${title}</h2>`);
    
    // Generate live example from code block
    if (codeBlocks.length > 0) {
      const liveExample = this.generateLiveExampleFromCode(codeBlocks[0]);
      if (liveExample) {
        sectionParts.push(`      <div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">`);
        sectionParts.push(`        ${liveExample}`);
        sectionParts.push(`      </div>`);
      }
    }
    
    // Add any descriptive text content
    const textContent = this.extractTextContent(content);
    if (textContent.trim()) {
      sectionParts.push(`      <Prose>`);
      const proseContent = this.convertToProseHtml(textContent);
      sectionParts.push(`        ${proseContent}`);
      sectionParts.push(`      </Prose>`);
    }
    
    sectionParts.push(`      <div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">`);
    sectionParts.push(`        <pre class="text-sm overflow-x-auto"><code>${this.escapeHtml(codeBlocks[0])}</code></pre>`);
    sectionParts.push(`      </div>`);
    
    sectionParts.push(`    </section>`);
    return sectionParts.join('\n');
  }

  /**
   * Extract text content (non-div, non-code blocks)
   */
  extractTextContent(content) {
    const lines = content.split('\n');
    const textLines = [];
    let inCodeBlock = false;
    let inDivBlock = false;
    let divDepth = 0;
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Skip empty lines
      if (!trimmedLine) continue;
      
      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      
      if (inCodeBlock) continue;
      
      // Handle div blocks
      if (trimmedLine.startsWith('<div')) {
        inDivBlock = true;
        divDepth++;
        continue;
      }
      
      if (inDivBlock) {
        if (trimmedLine.includes('<div')) divDepth++;
        if (trimmedLine.includes('</div>')) {
          divDepth--;
          if (divDepth === 0) {
            inDivBlock = false;
          }
        }
        continue;
      }
      
      // Skip section headers
      if (trimmedLine.startsWith('#')) continue;
      
      // This is text content
      textLines.push(trimmedLine);
    }
    
    return textLines.join('\n');
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
   * Generate a generic section
   */
  generateGenericSection(title, content) {
    const divExamples = this.extractDivExamples(content);
    const codeBlocks = this.extractCodeBlocks(content);
    
    // If section has both div examples and code blocks, handle as mixed content
    if (divExamples.length > 0 && codeBlocks.length > 0) {
      return this.generateMixedContentSection(title, content, divExamples, codeBlocks);
    }
    
    // If section has only div examples, handle as interactive content
    if (divExamples.length > 0) {
      return this.generateInteractiveSection(title, content, divExamples);
    }
    
    // If section has only code blocks, handle as code section
    if (codeBlocks.length > 0) {
      return this.generateCodeSection(title, content, codeBlocks);
    }
    
    return this.generateProseSection(title, content);
  }

  /**
   * Extract code blocks from markdown content
   */
  extractCodeBlocks(content) {
    const pattern = /```(?:vue)?\n(.*?)\n```/gs;
    const matches = [];
    let match;
    
    while ((match = pattern.exec(content)) !== null) {
      matches.push(match[1].trim());
    }
    
    return matches;
  }

  /**
   * Generate live example from Vue code snippet
   */
  generateLiveExampleFromCode(codeBlock) {
    if (!codeBlock || !codeBlock.trim()) {
      return null;
    }

    try {
      // Parse the Vue code to extract components
      const templateMatch = codeBlock.match(/<template[^>]*>(.*?)<\/template>/s);
      let templateContent = '';
      
      if (templateMatch) {
        // Full Vue SFC - extract template content
        templateContent = templateMatch[1].trim();
      } else {
        // Just component tags - use as is
        templateContent = codeBlock.trim();
      }

      // Clean up the template content and format for live example
      templateContent = templateContent
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('\n        ');

      return templateContent;
    } catch (error) {
      console.warn('Could not parse code block for live example:', error.message);
      return null;
    }
  }

  /**
   * Extract component examples from <div> blocks
   */
  extractDivExamples(content) {
    const matches = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Look for div with bg-base-50 class
      if (line.includes('<div') && line.includes('bg-base-50')) {
        const startIndex = i;
        let divCount = 1; // Count the opening div
        let endIndex = -1;
        const contentLines = [];
        
        // Find the matching closing div
        for (let j = i + 1; j < lines.length; j++) {
          const currentLine = lines[j];
          
          // Count opening and closing divs
          const openingDivs = (currentLine.match(/<div/g) || []).length;
          const closingDivs = (currentLine.match(/<\/div>/g) || []).length;
          
          divCount += openingDivs - closingDivs;
          
          if (divCount === 0) {
            endIndex = j;
            break;
          } else {
            contentLines.push(currentLine);
          }
        }
        
        if (endIndex !== -1) {
          // Extract the content between the divs (excluding the wrapper div)
          let innerContent = contentLines.join('\n').trim();
          
          if (innerContent) {
            // Clean up indentation
            const cleanedLines = innerContent
              .split('\n')
              .map(line => line.trim())
              .filter(line => line.length > 0);
            
            if (cleanedLines.length > 0) {
              const formattedContent = cleanedLines.join('\n        ');
              matches.push(formattedContent);
            }
          }
        }
      }
    }
    
    return matches;
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
   * Parse a table row from markdown
   */
  parseTableRow(line) {
    // Handle lines that start and end with |
    if (line.startsWith('|') && line.endsWith('|')) {
      line = line.slice(1, -1);
    }
    
    // Split by | but be careful about escaped pipes and pipes in code blocks
    const cells = [];
    let currentCell = '';
    let inCodeBlock = false;
    let escapeNext = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];
      
      if (escapeNext) {
        currentCell += char;
        escapeNext = false;
        continue;
      }
      
      if (char === '\\') {
        // Handle escaped characters - don't include the backslash in output
        if (nextChar === '|') {
          // This is an escaped pipe, add the pipe without the backslash
          currentCell += '|';
          i++; // Skip the next character since we've processed it
          continue;
        } else {
          // For other escaped characters, include the backslash
          escapeNext = true;
          currentCell += char;
          continue;
        }
      }
      
      if (char === '`') {
        inCodeBlock = !inCodeBlock;
        currentCell += char;
        continue;
      }
      
      if (char === '|' && !inCodeBlock) {
        cells.push(currentCell.trim());
        currentCell = '';
        continue;
      }
      
      currentCell += char;
    }
    
    // Add the last cell
    if (currentCell || cells.length > 0) {
      cells.push(currentCell.trim());
    }
    
    return cells;
  }

  /**
   * Extract subsections from content
   */
  extractSubsections(content) {
    const subsections = [];
    const lines = content.split('\n');
    let currentSubsection = null;
    let currentContent = [];
    
    for (const line of lines) {
      if (line.startsWith('### ')) {
        if (currentSubsection) {
          subsections.push({
            title: currentSubsection,
            content: currentContent.join('\n').trim()
          });
        }
        currentSubsection = line.substring(4).trim();
        currentContent = [];
      } else {
        currentContent.push(line);
      }
    }
    
    if (currentSubsection) {
      subsections.push({
        title: currentSubsection,
        content: currentContent.join('\n').trim()
      });
    }
    
    return subsections;
  }

  /**
   * Process a subsection with examples
   */
  processSubsection(subsection) {
    const title = subsection.title;
    const content = subsection.content;
    
    const divExamples = this.extractDivExamples(content);
    const codeBlocks = this.extractCodeBlocks(content);
    
    const htmlParts = [`<h3 class="text-lg font-medium mt-6 mb-3">${title}</h3>`];
    
    // Add example div
    const exampleContent = divExamples.length > 0 ? divExamples[0] : '<!-- Add interactive example here -->';
    htmlParts.push('<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">');
    
    // Handle multi-line content properly
    if (exampleContent.includes('\n')) {
      htmlParts.push(`        ${exampleContent}`);
    } else {
      htmlParts.push(`  ${exampleContent}`);
    }
    
    htmlParts.push('</div>');
    
    // Add code block if found
    if (codeBlocks.length > 0) {
      const code = codeBlocks[0];
      const escapedCode = this.escapeHtml(code);
      htmlParts.push('<div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">');
      htmlParts.push(`  <pre class="text-sm overflow-x-auto"><code>${escapedCode}</code></pre>`);
      htmlParts.push('</div>');
    }
    
    return htmlParts.join('\n      ');
  }

  /**
   * Process a content block that may contain examples
   */
  processContentBlock(content) {
    const divExamples = this.extractDivExamples(content);
    const codeBlocks = this.extractCodeBlocks(content);
    
    if (divExamples.length === 0 && codeBlocks.length === 0) {
      return `<p>${content.substring(0, 100)}...</p>`;
    }
    
    const htmlParts = [];
    
    if (divExamples.length > 0) {
      htmlParts.push('<div class="bg-base-50 dark:bg-base-900 p-6 rounded-lg mb-4">');
      
      const exampleContent = divExamples[0];
      if (exampleContent.includes('\n')) {
        htmlParts.push(`        ${exampleContent}`);
      } else {
        htmlParts.push(`  ${exampleContent}`);
      }
      
      htmlParts.push('</div>');
    }
    
    if (codeBlocks.length > 0) {
      htmlParts.push('<div class="bg-base-50 dark:bg-base-900 p-4 rounded-lg mb-6">');
      htmlParts.push(`  <pre class="text-sm overflow-x-auto"><code>${this.escapeHtml(codeBlocks[0])}</code></pre>`);
      htmlParts.push('</div>');
    }
    
    return htmlParts.join('\n      ');
  }

  /**
   * Convert markdown content to HTML for Prose component
   */
  convertToProseHtml(content) {
    const lines = content.split('\n');
    const htmlParts = [];
    let inList = false;
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;
      
      if (trimmedLine.startsWith('- ')) {
        if (!inList) {
          htmlParts.push('<ul>');
          inList = true;
        }
        const listItem = trimmedLine.substring(2).trim();
        const formattedItem = listItem.replace(/`([^`]+)`/g, (match, code) => {
          return `<code>${this.escapeHtml(code)}</code>`;
        });
        htmlParts.push(`  <li>${formattedItem}</li>`);
      } else {
        if (inList) {
          htmlParts.push('</ul>');
          inList = false;
        }
        
        if (!trimmedLine.startsWith('#') && 
            !trimmedLine.startsWith('<div') && 
            !trimmedLine.startsWith('```')) {
          const formattedLine = trimmedLine.replace(/`([^`]+)`/g, (match, code) => {
            return `<code>${this.escapeHtml(code)}</code>`;
          });
          htmlParts.push(`<p>${formattedLine}</p>`);
        }
      }
    }
    
    if (inList) {
      htmlParts.push('</ul>');
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

  /**
   * Generate the script section of the Vue component
   */
  generateScript(parsedData, componentName) {
    // First generate the template to see what variables and components are actually used
    const sections = parsedData.sections || [];
    const templateContent = this.generateTemplate(parsedData.title || componentName, sections);
    
    // Extract variables that are actually used in the final template
    const usedVariables = this.extractUsedVariables(templateContent);
    const usedComponents = this.extractUsedComponents(templateContent, componentName);
    
    if (usedVariables.length === 0 && usedComponents.length === 0) {
      return '<script setup lang="ts">\n</script>';
    }
    
    // Now find declarations for these variables from the documentation
    const variableDeclarations = this.findVariableDeclarations(parsedData, usedVariables);
    
    const imports = [];
    const scriptLines = [];
    
    // Add Vue imports if needed
    const vueImports = [];
    if (variableDeclarations.some(v => v.includes('ref('))) {
      vueImports.push('ref');
    }
    if (variableDeclarations.some(v => v.includes('reactive('))) {
      vueImports.push('reactive');
    }
    
    if (vueImports.length > 0) {
      imports.push(`import { ${vueImports.join(', ')} } from 'vue';`);
    }
    
    // Add component imports
    for (const comp of usedComponents) {
      if (comp === 'Icon') {
        imports.push(`import { Icon } from '@iconify/vue';`);
      } else {
        imports.push(`import ${comp} from '../components/${comp}.vue';`);
      }
    }
    
    if (imports.length > 0) {
      scriptLines.push(...imports);
      scriptLines.push('');
    }
    scriptLines.push(...variableDeclarations);
    
    return `<script setup lang="ts">
${scriptLines.join('\n')}
</script>`;
  }

  /**
   * Extract variables that are actually used in the template
   */
  extractUsedVariables(templateContent) {
    const variables = new Set();
    
    // Only look at the first interactive example section (Basic Usage)
    // This avoids picking up variables from later complex examples
    const basicUsageMatch = templateContent.match(/<section class="mb-10">\s*<h2 class="text-xl font-semibold mb-4">Basic Usage<\/h2>([\s\S]*?)<\/section>/);
    
    let contentToAnalyze = templateContent;
    if (basicUsageMatch) {
      contentToAnalyze = basicUsageMatch[1];
    }
    
    // Extract v-model variables
    const vModelMatches = contentToAnalyze.match(/v-model="([^"]+)"/g);
    if (vModelMatches) {
      for (const match of vModelMatches) {
        const varName = match.match(/v-model="([^"]+)"/)[1];
        if (!varName.includes('.') && this.isValidVariableName(varName)) {
          variables.add(varName);
        }
      }
    }
    
    // Extract bound variables (:prop="variable") - but only actual variables, not literals
    const bindMatches = contentToAnalyze.match(/:[\w-]+="([^"]+)"/g);
    if (bindMatches) {
      for (const match of bindMatches) {
        const varName = match.match(/:[\w-]+="([^"]+)"/)[1];
        if (this.isValidVariableName(varName) && 
            !varName.includes('.') && 
            !varName.includes('(') && 
            !varName.startsWith('"') &&
            !this.isLiteral(varName)) {
          variables.add(varName);
        }
      }
    }
    
    return Array.from(variables);
  }

  /**
   * Extract components that are actually used in the template
   */
  extractUsedComponents(templateContent, currentComponentName) {
    const components = new Set();
    
    // Look for component usage in the template (capital letter component names)
    const componentMatches = templateContent.match(/<[A-Z][a-zA-Z0-9]*(?:\s|>|\/)/g);
    if (componentMatches) {
      for (const match of componentMatches) {
        const compName = match.replace(/[<>\s/]/g, '');
        // Don't include the current component being documented or globally available components
        if (compName !== currentComponentName && 
            !['Prose'].includes(compName)) { // Prose is globally available, Icon is handled specially
          components.add(compName);
        }
      }
    }
    
    return Array.from(components);
  }

  /**
   * Check if a string is a valid JavaScript variable name
   */
  isValidVariableName(name) {
    return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
  }

  /**
   * Check if a value is a literal (number, boolean, etc.)
   */
  isLiteral(value) {
    return /^(true|false|\d+|null|undefined)$/.test(value);
  }

  /**
   * Find variable declarations from documentation for the used variables
   */
  findVariableDeclarations(parsedData, usedVariables) {
    const declarations = [];
    const foundVars = new Set();
    
    for (const varName of usedVariables) {
      if (foundVars.has(varName)) continue;
      
      // Try to find declaration in code examples - prefer exact match
      let declaration = this.findVariableInCodeExamples(parsedData, varName);
      
      if (!declaration) {
        // Generate a sensible default based on variable name and usage pattern
        declaration = this.generateDefaultDeclaration(varName);
      }
      
      declarations.push(declaration);
      foundVars.add(varName);
    }
    
    return declarations;
  }

  /**
   * Find a variable declaration in code examples
   */
  findVariableInCodeExamples(parsedData, varName) {
    for (const section of parsedData.sections || []) {
      const codeBlocks = this.extractCodeBlocks(section.content);
      
      for (const code of codeBlocks) {
        // Look for the specific variable declaration
        const refPattern = new RegExp(`const\\s+${varName}\\s*=\\s*ref\\([^)]*\\);`, 'g');
        const refMatch = code.match(refPattern);
        if (refMatch) {
          return refMatch[0];
        }
        
        // Look for array/object declarations and convert to ref
        const arrayPattern = new RegExp(`const\\s+${varName}\\s*=\\s*(\\[[\\s\\S]*?\\]);`, 'gm');
        const arrayMatch = arrayPattern.exec(code);
        if (arrayMatch) {
          return `const ${varName} = ref(${arrayMatch[1]});`;
        }
      }
    }
    
    return null;
  }

  /**
   * Generate a sensible default declaration for a variable
   */
  generateDefaultDeclaration(varName) {
    if (varName.toLowerCase().includes('slide') && !varName.toLowerCase().includes('slides')) {
      return `const ${varName} = ref(0);`;
    } else if (varName.toLowerCase().includes('current')) {
      return `const ${varName} = ref(0);`;
    } else if (varName.toLowerCase().includes('slides') || varName.toLowerCase().includes('items')) {
      return `const ${varName} = ref([
  { content: 'Slide 1 Content', image: 'https://placeholder.pics/svg/400x200' },
  { content: 'Slide 2 Content', image: 'https://placeholder.pics/svg/400x200' },
  { content: 'Slide 3 Content', image: 'https://placeholder.pics/svg/400x200' }
]);`;
    } else {
      return `const ${varName} = ref(null);`;
    }
  }

  /**
   * Extract variables from template and code examples
   */
  extractVariablesFromContent(parsedData) {
    const variables = [];
    const foundVars = new Set();
    
    // First pass: Extract from template usage (higher priority)
    for (const section of parsedData.sections || []) {
      const divExamples = this.extractDivExamples(section.content);
      
      // Extract from div examples (template usage)
      for (const example of divExamples) {
        const templateVars = this.extractTemplateVariables(example);
        for (const varInfo of templateVars) {
          if (!foundVars.has(varInfo.name)) {
            foundVars.add(varInfo.name);
            variables.push(varInfo);
          }
        }
      }
    }
    
    // Second pass: Extract from code blocks only if not already found in templates
    for (const section of parsedData.sections || []) {
      const codeBlocks = this.extractCodeBlocks(section.content);
      
      // Extract from code blocks (script examples) - only add if not in template
      for (const code of codeBlocks) {
        const scriptVars = this.extractScriptVariables(code);
        for (const varInfo of scriptVars) {
          if (!foundVars.has(varInfo.name)) {
            foundVars.add(varInfo.name);
            variables.push(varInfo);
          }
        }
      }
    }
    
    return variables;
  }

  /**
   * Extract variables from template content
   */
  extractTemplateVariables(templateContent) {
    const variables = [];
    
    // Extract v-model variables
    const vModelMatches = templateContent.match(/v-model="([^"]+)"/g);
    if (vModelMatches) {
      for (const match of vModelMatches) {
        const varName = match.match(/v-model="([^"]+)"/)[1];
        if (varName.includes('.')) continue; // Skip object properties
        
        variables.push({
          name: varName,
          type: 'ref',
          declaration: `const ${varName} = ref(0);`
        });
      }
    }
    
    // Extract :items or other array props
    const itemsMatches = templateContent.match(/:items="([^"]+)"/g);
    if (itemsMatches) {
      for (const match of itemsMatches) {
        const varName = match.match(/:items="([^"]+)"/)[1];
        if (varName.includes('.')) continue; // Skip object properties
        
        // Generate appropriate default data based on component
        let defaultValue = '[]';
        if (varName.includes('slide')) {
          defaultValue = `[
  { content: 'Slide 1 Content', image: 'https://placeholder.pics/svg/400x200' },
  { content: 'Slide 2 Content', image: 'https://placeholder.pics/svg/400x200' },
  { content: 'Slide 3 Content', image: 'https://placeholder.pics/svg/400x200' }
]`;
        }
        
        variables.push({
          name: varName,
          type: 'ref',
          declaration: `const ${varName} = ref(${defaultValue});`
        });
      }
    }
    
    return variables;
  }

  /**
   * Extract variables from script content
   */
  extractScriptVariables(scriptContent) {
    const variables = [];
    
    // Look for variable declarations in script examples
    const refMatches = scriptContent.match(/const\s+(\w+)\s*=\s*ref\([^)]*\);/g);
    if (refMatches) {
      for (const match of refMatches) {
        const varMatch = match.match(/const\s+(\w+)\s*=\s*(ref\([^)]*\));/);
        if (varMatch) {
          variables.push({
            name: varMatch[1],
            type: 'ref',
            declaration: `const ${varMatch[1]} = ${varMatch[2]};`
          });
        }
      }
    }
    
    // Look for array/object declarations - convert to ref for reactivity
    const arrayMatches = scriptContent.match(/const\s+(\w+)\s*=\s*\[[^\]]*\];/gs);
    if (arrayMatches) {
      for (const match of arrayMatches) {
        const varMatch = match.match(/const\s+(\w+)\s*=\s*(\[[\s\S]*?\]);/);
        if (varMatch) {
          variables.push({
            name: varMatch[1],
            type: 'ref',
            declaration: `const ${varMatch[1]} = ref(${varMatch[2]});`
          });
        }
      }
    }
    
    return variables;
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
