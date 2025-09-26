# WordPress Scroll Progress Bar Plugin

A simple WordPress Gutenberg block that adds a customizable scroll progress bar to your pages and posts.

## Description

This plugin creates a visual scroll progress indicator that shows how much of the page content has been scrolled. The progress bar appears at the top of the page and fills as the user scrolls down.

## Features

- **Gutenberg Block**: Easy to add via the block editor
- **Customizable Height**: Adjust the progress bar thickness (default: 4px)
- **Custom Colors**: Set both progress bar color and background color
- **Lightweight**: Only loads assets when the block is used
- **Responsive**: Works on all device sizes

## Installation

### Manual Installation

1. Download the plugin files
2. Upload the `scroll-progress-bar` folder to your `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Add the "Scroll Progress Bar" block to any page or post

### From GitHub

```bash
cd wp-content/plugins
git clone https://github.com/pwmikolajek/wp-scroll-progress-bar.git scroll-progress-bar
```

## Usage

1. Edit any page or post in the WordPress block editor
2. Add a new block and search for "Scroll Progress Bar"
3. Customize the settings in the block sidebar:
   - **Height**: Set the thickness of the progress bar (in pixels)
   - **Progress Color**: Choose the color of the progress fill
   - **Background Color**: Set the background color of the progress bar
4. Save/publish your page

The progress bar will automatically appear at the top of the page when viewing the frontend.

## Block Settings

- **Height**: Controls the thickness of the progress bar (default: 4px)
- **Progress Color**: The color of the progress fill (default: WordPress blue)
- **Background Color**: The background color of the progress bar (default: light gray)

## Technical Details

- **Plugin Version**: 1.0.0
- **WordPress Compatibility**: 5.0+
- **PHP Version**: 7.0+
- **Block Namespace**: `scroll-progress-bar/progress-bar`

## File Structure

```
scroll-progress-bar/
├── scroll-progress-bar.php    # Main plugin file
├── assets/
│   ├── editor.js             # Block editor JavaScript
│   ├── editor.css            # Block editor styles
│   ├── frontend.js           # Frontend functionality
│   └── frontend.css          # Frontend styles
└── README.md                 # This file
```

## License

This plugin is licensed under the GPL v2 or later.

## Support

For support, please create an issue on the [GitHub repository](https://github.com/pwmikolajek/wp-scroll-progress-bar).