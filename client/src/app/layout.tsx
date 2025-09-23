import Header from "../components/Header/Header";
import StyledComponentsRegistry from "../lib/registry";
import QueryProvider from "../provider/query";

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
      <body
        style={{
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <StyledComponentsRegistry>
          <div id="root">
            <Header />
            <QueryProvider>
              <div style={{ paddingTop: "50px" }}>{children}</div>
            </QueryProvider>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
