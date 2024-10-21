import React from 'react';
import Color from './Color';

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      colorNumber: 600, // Number of colors
      colors: []
    };
    
    // Fill colors array with random colors
    for (let i = 0; i < this.state.colorNumber; i++) {
      this.state.colors.push({ hexCode: this.colorGenerator() });
    }
  }

  // Function to generate random hex color code
  colorGenerator() {
    return '#' + Math.floor(Math.random() * 16255215).toString(16).padStart(6, '0');
  }

  // Update color on click
  UpdateColor(index) {
    let colors = this.state.colors.slice(); // Copy the colors array
    const newColor = this.colorGenerator(); // Generate new random color
    colors[index].hexCode = newColor; // Update the color at the given index
    this.setState({ colors:colors }); // Set the new state
  }

  render() {
    return (
      <div className='grid grid-cols-7 gap-6 p-6'>
        {/* Grid layout with 3 columns */}
        {this.state.colors.map((color, index) => (
          <Color 
            key={`color-${index}`} 
            index={index} 
            update={this.UpdateColor.bind(this)} 
            hexCode={color.hexCode} 
          />
        ))}
      </div>
    );
  }
}

export default MyApp;
