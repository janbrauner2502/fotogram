# 📸 Fotogram

An elegant, responsive photo album project that presents your personal images in a modern gallery view.

## 🌟 Features

- **Gallery View**: Clear presentation of all images in a grid layout
- **Overlay Viewer**: Click on an image to view it in full size
- **Navigation**: Navigate through your images with next and previous buttons
- **Image Numbering**: Shows the current position in the gallery (e.g., "1/10")
- **Responsive Design**: Optimized for different screen sizes
- **Smooth Scrolling**: Prevents disruptive scrolling in overlay mode

## 🚀 Demo

The project displays a personal photo album with 10 sample images shown in an attractive gallery.

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Custom Properties (CSS Variables)
- **Vanilla JavaScript**: No frameworks, pure JS functionality
- **Custom Font**: Coiny (Google Fonts)

## 📁 Project Structure

```
fotogram/
├── index.html           # Main HTML file
├── script.js           # JavaScript logic
├── stylesheet.css      # Main styles
├── font.css           # Font definitions
├── img/               # Image resources
│   ├── Image1.jpg - Image10.jpg
│   ├── buttons/       # UI icons (SVG)
│   ├── favicon/       # Favicon files
│   └── logo/          # Fotogram Logo
└── fonts/             # Coiny font files
```

## 🔧 Functionality

### Main Functions in `script.js`

- `openOverlay(index)` - Opens the image overlay
- `closeOverlay()` - Closes the overlay
- `nextImage(index)` - Navigates to the next image
- `prevImage(index)` - Navigates to the previous image
- `currentImage(index)` - Updates the displayed image
- `getContentTemplate(index)` - Generates the HTML for the overlay

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📄 License

This project was created for educational purposes.

## 👤 Author

Developed as part of the Developer Akademie

## 🙏 Acknowledgments

- Icons: Material Design Icons
- Font: Coiny by Sorkin Type (Google Fonts)

---

Have fun with Fotogram! 📸
