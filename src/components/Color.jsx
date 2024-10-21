import React from "react";

class Color extends React.Component {
  render() {
    let style = {
      backgroundColor: this.props.hexCode,
    };
    return (
      <div
        className="w-32 h-32 rounded-lg shadow-xl border-4 border-white cursor-pointer transition-all transform hover:scale-110 hover:shadow-2xl hover:rotate-2 flex items-center justify-center text-white font-bold text-lg"
        style={style}
        onClick={this.props.update.bind(this, this.props.index)}
      >
        <p className="drop-shadow-lg">{this.props.hexCode}</p>
      </div>
    );
  }
}

export default Color;
