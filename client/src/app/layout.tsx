import Header from "../components/Header/Header";
import StyledComponentsRegistry from "../lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="My App is a..." />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <div id="root">{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
