import React from "react";

class Skeleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharkViewer: null
    };
    this.skelRef = React.createRef();
  }

  componentDidMount() {
    // set up the skeleton viewer object
    import("@janelia/sharkviewer").then(SharkViewer => {
      const sharkViewer = new SharkViewer.default({
        // eslint-disable-line new-cap
        dom_element: "skeletonviewer",
        WIDTH: this.skelRef.current.clientWidth,
        HEIGHT: this.skelRef.current.clientHeight
      });
      sharkViewer.init();
      sharkViewer.animate();
      this.setState({ sharkViewer });
    });
  }

  render() {
    // take swc data from props and render it into the 3D canvas
    const { sharkViewer } = this.state;
    const { swc } = this.props;
    const moveCamera = true;
    if (swc && sharkViewer) {
      sharkViewer.unloadNeuron("test");
      sharkViewer.loadNeuron("test", "#ff0000", swc, moveCamera);
      sharkViewer.render();
      sharkViewer.render();
      setTimeout(() => {
        sharkViewer.render();
      }, 200);
    }
    return (
      <div
        style={{ width: "100%", height: "100%", outline: "none" }}
        ref={this.skelRef}
        id="skeletonviewer"
      />
    );
  }
}

export default Skeleton;
