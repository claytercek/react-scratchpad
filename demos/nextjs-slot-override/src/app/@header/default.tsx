export default function DefaultHeader({ recolor }: { recolor?: boolean }) {
  return <div style={{
    color: recolor ? 'red' : 'initial'
  }}>this is the default header!</div>;
}