import * as React from 'react';

interface Document {
  id: number;
  tag: string;
  name: string;
  filepath: string;
}

interface MyComponentState {
  error: Error | null;
  isLoaded: boolean;
  items: Document[];
}

export default class Documents extends React.Component<{}, MyComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/documents")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error: Error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (<div>Error: {error.message}</div>)
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item: Document) => (
            <li key={item.id}>
              {item.tag} {item.name} {item.filepath}
            </li>
          ))}
        </ul>
      );
    }
  }
}
