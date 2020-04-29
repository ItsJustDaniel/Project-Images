import React from "react";
import marked from "marked";
import "./App.css";

const initialMarkdown = `
### Header

# Header 1
## Header 2
### Header 3

[freecodecamp]("https://www.freecodecamp.com")

![Image]("https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png")

## text decorations

*itallics*

**bold**

***italics and bolded***

### BlockQuotes

> does this work

### Code

\`console.log('hello world!')\`


\`\`\`
function(){
  console.log("hello world")
}

\`\`\`

1. list
`;

marked.setOptions({
  breaks: true
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      markdown: initialMarkdown
    };
  }
  handleChange(i) {
    this.setState({
      markdown: i.target.value
    });
  }

  getMarkdownText() {
    const markup = marked(this.state.markdown);
    return { __html: markup };
  }

  render() {
    return (
      <div id="markDown">
        <textarea
          id="editor"
          value={this.state.markdown}
          onChange={i => this.handleChange(i)}
        ></textarea>

        <div
          id="preview"
          dangerouslySetInnerHTML={this.getMarkdownText()}
        ></div>
      </div>
    );
  }
}

export default App;
