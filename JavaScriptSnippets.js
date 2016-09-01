{
  /*
	 // Place your snippets for JavaScript here. Each snippet is defined under a snippet name and has a prefix, body and
	 // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	 // $1, $2 for tab stops, ${id} and ${id:label} and ${1:label} for variables. Variables with the same id are connected.
	 // Example:
*/
  "Localize": {
    "prefix": "localize",
    "body": [
      "localizer.get('${1:Message}')$2"
    ],
    "description": "Localize variables"
  },
  "Print to console": {
    "prefix": "logVariable",
    "body": [
      "console.log('${2:Console Message} ${1:Variable to Log}', ${1}); $3"
    ],
    "description": "Log output to console"
  },
  "Print to console with pretty color": {
    "prefix": "logColor",
    "body": [
      "console.log('%c${2:Console Message} ${1:Variable to Log}', 'color:${3:red}', ${1}); $4"
    ],
    "description": "Log output to console"
  },
  "Make a function in an object literal": {
    "prefix": "makefunction",
    "body": [
      "${1:Function Name}: function(${2: Variables}){",
      "$3",
      "},"
    ],
    "description": "Make a function in a javascript object"
  },
  "Classic Component": {
    "prefix": "React Component extends React.Component",
    "body": [
      "import React, { Component, PropTypes } from 'react';",
      "",
      "class ${1:Name of Component} extends Component {",
      "  constructor(props){",
      "    super(props);",
      "    this.state = {};",
      "  }",
      "// componentWillMount(){}",
      "// componentDidMount(){}",
      "// componentWillReceiveProps(nextProps) {}",
      "// shouldComponentUpdate(nextProps, nextState) true",
      "// componentWillUpdate(nextProps, nextState) {}",
      "// componentDidUpdate(prevProps, prevState) {}",
      "// componentWillUnmount() {}",
      "  render(){",
      "    return (",
      "      <div>",
      "      </div>",
      "    );",
      "  }",
      "}",
      "",
      "${1:Name of Component}.propTypes = {};",
      "",
      "${1:Name of Component}.defaultProps = {};",
      "",
      "export default ${1:Name of Component};$2"
    ],
    "description": "Classic react component created with the react create class method."
  },
  "Classic Component From Create Class": {
    "prefix": "React Component React.CreateClass",
    "body": [
      "import React from 'react';",
      "",
      "const ${1:Name of Component} = React.createClass({",
      "  propTypes: {",
      "  },",
      "// displayName: \"\",",
      "// mixins: [],",
      "// statics: {},",
      "// getInitialState: () => Object.assign({}),",
      "// getDefaultProps: () => Object.assign({}),",
      "// componentWillMount: () => {},",
      "// componentDidMount: () => {},",
      "// componentWillReceiveProps: (nextProps) => {},",
      "// shouldComponentUpdate: (nextProps, nextState) => true,",
      "// componentWillUpdate: (nextProps, nextState) => {},",
      "// componentDidUpdate: (prevProps, prevState) => {},",
      "// componentWillUnmount: ()=>{},",
      "  render: function() {",
      "    return (",
      "      <div>",
      "      </div>",
      "    );",
      "  }",
      "});",
      "",
      "export default ${1:Name of Component};$2"
    ],
    "description": "Classic react component created with the react create class method."
  }
}
