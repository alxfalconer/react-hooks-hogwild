class HogTile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false
      };
    }
    getImage = hogName => {
      let formattedName = hogName
        .split(" ")
        .join("_")
        .toLowerCase();
      let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
      return pigPics;
    };
}