export default function ColorBoxLayout({ children, left, right }) {
  const isColor = false;

  return (
    <>
      <div>
        {children}
        {isColor ? left : right}
      </div>
    </>
  );
}
