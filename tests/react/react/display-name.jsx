var Hello1 = createReactClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

const Hello2 = React.memo(({ a }) => {
  return <>{a}</>
})

export default ({ a }) => {
  return <>{a}</>
}