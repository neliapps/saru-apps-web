export const metadata = {
  title: "Saru Apps Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "100vh" }}>
      {children}
    </div>
  );
}
